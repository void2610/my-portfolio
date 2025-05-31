export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Game Project 1</h3>
          <p className="text-gray-600 mb-4">
            ゲーム開発プロジェクトの説明がここに入ります。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Unity</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">C#</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Application</h3>
          <p className="text-gray-600 mb-4">
            ウェブアプリケーション開発プロジェクトの説明がここに入ります。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">React</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">TypeScript</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Tool</h3>
          <p className="text-gray-600 mb-4">
            ソフトウェアツール開発プロジェクトの説明がここに入ります。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Python</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">CLI</span>
          </div>
        </div>
      </div>
    </div>
  );
}