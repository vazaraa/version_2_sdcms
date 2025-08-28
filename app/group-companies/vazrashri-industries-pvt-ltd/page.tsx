import React from "react";
import { Leaf, Globe, CheckCircle, Users, TrendingUp, Star } from "lucide-react";
import Image from "next/image";

export default function VIPVazraa() {
  return (
    <div className="bg-brand-cream min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-yellow-100 to-white dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-yellow-900 dark:text-yellow-200 flex items-center justify-center gap-2">
          <span role="img" aria-label="building">🏢</span>  VIP VAZRAA
        </h1>
        <p className="text-lg md:text-2xl mb-4 text-yellow-700 dark:text-yellow-300 font-semibold">A Brand by Vazrashri Industries Pvt Ltd</p>
      </section>

      {/* About Us Section */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <div className="flex justify-center items-center h-60 mb-6">
          <Image
            src="/images/logo/vip logo.PNG"
            alt="VIP VAZRAA"
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full h-full object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-900 dark:text-yellow-200 flex items-center gap-2">
          <span role="img" aria-label="wheat">🌾</span> About Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          At VIP VAZRAA, we are committed to delivering the finest quality spice products, directly sourced from trusted farmers across the country. Every product is carefully selected and processed to ensure that only the best reaches our customers.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          With a strong foothold in the spice industry, we specialize in premium-quality chilli (mirchi) and other aromatic products. Our advanced manufacturing systems and robust distribution network enable us to serve customers across the globe with consistency and excellence.
        </p>
        <div className="bg-yellow-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Our Mission:</h3>
          <p className="text-yellow-800 dark:text-yellow-100">To satisfy our customers by providing high-quality, hand-selected spices and herbs that bring flavor and health to every meal.</p>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-900 dark:text-yellow-200">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Users className="h-10 w-10 text-yellow-600 dark:text-yellow-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Direct sourcing from local farmers</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Intricate quality control and manufacturing</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Globe className="h-10 w-10 text-blue-600 dark:text-blue-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Global supply capabilities</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Star className="h-10 w-10 text-yellow-500 dark:text-yellow-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Focused on purity, taste, and hygiene</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <TrendingUp className="h-10 w-10 text-purple-600 dark:text-purple-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Customer-first mindset</h3>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-900 dark:text-yellow-200 flex items-center gap-2">
          <span role="img" aria-label="target">🎯</span> Our Objective
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          Our goal is to stay ahead of market trends and adapt to the evolving needs of our customers. We continuously upgrade our systems and practices to ensure that our products meet international quality standards and fulfill the expectations of both domestic and global markets.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          At VIP VAZRAA, we don&apos;t just sell spices — we deliver trust, purity, and a taste of tradition.
        </p>
      </section>
    </div>
  );
} 