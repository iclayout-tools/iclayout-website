import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80')"}}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 opacity-95" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Intelligent Concepts and Layouts
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto">
            From precision IC layout design to transformative software solutions
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            We turn complex technical challenges into elegant solutions—whether designing integrated circuits, building custom software, or integrating AI to transform workflows and drive business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="relative p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&q=80')"}} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  Integrated Circuit Layout Design
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Expert IC layout and design services with precision and reliability you can trust.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Custom IC design solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Precision layout engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Industry-standard tools & practices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80')"}} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  Custom Software Development
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Tailored applications for your business—from concept to deployment.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                    <span>Full-stack web applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                    <span>Custom business solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 dark:text-cyan-400 mr-2">✓</span>
                    <span>Modern, scalable architecture</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80')"}} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  Business Efficiency Solutions
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Process optimization and automation to streamline workflows and reduce costs.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span>Process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 - AI Integration */}
            <div className="relative p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80')"}} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  AI Integration & Workflow Automation
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Harness the power of AI to transform your workflows and unlock new capabilities.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                    <span>AI-powered automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                    <span>Intelligent workflow optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                    <span>Custom AI solutions & integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Precision Engineering, Evolved
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Founded on a foundation of precision IC layout design, we've evolved into a full-service software development partner leveraging cutting-edge AI technology.
            We apply the same meticulous engineering approach to every project—from silicon to software to intelligent automation.
            Our experience in integrated circuit design informs our software development, bringing unparalleled attention to detail,
            performance optimization, and system-level thinking to every solution we create. By integrating AI into our workflows and client solutions,
            we unlock new levels of efficiency and innovation that traditional approaches simply can't match.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            As a boutique operation, you work directly with our core engineering team from concept to deployment. This means faster communication,
            consistent quality, and personal attention to your project at every stage.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured Project
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Showcasing our custom software development expertise
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Relationship Data Visualization Platform
              </h3>

              {/* Project Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold shadow-lg">
                  ⚡ MVP in 5 Weeks
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold border border-slate-200 dark:border-slate-700">
                  🚀 Full-Stack Platform
                </div>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                A sophisticated platform for managing and visualizing complex relationship data, built with modern web technologies
                and delivered from concept to MVP in just 5 weeks. Perfect for genealogy, organizational charts, network mapping,
                or any scenario requiring hierarchical data visualization. This project demonstrates our ability to rapidly develop
                complex, data-driven applications with intuitive user experiences.
              </p>
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Project Highlights:</h4>
                <ul className="grid md:grid-cols-2 gap-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Full-stack web application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Modern, scalable architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>MVP delivered in 5 weeks</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://tree.iclayout.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Explore the Platform
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to transform your ideas into reality?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can help bring your vision to life with precision engineering and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
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
            <p>&copy; {new Date().getFullYear()} iclayout.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
