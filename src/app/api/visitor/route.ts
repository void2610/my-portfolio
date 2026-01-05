import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { createHash } from "crypto";

// IPアドレスをハッシュ化
function hashIP(ip: string): string {
  return createHash("sha256").update(ip).digest("hex").substring(0, 16);
}

// 訪問を記録
export async function POST(request: Request) {
  try {
    // IPアドレスを取得
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
    const ipHash = hashIP(ip);

    // 訪問を記録（同じIP+日付なら無視）
    const { error } = await supabase
      .from("visitors")
      .upsert(
        { ip_hash: ipHash, visited_at: new Date().toISOString().split("T")[0] },
        { onConflict: "ip_hash,visited_at", ignoreDuplicates: true }
      );

    if (error) {
      console.error("Error recording visit:", error);
      return NextResponse.json({ error: "記録に失敗しました" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "エラーが発生しました" }, { status: 500 });
  }
}

// ユニーク訪問者数を取得
export async function GET() {
  try {
    const { count, error } = await supabase
      .from("visitors")
      .select("ip_hash", { count: "exact", head: true });

    if (error) {
      console.error("Error fetching count:", error);
      return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
    }

    // ユニーク訪問者数を取得
    const { data: uniqueData, error: uniqueError } = await supabase
      .from("visitors")
      .select("ip_hash");

    if (uniqueError) {
      console.error("Error fetching unique count:", uniqueError);
      return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
    }

    const uniqueVisitors = new Set(uniqueData?.map((v) => v.ip_hash)).size;

    return NextResponse.json({ count: uniqueVisitors });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "エラーが発生しました" }, { status: 500 });
  }
}
