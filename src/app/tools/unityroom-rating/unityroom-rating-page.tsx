"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Search } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import GradientText from "@/components/GradientText";
import { DURATION, DELAY } from "@/config/animations";

// 評価データの型定義
interface RatingData {
  gameName: string;
  ratingCount: number;
  ratings: Record<string, number>;
}

export default function UnityroomRatingPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ratingData, setRatingData] = useState<RatingData | null>(null);
  const [copied, setCopied] = useState(false);

  // 評価データをテキスト形式に変換
  const formatRatingText = (data: RatingData): string => {
    const values = Object.values(data.ratings);
    const average =
      values.length > 0
        ? values.reduce((sum, v) => sum + v, 0) / values.length
        : 0;

    const lines = [
      `${data.gameName}の評価`,
      `評価数: ${data.ratingCount}`,
      "",
      ...Object.entries(data.ratings).map(
        ([key, value]) => `${key}: ${value.toFixed(2)}`,
      ),
      "",
      `平均: ${average.toFixed(2)}`,
    ];
    return lines.join("\n");
  };

  // 評価データを取得
  const fetchRating = async () => {
    if (!url.trim()) {
      setError("URLを入力してください");
      return;
    }

    setLoading(true);
    setError(null);
    setRatingData(null);

    try {
      const response = await fetch("/api/unityroom-rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "エラーが発生しました");
        return;
      }

      setRatingData(data);
    } catch {
      setError("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  // クリップボードにコピー
  const copyToClipboard = async () => {
    if (!ratingData) return;

    try {
      await navigator.clipboard.writeText(formatRatingText(ratingData));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("コピーに失敗しました");
    }
  };

  // Enterキーで送信
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      fetchRating();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 min-h-[calc(100vh-150px)]">
      {/* ヘッダー */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT }}
        className="mb-8 text-center"
      >
        <GradientText as="h1" size="2xl">
          Unityroom評価取得
        </GradientText>
        <p className="text-secondary mt-4">
          unityroomのゲームURLを入力すると、評価データを取得してコピーできます
        </p>
      </motion.div>

      {/* URL入力フォーム */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: DELAY.SMALL }}
        className="mb-8"
      >
        <Card className="bg-surface-elevated rounded-2xl shadow-lg">
          <CardBody className="p-6">
            <div className="flex gap-4">
              <input
                type="url"
                name="unityroom-url"
                autoComplete="on"
                placeholder="https://unityroom.com/games/ゲームID"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-surface text-primary border border-border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
              />
              <button
                onClick={fetchRating}
                disabled={loading}
                className="min-w-[100px] px-4 py-2 bg-surface-elevated text-primary rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 border border-border-primary"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-gray-800 dark:border-t-white rounded-full animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                <span>取得</span>
              </button>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* エラー表示 */}
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <Card className="bg-danger-50 dark:bg-danger-900/20 rounded-2xl">
            <CardBody className="p-4">
              <p className="text-danger text-center">{error}</p>
            </CardBody>
          </Card>
        </motion.div>
      )}

      {/* 評価データ表示 */}
      {ratingData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.DEFAULT }}
        >
          <Card className="bg-surface-elevated rounded-2xl shadow-lg">
            <CardHeader className="flex justify-between items-center px-6 pt-6">
              <h2 className="text-xl font-semibold text-primary">評価データ</h2>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg border border-border-primary transition-shadow ${
                  copied ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : "bg-surface-elevated text-primary"
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "コピーしました" : "コピー"}</span>
              </button>
            </CardHeader>
            <CardBody className="p-6 pt-2">
              <pre className="whitespace-pre-wrap font-mono text-sm text-secondary bg-surface p-4 rounded-xl border-border-primary border">
                {formatRatingText(ratingData)}
              </pre>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
