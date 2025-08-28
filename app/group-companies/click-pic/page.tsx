import React from "react";
import { ShoppingCart, MapPin, Package, Globe, Handshake } from "lucide-react";
import Image from "next/image";

export default function ClickPic() {
  return (
    <div className="bg-brand-cream min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-pink-100 to-white dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-pink-900 dark:text-pink-200 flex items-center justify-center gap-2">
          <ShoppingCart className="h-8 w-8 text-pink-600 dark:text-pink-300" /> Click Pic – E-Commerce Platform
        </h1>
        <p className="text-lg md:text-2xl mb-4 text-pink-700 dark:text-pink-300 font-semibold">“World on Fingertips”</p>
      </section>

      {/* About Us Section */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <div className="flex justify-center items-center h-60 mb-6">
          <Image
            src="/images/logo/CLICK PICK logo.png"
            alt="Click Pic"
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full h-full object-contain"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-900 dark:text-pink-200 flex items-center gap-2">
          <span role="img" aria-label="about">🔴</span> About Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          Click Pic is an innovative e-commerce platform designed for both sellers and buyers, offering a curated collection of specialized and unique products from across India.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          We focus on state-wise and district-wise specialties, showcasing rural and regional products that are often overlooked by major marketplaces. Our platform is dedicated to supporting local businesses while delivering high-quality goods to customers nationwide and beyond.
        </p>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-900 dark:text-pink-200">What Makes Us Unique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <MapPin className="h-10 w-10 text-pink-600 dark:text-pink-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">State & District-Specific Products</h3>
            <p className="text-gray-600 dark:text-gray-300">Discover items unique to a region — from local crafts to homegrown food products.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Package className="h-10 w-10 text-green-600 dark:text-green-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Wide Product Range with Strict Quality Standards</h3>
            <p className="text-gray-600 dark:text-gray-300">We never compromise on quality — each product is verified for excellence.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Globe className="h-10 w-10 text-blue-600 dark:text-blue-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Expanding Reach Across India and Abroad</h3>
            <p className="text-gray-600 dark:text-gray-300">Our goal is to take local specialties to the national and international markets.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Handshake className="h-10 w-10 text-purple-600 dark:text-purple-300 mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Partnered with Leading Platforms</h3>
            <p className="text-gray-600 dark:text-gray-300">Click Pic is proudly associated with Amazon, Flipkart, and Meesho, where our products continue to see great success.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
