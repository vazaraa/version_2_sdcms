import React from "react";
import { Users, Briefcase, FileText, ClipboardList, Laptop, Factory, ShoppingCart, Stethoscope, Truck, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function SDCManagementSolutions() {
  return (
    <div className="bg-brand-cream min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-200">SDC Management Solutions</h1>
        <p className="text-lg md:text-2xl mb-6 text-blue-700 dark:text-blue-300">Recruitment, Staffing, HR & Payroll Solutions That Drive Business Growth</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 transition">Schedule a Consultation</button>
        <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </section>

      {/* About Us Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-200">Who We Are</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">SDC Management Solutions is your trusted HR partner specializing in Recruitment, Contract Staffing, Payroll Processing, and Comprehensive HR Management. We help organizations build efficient teams and stay compliant with evolving workforce demands.</p>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Users className="h-10 w-10 text-blue-600 dark:text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Recruitment Services</h3>
            <p className="text-gray-600 dark:text-gray-300">End-to-end talent acquisition—from sourcing to onboarding.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Briefcase className="h-10 w-10 text-green-600 dark:text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contract Staffing</h3>
            <p className="text-gray-600 dark:text-gray-300">Deploy skilled professionals on a short- or long-term basis.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <FileText className="h-10 w-10 text-purple-600 dark:text-purple-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Payroll Management</h3>
            <p className="text-gray-600 dark:text-gray-300">Accurate, timely, and compliant payroll processing.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <ClipboardList className="h-10 w-10 text-yellow-600 dark:text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">HR Operations</h3>
            <p className="text-gray-600 dark:text-gray-300">Policy creation, compliance, employee lifecycle management & more.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-200">Built to Support Your Workforce Goals</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Streamlined hiring process</li>
            <li>Domain-specific recruitment</li>
            <li>Compliance with labor laws & tax rules</li>
            <li>Scalable staffing models</li>
            <li>Data-secure and cloud-based payroll systems</li>
          </ul>
        </div>
        <div className="flex justify-center items-center h-60">
          <Image 
            src="/images/logo/SDCMS logo.jpg" 
            alt="SDC Management Solutions" 
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full h-full object-contain" 
          />
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Laptop className="h-8 w-8 text-blue-600 dark:text-blue-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">IT & Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <Factory className="h-8 w-8 text-green-600 dark:text-green-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Manufacturing</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingCart className="h-8 w-8 text-orange-500 dark:text-orange-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Retail</span>
          </div>
          <div className="flex flex-col items-center">
            <Stethoscope className="h-8 w-8 text-red-500 dark:text-red-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Healthcare</span>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-8 w-8 text-purple-600 dark:text-purple-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Logistics</span>
          </div>
          <div className="flex flex-col items-center">
            <GraduationCap className="h-8 w-8 text-yellow-500 dark:text-yellow-300 mb-2" />
            <span className="text-gray-700 dark:text-gray-300">Education</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 px-4 bg-blue-600 dark:bg-blue-800 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to simplify your HR and staffing processes?</h2>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-100 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300 transition">Contact SDC Today</button>
      </section>
    </div>
  );
} 