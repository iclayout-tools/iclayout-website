import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Intelligent Concepts and Layouts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
            From precision IC layout design to transformative software solutions
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
            We turn complex technical challenges into elegant solutions—whether designing integrated circuits, building custom software, or integrating AI to transform workflows and drive business efficiency.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-800 text-white rounded font-semibold hover:bg-blue-900 transition text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive solutions from silicon to software, delivered with precision engineering.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                IC Layout Design
              </h3>
              <p className="text-gray-600 mb-4">
                Expert IC layout and design services with precision and reliability you can trust.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom IC design solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Layout automation & scripting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>DRC/LVS verification</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Software Development
              </h3>
              <p className="text-gray-600 mb-4">
                Tailored applications for your business—from concept to deployment.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Full-stack web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom business solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Modern, scalable architecture</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Business Efficiency
              </h3>
              <p className="text-gray-600 mb-4">
                Process optimization and automation to streamline workflows and reduce costs.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Workflow automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Process optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom integrations</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                AI Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Harness the power of AI to transform your workflows and unlock new capabilities.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>AI-powered automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Intelligent workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom AI solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Precision Engineering, Evolved
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
            Founded on a foundation of precision IC layout design, we've evolved into a full-service software development partner. We apply the same meticulous engineering approach to every project—from silicon to software to intelligent automation.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            We take a true partnership approach—you work directly with the engineers building your solution from concept to deployment. This means faster communication, consistent quality, and personal attention to your project at every stage.
          </p>
        </div>
      </section>

      {/* Rapid Development */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Speed Meets Quality
              </h2>
              <p className="text-gray-600 mb-6">
                We build sophisticated, data-driven platforms with modern web technologies, delivering functional MVPs in as little as 5 weeks.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1">✓</span>
                  <span>Full-stack web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1">✓</span>
                  <span>Modern, scalable architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1">✓</span>
                  <span>Responsive, intuitive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-3 mt-1">✓</span>
                  <span>Production-ready code</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-800 mb-2">
                  5 Weeks
                </div>
                <p className="text-gray-600 font-medium mb-4">Average time to MVP</p>
                <p className="text-gray-500 text-sm">
                  From concept to working prototype, we move fast without cutting corners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform your ideas into reality?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can help bring your vision to life with precision engineering and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-800 rounded font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">iclayout.com</h3>
              <p className="text-gray-400">
                Intelligent Concepts and Layouts—precision IC design and transformative software solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Imagine the Possibilities</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">
                Interested in working with us?
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition">
                Contact us today →
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lambda Holding LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
