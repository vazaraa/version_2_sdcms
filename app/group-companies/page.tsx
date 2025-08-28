import React from "react";
import { companies } from "@/data/companies";
import Link from "next/link";
import Image from "next/image";

export default function GroupCompaniesPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Our Group Companies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4 flex justify-center items-center h-48">
                <Image
                  src={company.image}
                  alt={company.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <Link 
                href={`/group-companies/${company.slug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
