"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const recordAndFetchVisitor = async () => {
      try {
        // 訪問を記録
        await fetch("/api/visitor", { method: "POST" });

        // カウントを取得
        const res = await fetch("/api/visitor");
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

  return (
    <footer className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} void2610. All rights reserved.
          </p>
          {visitorCount !== null && (
            <span className="text-text-muted text-sm flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {visitorCount.toLocaleString()} visitors
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
