import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              Portfolio
            </Link>
          </div>
          
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}