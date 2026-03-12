"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

// クッキーを取得
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

// クッキーを設定（1日有効）
function setCookie(name: string, value: string): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + 1);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// 訪問者カウンターコンポーネント
export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const recordAndFetchVisitor = async () => {
      try {
        // 開発環境ではクッキーチェックをスキップ（毎回インクリメント）
        const isDev = process.env.NODE_ENV === 'development';
        const hasVisited = isDev ? false : getCookie("visited_daily");

        // 未訪問の場合のみカウントを増やす
        if (!hasVisited) {
          await fetch("/api/visitor", { method: "POST" });
          setCookie("visited_daily", "1");
        }

        // キャッシュ回避のためタイムスタンプを付与してカウントを取得
        const res = await fetch(`/api/visitor?t=${Date.now()}`);
        const data = await res.json();
        if (data.count !== undefined) {
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    recordAndFetchVisitor();
  }, []);

  if (visitorCount === null) return null;

  return (
    <>
      <span
        className="text-text-muted text-sm flex items-center gap-1 cursor-default"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      >
        <Eye className="w-4 h-4" />
        {visitorCount.toLocaleString()} visitors
      </span>
      {showTooltip && (
        <p
          className="fixed px-3 py-1.5 text-xs text-secondary bg-surface-elevated rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
          style={{ left: mousePos.x + 12, top: mousePos.y - 28 }}
        >
          キリ番踏み逃げ厳禁！
        </p>
      )}
    </>
  );
}
