import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">
              iclayout.com
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-800 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-800 transition font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-800 transition font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-800 transition font-medium">
              Imagine the Possibilities
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-800 transition font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
