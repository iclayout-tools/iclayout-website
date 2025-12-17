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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About iclayout.com
          </h1>
          <p className="text-xl text-gray-600">
            Precision engineering meets innovative software development
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We founded iclayout.com because we love making things efficient. Our team comes from diverse backgrounds—IC layout, CAD,
              circuit design, and wholesale distribution—but we all share the same drive: finding better ways to solve problems.
            </p>
            <p>
              Whether we were optimizing chip designs, streamlining logistics operations, or building CAD tools, we learned that efficiency
              thinking applies everywhere. The same systematic approach that minimizes circuit parasitics also optimizes delivery routes,
              workflow automation, and software architecture.
            </p>
            <p>
              That's why we expanded into custom software development and AI integration. We bring the same optimization mindset to every
              project, whether we're designing circuits or building applications that transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Precision First</h3>
              <p className="text-gray-600">
                Every project receives the same meticulous attention to detail we apply to IC design. No shortcuts, no compromises.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rapid Delivery</h3>
              <p className="text-gray-600">
                We move fast without sacrificing quality. We routinely deliver production-ready MVPs in 5 weeks or less.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Innovation</h3>
              <p className="text-gray-600">
                We leverage cutting-edge AI to solve problems faster and unlock capabilities that traditional approaches can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What Sets Us Apart
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-blue-800 text-xl mr-4 mt-1">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cross-Domain Expertise</h3>
                <p className="text-gray-600">
                  Our background in IC design gives us a unique perspective on software architecture, performance optimization, and system-level thinking.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-blue-800 text-xl mr-4 mt-1">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Integration Specialists</h3>
                <p className="text-gray-600">
                  We don't just build software—we integrate AI to transform workflows, automate processes, and unlock new capabilities for our clients.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-blue-800 text-xl mr-4 mt-1">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Proven Track Record</h3>
                <p className="text-gray-600">
                  From complex IC layouts to full-stack platforms delivered in weeks, we consistently exceed expectations and deliver results.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-blue-800 text-xl mr-4 mt-1">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Partnership Approach</h3>
                <p className="text-gray-600">
                  We work as an extension of your team, understanding your business goals and delivering solutions that drive real value.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-blue-800 text-xl mr-4 mt-1">✓</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Direct Engineering Collaboration</h3>
                <p className="text-gray-600">
                  Work directly with the engineers building your solution throughout your project. You get faster communication, consistent quality, and personal attention from the people actually writing the code.
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
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can help bring your vision to life with precision engineering and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-blue-800 rounded font-semibold hover:bg-gray-100 transition text-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded font-semibold hover:bg-white/10 transition text-lg"
            >
              Explore Possibilities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
