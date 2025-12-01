import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - iclayout.com",
  description: "Tips, tricks, and resources for IC design professionals. Career guidance, industry insights, and job opportunities.",
};

export default function Resources() {
  // Placeholder articles - these can be expanded with real content later
  const articles = [
    {
      title: "Getting Started with IC Layout Design",
      description: "Essential tips for integrated circuit layout design, including DRC/LVS fundamentals and common pitfalls to avoid.",
      category: "IC Design",
      readTime: "8 min read",
      slug: "getting-started-ic-layout"
    },
    {
      title: "Navigating Semiconductor Industry Layoffs",
      description: "Practical advice for IC designers and engineers affected by recent industry changes.",
      category: "Career",
      readTime: "6 min read",
      slug: "navigating-layoffs"
    },
    {
      title: "How AI is Transforming IC Design Workflows",
      description: "Explore how artificial intelligence and automation are changing the chip design landscape.",
      category: "Industry Insights",
      readTime: "10 min read",
      slug: "ai-transforming-ic-design"
    },
  ];

  const jobOpportunities = [
    {
      title: "LinkedIn IC Design Jobs",
      description: "Search for integrated circuit layout positions",
      url: "https://www.linkedin.com/jobs/search/?keywords=ic%20layout%20design"
    },
    {
      title: "Indeed Semiconductor Jobs",
      description: "Browse semiconductor and VLSI opportunities",
      url: "https://www.indeed.com/q-Semiconductor-Engineer-jobs.html"
    },
    {
      title: "IEEE Job Site",
      description: "Professional opportunities for electrical engineers",
      url: "https://jobs.ieee.org/"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Resources for IC Design Professionals
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Tips, tricks, industry insights, and career guidance from experienced engineers
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {article.description}
                </p>
                <div className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition cursor-pointer">
                  Coming Soon →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Career Opportunities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Curated links to help you find your next role in semiconductor and IC design
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {jobOpportunities.map((job, index) => (
              <a
                key={index}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {job.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                  Visit Site
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Need Expert IC Design or Software Development?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our team is ready to help with your next project—from precision IC layout to custom software solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
