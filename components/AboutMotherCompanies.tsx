import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const companies = [
  {
    name: 'SDCMS Pvt ltd',
    subtitle: 'In Time Every Time',
    img: '/images/logo/SDCMS logo.jpg',
    href: '/group-companies/sdc-management-solutions-pvt-ltd',
  },
  {
    name: 'Vazrashree industries Pvt Ltd',
    subtitle: '',
    img: '/images/logo/vip logo.PNG',
    href: '/group-companies/vazrashri-industries-pvt-ltd',
  },
  {
    name: 'Urban Expert',
    subtitle: '(Urban Services)',
    img: '/images/companies/urbanexpert.jpg',
    href: '/group-companies/urban-expert',
  },
  {
    name: 'SRI DURGA CONSTRUCTIONS',
    subtitle: 'IN TIME, EVERY TIME',
    img: '/images/logo/sdcs logo.jpg',
    href: '/group-companies/sri-durga-consultancy-services',
  },
  {
    name: 'Click Pic',
    subtitle: '(E-Commerce)',
    img: '/images/logo/CLICK PICK logo.png',
    href: '/group-companies/click-pic',
  },
];

export default function AboutMotherCompanies() {
      return (
      <section className="py-12 px-2 md:px-0 w-full flex flex-col items-center bg-white relative">
        <div className="mb-6 flex flex-col items-center">
          <Image src="/images/logo.webp" alt="SDCS Logo" width={100} height={50} className="mx-auto h-auto w-auto max-w-[100px] mb-3" />
          <div className="text-lg md:text-xl font-bold text-black tracking-widest text-center">
            THE PARENT OF MULTIPLE COMPANIES
          </div>
        </div>

      {/* Scroll hint on mobile */}
      <div className="md:hidden text-xs text-gray-500 mb-3">Swipe to explore</div>

      {/* Horizontal timeline */}
      <div className="relative w-full max-w-6xl overflow-x-auto no-scrollbar">
        <div className="min-w-[700px] md:min-w-0 px-4">
          <div className="relative flex items-center justify-between mb-4 h-16 md:h-20">
            {/* timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 rounded-full bg-gradient-to-r from-red-200 via-red-400 to-red-200" style={{ zIndex: 1 }} />

            {/* nodes */}
            {companies.map((company) => (
              <div key={company.name} className="flex flex-col items-center z-10 w-1/5">
                <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow mb-2" />
                <Link href={company.href} aria-label={company.name} className="group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden ring-0 ring-red-500/0 group-hover:ring-4 group-hover:ring-offset-2 transition-all duration-300">
                    <Image src={company.img} alt={company.name} width={80} height={80} className="object-contain w-full h-full group-hover:scale-105 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* labels */}
          <div className="w-full flex flex-row justify-between items-start">
            {companies.map((company) => (
              <div key={company.name + '-label'} className="flex flex-col items-center w-1/5 px-2 text-center">
                <Link href={company.href} className="hover:text-red-600 transition-colors font-semibold text-sm md:text-base leading-tight">
                  {company.name}
                </Link>
                {company.subtitle && (
                  <span className="text-xs md:text-sm text-gray-500 mt-1">{company.subtitle}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 