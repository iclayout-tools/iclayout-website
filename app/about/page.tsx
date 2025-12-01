import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - iclayout.com",
  description: "Learn about iclayout.com's journey from precision IC design to full-service software development with AI integration.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            About iclayout.com
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Precision engineering meets innovative software development
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              iclayout.com was founded on a foundation of precision integrated circuit design. Our expertise in IC layout engineering—where
              every nanometer matters—taught us the value of meticulous attention to detail, rigorous testing, and systematic problem-solving.
            </p>
            <p>
              As technology evolved, so did we. We recognized that the same engineering principles that make great IC designs also create
              exceptional software. We expanded our services to include full-stack software development, bringing our precision-first
              approach to web applications, business solutions, and custom platforms.
            </p>
            <p>
              Today, we're at the forefront of AI integration, helping businesses transform their workflows with intelligent automation
              and cutting-edge technology. Whether we're designing circuits or building software, our commitment to excellence remains unchanged.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Precision First</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Every project receives the same meticulous attention to detail we apply to IC design. No shortcuts, no compromises.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Rapid Delivery</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We move fast without sacrificing quality. Our Ancestry Tree Builder went from concept to MVP in just 5 weeks.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">AI-Powered Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300">
                We leverage cutting-edge AI to solve problems faster and unlock capabilities that traditional approaches can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            What Sets Us Apart
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 text-2xl mr-4">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Cross-Domain Expertise</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our background in IC design gives us a unique perspective on software architecture, performance optimization, and system-level thinking.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-cyan-600 dark:text-cyan-400 text-2xl mr-4">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">AI Integration Specialists</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We don't just build software—we integrate AI to transform workflows, automate processes, and unlock new capabilities for our clients.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 text-2xl mr-4">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Proven Track Record</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  From complex IC layouts to full-stack platforms delivered in weeks, we consistently exceed expectations and deliver results.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 text-2xl mr-4">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Partnership Approach</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We work as an extension of your team, understanding your business goals and delivering solutions that drive real value.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-emerald-600 dark:text-emerald-400 text-2xl mr-4">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Direct Engineering Collaboration</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Work directly with the engineers building your solution throughout your project. You get faster communication, consistent quality, and personal attention from the people actually writing the code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can help bring your vision to life with precision engineering and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl text-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
