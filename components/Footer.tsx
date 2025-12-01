import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">iclayout.com</h3>
            <p className="text-slate-400">
              Intelligent Concepts and Layouts—precision IC design and transformative software solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-slate-400 mb-2">
              Interested in working with us?
            </p>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition">
              Contact us today →
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Lambda Holding LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
