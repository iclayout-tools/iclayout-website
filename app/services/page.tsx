import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - iclayout.com",
  description: "Integrated circuit design, custom software development, business efficiency solutions, AI integration, and efficiency engineering services.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Comprehensive solutions from silicon to software
          </p>
          <p className="text-lg text-gray-500">
            True partnership approach—work directly with the engineers building your solution
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Service 1: IC Layout Design */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Integrated Circuit Layout Design
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Expert IC layout and design services with precision and reliability you can trust. Our team brings years of experience
                in creating optimized, manufacturable IC layouts that meet the most demanding specifications. We leverage custom automation
                and scripting to accelerate workflows, improve accuracy, and deliver results faster.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Services Include:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom IC design and layout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Layout automation and custom scripting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Design rule checking (DRC) and layout versus schematic (LVS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Parasitic extraction and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Design optimization for performance and manufacturability</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Meticulous attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Collaborative approach</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2: Custom Software Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Modern frameworks (React, Next.js, Node.js)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Database design and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Cloud deployment and scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Security and authentication</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Custom Software Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tailored applications built from the ground up to meet your specific business needs. We don't do templates—every solution
                is custom-designed for your unique requirements and goals.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">What We Build:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Full-stack web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom business management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Customer portals and dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>API development and integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Database architecture and optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3: Business Efficiency Solutions */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Business Efficiency Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Streamline your operations and reduce costs with intelligent automation and process optimization. We identify bottlenecks,
                eliminate manual work, and implement solutions that save time and money.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Solutions We Provide:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Workflow automation and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Process analysis and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom integrations between systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Data migration and consolidation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Reporting and analytics dashboards</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Save hours of manual work daily</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Reduce operational costs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Gain better visibility into operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Scale faster with automation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 4: AI Integration */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">AI Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Large Language Model (LLM) integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Intelligent automation workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Natural language processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Custom AI model training and fine-tuning</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                AI Integration & Workflow Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Harness the power of artificial intelligence to transform your business. We integrate cutting-edge AI technology into
                your workflows, unlocking capabilities that weren't possible before and giving you a competitive edge.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">AI Solutions:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>AI-powered chatbots and assistants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Intelligent document processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Automated content generation and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Predictive analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Custom AI integrations tailored to your needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 5: Efficiency Engineering */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Efficiency Engineering & Workflow Optimization
              </h2>
              <p className="text-lg text-gray-600 mb-4 font-medium">
                Efficiency consulting from engineers who've lived the inefficiency
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We work directly with the teams doing the actual work, bringing practical improvements that matter. Drawing from our
                experience in IC design and tech workflows, we help teams eliminate waste, optimize processes, and reclaim valuable time
                through common-sense principles and actionable solutions.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Services Include:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Efficiency workshops for working teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Comprehensive workflow audits and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Practical training on workflow optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Detailed recommendations and implementation roadmaps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Follow-up support and custom solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <div>
                    <span className="font-semibold">For Working Teams:</span>
                    <span className="block text-blue-100">We focus on the people doing the actual work, not just management</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <div>
                    <span className="font-semibold">Common-Sense Principles:</span>
                    <span className="block text-blue-100">Practical improvements like agenda-driven meetings and time-aware workflows</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <div>
                    <span className="font-semibold">Practitioner-Led:</span>
                    <span className="block text-blue-100">Consulting from engineers who've experienced the inefficiency firsthand</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <div>
                    <span className="font-semibold">Pathway to Solutions:</span>
                    <span className="block text-blue-100">Audits naturally lead to automation and software solutions when needed</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let's discuss your project
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Whether you need IC design, custom software, AI integration, or workflow optimization, we're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-800 rounded font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
