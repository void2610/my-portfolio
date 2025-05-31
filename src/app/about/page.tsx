export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          こんにちは！ゲームクリエイター、ソフトウェアエンジニアとして活動しています。
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Game Development</li>
              <li>• Software Engineering</li>
              <li>• Web Development</li>
              <li>• Programming</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
            <p className="text-gray-700">
              ゲーム開発とソフトウェア開発の経験があります。詳細は後日追加予定です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}