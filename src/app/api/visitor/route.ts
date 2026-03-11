import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 訪問者数をインクリメント
export async function POST() {
  try {
    // カウントを1増やす（アトミック操作）
    const { error } = await supabase.rpc("increment_visitor_count");

    if (error) {
      console.error("Error incrementing count:", error);
      return NextResponse.json({ error: "記録に失敗しました" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "エラーが発生しました" }, { status: 500 });
  }
}

// 訪問者数を取得
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("visitor_counter")
      .select("count")
      .eq("id", 1)
      .single() as { data: { count: number } | null; error: unknown };

    if (error) {
      console.error("Error fetching count:", error);
      return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
    }

    return NextResponse.json({ count: data?.count || 0 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "エラーが発生しました" }, { status: 500 });
  }
}
