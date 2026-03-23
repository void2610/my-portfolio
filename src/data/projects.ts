export type Platform = "github" | "unityroom" | "steam" | "itch.io";

export interface Project {
  title: string;
  description: string;
  platform: Platform;
  tags: string[];
  url: string;
  publishedDate: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "凋落のグランディディエ",
    description:
      "吐くことで宝石を生み出す姉と、涙で宝石を作る弟。二人は宝石店を営みながら、借金と生活のために、日々それを売り続けている。絶望と凋落のマルチエンドADV。",
    platform: "unityroom",
    tags: ["Unity", "C#", "unity1week", "Team-Up!!"],
    url: "https://unityroom.com/games/grandidier",
    publishedDate: "2026-03-22",
    imageUrl: "/images/grandidier.png",
    featured: true,
  },
  {
    title: "あれ？何を買いにきたんだっけ？",
    description:
      "「何か買い忘れている気がする……？」忘れっぽい主人公、残されたメモをヒントに、忘れてしまったもう一つを当ててあげよう！",
    platform: "unityroom",
    tags: ["Unity", "C#", "Team-Up!!"],
    url: "https://unityroom.com/games/arenani",
    publishedDate: "2026-01-20",
    imageUrl: "/images/projects/arenani.png",
    featured: true,
  },
  {
    title: "がんばれ！まおうちゃん！",
    description: "まおうちゃんが分身を大量生産し、壁をぶち壊すクリッカーゲーム",
    platform: "unityroom",
    tags: ["Unity", "C#", "unity1week", "Team-Up!!"],
    url: "https://unityroom.com/games/maouchan",
    publishedDate: "2025-12-28",
    imageUrl: "/images/projects/maouchan.png",
    featured: true,
  },
  {
    title: "庭小人の庭",
    description: "植物を畑で育てながら戦うデッキ構築型ローグライクゲーム。",
    platform: "steam",
    tags: ["Unity", "C#", "Team-Up!!"],
    url: "https://store.steampowered.com/app/4105720/",
    publishedDate: "2025-12-31",
    imageUrl: "/images/projects/garden-gnome.png",
    featured: true,
  },
  {
    title: "本当に ×10 Bでいいのか？ ~そしてAと逃げる~",
    description:
      "イケメン2人から同時に告白された主人公が、奇妙な選択ループと予測不能なトラブルに巻き込まれていく短編アドベンチャーゲーム。",
    platform: "unityroom",
    tags: ["Unity", "C#"],
    url: "https://unityroom.com/games/hontouni",
    publishedDate: "2025-12-11",
    imageUrl: "/images/projects/hontouni.png",
  },
  {
    title: "VOID RED プロモーションページ",
    description:
      "VOID REDの宣伝用ランディングページ。ゲームの魅力を効果的に伝えるWebサイト",
    platform: "github",
    tags: ["TypeScript", "Next.js"],
    url: "https://github.com/void2610/void-red-promotion-page",
    publishedDate: "2025-08-29",
    imageUrl: "/images/projects/void-red-landing-page.png",
  },
  {
    title: "VOID RED",
    description:
      "記憶と感情を揺さぶる対話型カードゲーム。ゲームクリエイター甲子園 参加作品",
    platform: "steam",
    tags: ["Unity", "C#", "ゲームクリエイター甲子園"],
    url: "https://void-red.void2610.dev/",
    publishedDate: "2025-08-29",
    imageUrl: "/images/projects/void-red.jpg",
    featured: true,
  },
  {
    title: "聖なる竜のストリエナ",
    description:
      "夜の帳とともに、黒い竜が舞い降りた。『邪竜』と呼ばれたそれは、瞬く間に周囲を焼き払い、壊し尽くす。ストリエナの行動を決定し、市民を「撤退」させるカードバトルゲーム。unity1week テーマ「ひく」, unity1week Team-Up!!作品",
    platform: "unityroom",
    tags: ["Unity", "C#", "unity1week", "Team-Up!!"],
    url: "https://unityroom.com/games/striena-the-holy-dragon",
    publishedDate: "2025-08-10",
    imageUrl: "/images/projects/striena-the-holy-dragon.png",
    featured: true,
  },
  {
    title: "コンコロ幻界",
    description:
      "転がす、感じる、クセになる。 BitSummitGameJam参加作品。ゲームデザイン賞・電撃ゲームメディア総編集長賞受賞",
    platform: "itch.io",
    tags: ["Unity", "C#", "BitSummit"],
    url: "https://bitsummit-gamejam.itch.io/konkoro",
    publishedDate: "2025-07-17",
    imageUrl: "/images/projects/konkoro.png",
    featured: true,
  },
  {
    title: "陽なたのアイビー",
    description:
      "ツタの魔物、アイビーちゃんに近寄ってくる魔物を狩って栄養にしよう！ unity1week テーマ「あい」,  unity1week TeamUp!!作品",
    platform: "unityroom",
    tags: ["Unity", "C#", "unity1week", "Team-Up!!"],
    url: "https://unityroom.com/games/ivy-survivor",
    publishedDate: "2025-04-21",
    imageUrl: "/images/projects/ivy-survivor.png",
    featured: true,
  },
  {
    title: "Calm Fishing",
    description:
      "風景と波の音で癒される半放置ゲーム。マウスで雨雲を退けて、凪いだ海で釣りを楽しもう。 unity1week テーマ「ない」",
    platform: "unityroom",
    tags: ["Unity", "C#", "unity1week"],
    url: "https://unityroom.com/games/calm-fishing",
    publishedDate: "2024-12-29",
    imageUrl: "/images/projects/calm-fishing.png",
    featured: true,
  },
  {
    title: "送り盆",
    description:
      "敵の攻撃を「返す」ことで戦うコマンドバトルRPG。送り盆の夜、先祖の霊を導くために戦う。 unity1week テーマ「かえす」",
    platform: "unityroom",
    tags: ["Unity", "C#", "unity1week"],
    url: "https://unityroom.com/games/okuribon",
    publishedDate: "2024-08-17",
    imageUrl: "/images/projects/okuribon.png",
  },
  {
    title: "Touchstone",
    description:
      "ひたすら上を目指す、シンプルなアクションゲーム。装備の組み合わせで多彩なプレイスタイルを楽しめる。",
    platform: "unityroom",
    tags: ["Unity", "C#"],
    url: "https://unityroom.com/games/touchstone",
    publishedDate: "2024-06-23",
    imageUrl: "/images/projects/touchstone.png",
  },
  {
    title: "Sumo Survivors!",
    description:
      "物理演算で敵を押し出す、ヴァンサバ風のアクションゲーム。多彩なスキルによって、カオスな絵面が楽しめる。",
    platform: "unityroom",
    tags: ["Unity", "C#"],
    url: "https://unityroom.com/games/sumo_survivors",
    publishedDate: "2024-02-11",
    imageUrl: "/images/projects/sumo-survivors.png",
  },
  {
    title: "SIGMA COALESCE",
    description:
      "Peglinとスイカゲームからインスパイアされた、デッキ構築型パズルローグライク。現在開発停止中...",
    platform: "steam",
    tags: ["Unity", "C#"],
    url: "https://store.steampowered.com/app/3646540/",
    publishedDate: "2025-07-01",
    imageUrl: "/images/projects/sigma-coalesce.jpg",
  },
  {
    title: "Simple-YouTube-Player",
    description:
      "YouTubeのAPIを呼び出すことで、広告ブロッカーを使わなくとも広告なしでYouTube動画を再生できる、シンプルなYouTubeプレイヤー。",
    platform: "github",
    tags: ["TypeScript", "Tauri", "YouTube API"],
    url: "https://github.com/void2610/Simple-YouTube-Player",
    publishedDate: "2023-06-17",
    imageUrl: "/images/projects/simple-youtube-player.png",
    featured: true,
  },
  {
    title: "ACVI-Randomizer",
    description:
      "Armored Core VI: Fires of Rubiconのアセンブルをランダムで生成するツール。Next.jsの練習用に作成。",
    platform: "github",
    tags: ["TypeScript", "Next.js"],
    url: "https://github.com/void2610/ACVI-Randomizer",
    publishedDate: "2023-08-25",
    imageUrl: "/images/projects/acvi-randomizer.png",
  },
  {
    title: "PaOn",
    description:
      "コロナ禍で外遊びができない子供のための、屋内で公園遊びができるゲーム。第33回全国高専プログラミングコンテスト 課題部門 特別賞受賞作品。",
    platform: "github",
    tags: ["Unity", "C#", "MagicOnion", "Procon"],
    url: "https://github.com/void2610/PaOn",
    publishedDate: "2022-10-15",
    imageUrl: "/images/projects/paon.png",
  },
  {
    title: "PRMUL",
    description:
      "自分の移動状況、場所によって最適なBGMが流れるAndroidアプリ。ふくいソフトウェアコンペティション 企業賞受賞作品。",
    platform: "github",
    tags: ["Java", "Android", "Google Maps API", "Fukui Soft Compe"],
    url: "https://github.com/void2610/PRMUL",
    publishedDate: "2020-10-14",
    imageUrl: "/images/projects/prmul.png",
  },
  {
    title: "ToumeiRO",
    description:
      "壁が透明な迷路を探索するゲーム。初めてのUnity作品。日本ゲーム大賞U18部門 参加作品",
    platform: "github",
    tags: ["Unity", "C#"],
    url: "https://github.com/void2610/ToumeiRO",
    publishedDate: "2020-01-28",
    imageUrl: "/images/projects/toumeiro.jpg",
  },
  {
    title: "Geo Search FUKUI",
    description:
      "福井県の地盤オープンデータを活用した、地盤情報検索アプリ。 jig.jpにて行われた地盤オープンデータハッカソンにて開発。",
    platform: "github",
    tags: ["javascript", "html", "open data"],
    url: "https://github.com/void2610/Geo-search-FUKUI",
    publishedDate: "2023-01-29",
    imageUrl: "/images/projects/geo-search-fukui.png",
  },
  {
    title: "論破王ふくゆき",
    description:
      "福井の魅力に関するディベートでふくゆきを論破せよ！福井県の魅力を学べるLLMを活用したLINE bot。 TwoGate DevCamp 2023 summerにて開発。",
    platform: "github",
    tags: ["javascript", "Node.js", "LINE Messaging API", "OpenAI API"],
    url: "https://github.com/sibakaretasuisoTeam/Fukuyuki-Ronpa-Bot",
    publishedDate: "2023-08-29",
    imageUrl: "/images/projects/fukuyuki-ronpa-bot.jpg",
  },
  {
    title: "2023年度福井高専祭HP",
    description:
      "福井高専の2023年度文化祭の公式ホームページ。GitHubやVercelを活用し、大人数での開発環境を構築。",
    platform: "github",
    tags: ["TypeScript", "Next.js"],
    url: "https://github.com/nitfc-festival-system-team/2023hp",
    publishedDate: "2023-10-27",
    imageUrl: "/images/projects/2023hp.png",
  },
  {
    title: "VR-CET",
    description:
      "VR空間で仮想的な喫煙を行うことで、タバコ依存症治療のためのキュー曝露療法を支援するシステム。日本バーチャルリアリティ学会にて発表。",
    platform: "github",
    tags: ["Unity", "C#", "VR", "Research"],
    url: "https://github.com/void2610/VR-CET-Unity-2023",
    publishedDate: "2024-01-12",
    imageUrl: "/images/projects/vr-cet.png",
  },
];
