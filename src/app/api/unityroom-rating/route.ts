import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

// 評価データの型定義
interface RatingData {
  gameName: string;
  ratingCount: number;
  ratings: Record<string, number>;
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    // URL検証
    if (!url || !url.includes("unityroom.com/games/")) {
      return NextResponse.json(
        { error: "有効なunityroomのゲームURLを入力してください" },
        { status: 400 }
      );
    }

    // HTMLを取得
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "ja,en-US;q=0.7,en;q=0.3",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "ページの取得に失敗しました" },
        { status: response.status }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // ゲーム名を取得（h1タグから）
    const gameName =
      $("h1").first().text().trim() ||
      $('meta[property="og:title"]').attr("content") ||
      "不明";

    // data-data属性を持つcanvas要素を検索
    const canvas = $("canvas[data-data]");

    if (canvas.length === 0) {
      // 評価数不足のメッセージを確認
      const pageText = $.text();
      if (
        pageText.includes("評価数が不足") ||
        pageText.includes("評価がまだありません")
      ) {
        return NextResponse.json(
          { error: "評価数が不足しているため表示されません" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "評価データが見つかりませんでした" },
        { status: 404 }
      );
    }

    // data-data属性のJSONをパース
    const dataAttr = canvas.attr("data-data");
    if (!dataAttr) {
      return NextResponse.json(
        { error: "評価データの解析に失敗しました" },
        { status: 500 }
      );
    }

    // JSONパース
    let chartData;
    try {
      chartData = JSON.parse(dataAttr);
    } catch {
      return NextResponse.json(
        { error: "評価データの形式が不正です" },
        { status: 500 }
      );
    }

    // ラベルと評価値を取得
    const labels: string[] = chartData.labels || [];
    const values: number[] = chartData.datasets?.[0]?.data || [];
    const datasetLabel: string = chartData.datasets?.[0]?.label || "";

    // 評価数をdatasetLabelから抽出（"評価71件の平均"形式）
    const ratingCountMatch = datasetLabel.match(/評価(\d+)件/);
    const ratingCount = ratingCountMatch
      ? parseInt(ratingCountMatch[1], 10)
      : 0;

    const ratings: Record<string, number> = {};
    labels.forEach((label: string, index: number) => {
      ratings[label] = values[index] ?? 0;
    });

    const result: RatingData = {
      gameName,
      ratingCount,
      ratings,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching rating:", error);
    return NextResponse.json(
      { error: "評価データの取得中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
