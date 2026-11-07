"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { DURATION, DELAY } from "@/config/animations";

const sections = [
  {
    heading: "このサイトで取得する情報",
    body: [
      "アクセス解析のために Vercel Analytics を利用しています。閲覧したページや参照元などの匿名の統計情報が Vercel に送られます。個人を特定する情報や Cookie は使用しません。",
      "訪問者カウンターは合計の訪問数だけを記録し、訪問者ごとの情報は保存しません。",
    ],
  },
  {
    heading: "Google アカウントと連携するツール",
    body: [
      "void2610 と開発チームが制作に使う次のツールは、Google アカウントの認可を受けて Google のデータにアクセスします。",
      "rclone による Google ドライブの同期: 共有フォルダのファイルを読み取り、指定したフォルダへファイルをアップロードします。",
      "Unity エディタのローカライズ連携: ゲームの翻訳テキストを管理する Google スプレッドシートを読み書きします。",
      "取得したデータは、認可した本人の端末と、そのツールが読み書きする Google ドライブ・スプレッドシートの中にだけ置かれ、void2610 のサーバーや第三者へ送信・共有・販売することはありません。",
      "Google API から受け取った情報の利用と他アプリへの転送は、Google API Services User Data Policy (Limited Use の要件を含む) に従います。",
      "連携は Google アカウントの「サードパーティ製のアプリとサービス」からいつでも解除できます。",
    ],
  },
  {
    heading: "お問い合わせ",
    body: ["本ポリシーに関するお問い合わせは、Contact ページに記載の連絡先までお寄せください。"],
  },
];

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 min-h-[calc(100vh-150px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT }}
        className="mb-12 text-center"
      >
        <GradientText as="h1" size="2xl">
          Privacy Policy
        </GradientText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: DELAY.SMALL }}
        className="space-y-10 mb-24"
      >
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-primary mb-4">{section.heading}</h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
        <p className="text-muted text-sm">最終更新日: 2026年11月7日</p>
      </motion.div>
    </div>
  );
}
