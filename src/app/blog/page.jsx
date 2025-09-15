"use client";
import { ArrowLeft, Mail, Calendar, Users, FileText, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

const config = {
  title: "Blog",
  subtitle: "Insights & Stories",
  description:
    "Our blog will feature industry insights, company updates, technical articles, and stories from our team. Stay tuned for valuable content that matters to you.",
  features: [
    "Industry insights and trends",
    "Technical tutorials and guides",
    "Company news and updates",
    "Behind-the-scenes stories",
  ],
  icon: <FileText className="w-12 h-12 text-primary" />,
  expectedLaunch: "Would be Announced",
};

function BlogPage() {
  const router = useRouter();
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-white rounded-full shadow-lg">
            {config.icon}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {config.title}
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          {config.subtitle}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          {config.description}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-8">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">
            Expected Launch: {config.expectedLaunch}
          </span>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            What to Expect:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {config.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            In the meantime, feel free to explore our other pages or get in
            touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 bg-primary text-white cursor-pointer font-medium rounded-lg  transition-colors"
            >
              Return Home
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
