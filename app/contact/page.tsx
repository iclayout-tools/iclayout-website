"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Store form reference before async operation
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        company: formData.get("company") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState("success");
        // Reset form
        form.reset();
        // Reset state after 5 seconds
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition"
                  >
                    <option value="">Select a service...</option>
                    <option value="ic-design">IC Layout Design</option>
                    <option value="software-dev">Custom Software Development</option>
                    <option value="business-efficiency">Business Efficiency Solutions</option>
                    <option value="ai-integration">AI Integration & Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full px-6 py-4 bg-blue-800 text-white rounded font-semibold hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? "Sending..." : formState === "success" ? "Message Sent!" : "Send Message"}
                </button>

                {formState === "success" && (
                  <div className="p-4 bg-green-50 border border-green-500 rounded text-green-700">
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {formState === "error" && (
                  <div className="p-4 bg-red-50 border border-red-500 rounded text-red-700">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Let's start a conversation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you need precision IC design, custom software development, or AI-powered automation, we're here to help.
                  Reach out and let's discuss how we can bring your vision to life.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start p-6 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@iclayout.com" className="text-blue-800 hover:underline">
                      contact@iclayout.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Services</h3>
                    <p className="text-gray-600">
                      IC Design • Software Development • AI Integration
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="p-6 bg-blue-800 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
                <p className="mb-4 text-blue-100">
                  Fill out the form and we'll reach out to discuss your project in detail.
                </p>
                <p className="font-semibold">Fast turnaround • Quality results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            What to expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Initial Consultation</h3>
              <p className="text-gray-600">
                We'll discuss your project goals, requirements, and timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Proposal & Planning</h3>
              <p className="text-gray-600">
                Receive a detailed proposal with scope, timeline, and pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Development & Delivery</h3>
              <p className="text-gray-600">
                We build your solution with precision and deliver results fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
