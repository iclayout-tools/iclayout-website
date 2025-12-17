import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imagine the Possibilities - iclayout.com",
  description: "Imagine the possibilities. From custom IC designs to AI-powered software solutions, explore what we can build together.",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What's Possible
          </h1>
          <p className="text-xl text-gray-600">
            From silicon to software to AI—imagine what we can build together
          </p>
        </div>
      </section>

      {/* Possibilities Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Imagine the Possibilities</h2>
            <p className="text-gray-600">Every great innovation starts with a vision. Here's what we can create together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Software Possibilities */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-800 p-6">
                <h3 className="text-2xl font-bold text-white">Software That Transforms</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Picture a custom platform that handles your most complex workflows with elegance and speed.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Data visualization platforms that turn complexity into clarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Enterprise web applications built for scale and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Custom SaaS solutions tailored to your unique business model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Integration systems that connect your entire tech ecosystem</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">From concept to MVP in weeks, not months</p>
                </div>
              </div>
            </div>

            {/* IC Design Possibilities */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-800 p-6">
                <h3 className="text-2xl font-bold text-white">Silicon Solutions</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  What if your next breakthrough started at the silicon level? Custom chips designed for your exact specifications.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Custom analog and digital IC layouts optimized for performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Layout automation and custom scripting to accelerate development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Mixed-signal designs that bridge analog and digital worlds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>DRC/LVS verification ensuring first-time-right fabrication</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Precision engineering with automated workflows from schematic to silicon</p>
                </div>
              </div>
            </div>

            {/* AI Integration Possibilities */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-800 p-6">
                <h3 className="text-2xl font-bold text-white">AI-Powered Intelligence</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Imagine AI that understands your business, automates the repetitive, and amplifies your team's capabilities.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Custom AI assistants trained on your domain knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Intelligent automation that learns and adapts to your workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>LLM integration that adds AI capabilities to existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Document processing and analysis at unprecedented scale</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Transform your operations with intelligent automation</p>
                </div>
              </div>
            </div>

            {/* Hybrid Solutions */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-800 p-6">
                <h3 className="text-2xl font-bold text-white">End-to-End Innovation</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  What if you could have it all? Hardware expertise, software excellence, and AI intelligence—integrated seamlessly.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>IoT solutions from custom sensors to cloud dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Smart devices with AI-powered edge processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Hardware monitoring systems with intelligent analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2">•</span>
                    <span>Complete product development from concept to market</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">The full spectrum of technical innovation, unified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Concept to Reality */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">From Concept to Reality</h2>
            <p className="text-gray-600">Your vision, brought to life with precision and speed</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We dive deep into your vision, challenges, and goals to understand what success looks like
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Design</h3>
              <p className="text-gray-600 text-sm">
                Architect solutions that are elegant, scalable, and aligned with your technical and business requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Develop</h3>
              <p className="text-gray-600 text-sm">
                Build with modern tools and proven methodologies, delivering MVPs in weeks while maintaining quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Deploy</h3>
              <p className="text-gray-600 text-sm">
                Launch your solution with confidence, with ongoing support to ensure continued success
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Choose IC Layout?
                </h3>
                <p className="text-gray-600 mb-6">
                  We bring a unique combination of hardware precision and software agility. Whether you're designing silicon or building SaaS, you get engineering excellence without compromise.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Rapid Development:</span>
                      <span className="text-gray-600"> MVPs in weeks, not months</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Full-Stack Expertise:</span>
                      <span className="text-gray-600"> Hardware to software to AI</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Quality First:</span>
                      <span className="text-gray-600"> Precision engineering in everything we build</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-800 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold text-gray-900">Clear Communication:</span>
                      <span className="text-gray-600"> You're involved at every step</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-blue-800 mb-2">
                    5 Weeks
                  </div>
                  <p className="text-gray-600 font-semibold">Average time to MVP</p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-center text-gray-600 text-sm">
                    From initial concept to working prototype, we move fast without cutting corners. Your ideas deserve to see the light of day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Will We Build Together?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Every breakthrough starts with a conversation. Share your vision, and let's explore what's possible.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-800 rounded font-semibold hover:bg-gray-100 transition text-lg"
          >
            Let's Explore Your Vision
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
