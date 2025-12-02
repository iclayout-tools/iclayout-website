import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              iclayout.com
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/services" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Services
            </Link>
            <Link href="/portfolio" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Portfolio
            </Link>
            <Link href="/contact" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
