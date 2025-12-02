import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - iclayout.com",
  description: "Explore our portfolio of integrated circuit designs, custom software projects, and AI-powered solutions.",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Showcasing our work in IC design, software development, and AI integration
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Featured Project</h2>
            <p className="text-slate-600 dark:text-slate-300">Our latest custom software development project</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                    Full-Stack Development
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold">
                    Modern Web Technologies
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                    Data-Driven Platform
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Relationship Data Visualization Platform
                </h3>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold shadow-lg">
                    ⚡ MVP in 5 Weeks
                  </div>
                  <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold border border-slate-200 dark:border-slate-700">
                    🚀 Full-Stack Platform
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  A sophisticated platform for managing and visualizing complex relationship data, delivered from concept to
                  MVP in just 5 weeks. Applicable to genealogy, organizational charts, network mapping, or any
                  hierarchical data structure. This project showcases our ability to rapidly develop complex, data-driven
                  applications with intuitive user experiences.
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Project Highlights:</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
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
                      <span>Hierarchical data management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                      <span>Responsive, intuitive interface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                      <span>MVP delivered in 5 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-6">Project Highlights</h4>
                <div className="space-y-6 text-white">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-4xl mr-3">⚡</span>
                      <div>
                        <div className="font-bold text-lg">Rapid Development</div>
                        <div className="text-blue-100">From concept to MVP in 5 weeks</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-4xl mr-3">🎨</span>
                      <div>
                        <div className="font-bold text-lg">Modern Tech Stack</div>
                        <div className="text-blue-100">Built with cutting-edge web technologies</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-4xl mr-3">🔄</span>
                      <div>
                        <div className="font-bold text-lg">Complex Functionality</div>
                        <div className="text-blue-100">Advanced features with intuitive UX</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-4xl mr-3">📱</span>
                      <div>
                        <div className="font-bold text-lg">Responsive Design</div>
                        <div className="text-blue-100">Seamless experience on all devices</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects / Areas of Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Areas of Expertise</h2>
            <p className="text-slate-600 dark:text-slate-300">Technologies and solutions we specialize in</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">IC Layout Design</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Precision integrated circuit design with industry-standard tools and methodologies.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Custom analog/digital IC layouts</li>
                <li>• DRC/LVS verification</li>
                <li>• Parasitic extraction & analysis</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 transition">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Full-Stack Development</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Modern web applications built with cutting-edge technologies and clean, maintainable code.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• React, Next.js, Node.js</li>
                <li>• Database design & optimization</li>
                <li>• Cloud deployment (AWS, Vercel)</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">AI Integration</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Intelligent automation and AI-powered solutions to transform workflows.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• LLM integration & fine-tuning</li>
                <li>• Workflow automation</li>
                <li>• Custom AI assistants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Have a project in mind?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can bring your vision to life with the same precision and speed we bring to all our projects.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
