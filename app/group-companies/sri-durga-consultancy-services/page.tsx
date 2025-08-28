import React from "react";
import { Briefcase, Brush, Shield, Building2, Hospital, ShoppingCart, Home, School, Warehouse } from "lucide-react";
import Image from "next/image";

export default function SaiDurgaConsultancyServices() {
  return (
    <div className="bg-brand-cream min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-200">Sai Durga Consultancy Services</h1>
        <p className="text-lg md:text-2xl mb-6 text-blue-700 dark:text-blue-300">Professional Outsourcing, Housekeeping & Security Services</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 transition">Enquire Now</button>
        <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </section>

      {/* About Us Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-200">Who We Are</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Sai Durga Consultancy Services is a reliable service provider offering tailored solutions in manpower outsourcing, facility housekeeping, and private security. We help businesses across sectors stay efficient, clean, and secure.</p>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Outsourcing</h3>
            <p className="text-gray-600 dark:text-gray-300">Flexible manpower solutions for your business needs, from admin to technical roles.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Brush className="h-10 w-10 text-green-600 dark:text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Housekeeping</h3>
            <p className="text-gray-600 dark:text-gray-300">Professional cleaning and facility management for a spotless, healthy environment.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Shield className="h-10 w-10 text-purple-600 dark:text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Security</h3>
            <p className="text-gray-600 dark:text-gray-300">Trained security personnel to safeguard your premises and assets 24/7.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-200">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Industry-trained staff</li>
            <li>Customizable service packages</li>
            <li>Transparent pricing</li>
            <li>24/7 support & supervision</li>
            <li>Multi-sector experience</li>
          </ul>
        </div>
        <div className="flex justify-center items-center h-60">
          <Image 
            src="/images/logo/sdcs logo.jpg" 
            alt="Sri Durga Consultancy Services" 
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full h-full object-contain" 
          />
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Corporate Offices</span>
          </div>
          <div className="flex flex-col items-center">
            <Hospital className="h-8 w-8 text-red-500 dark:text-red-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Hospitals</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingCart className="h-8 w-8 text-orange-500 dark:text-orange-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Retail Stores</span>
          </div>
          <div className="flex flex-col items-center">
            <Home className="h-8 w-8 text-green-600 dark:text-green-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Housing Societies</span>
          </div>
          <div className="flex flex-col items-center">
            <School className="h-8 w-8 text-yellow-500 dark:text-yellow-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Schools</span>
          </div>
          <div className="flex flex-col items-center">
            <Warehouse className="h-8 w-8 text-purple-600 dark:text-purple-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Warehouses</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 px-4 bg-blue-600 dark:bg-blue-800 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Need reliable support for your business operations?</h2>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-100 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300 transition">Contact Us</button>
      </section>
    </div>
  );
} 