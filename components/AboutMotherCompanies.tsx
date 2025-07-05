import React from 'react';
import Image from 'next/image';

const companies = [
  {
    name: 'SDCMS Pvt ltd',
    subtitle: 'In Time Every Time',
    img: '/images/logo.png',
  },
  {
    name: 'Vazrashree industries Pvt Ltd',
    subtitle: '',
    img: '/images/private-sector/arc.webp', // Placeholder, update if you have the real logo
  },
  {
    name: 'Urban Expert',
    subtitle: '(Urban Services)',
    img: '', // Placeholder, update if you have the real logo
  },
  {
    name: 'SRI DURGA CONSTRUCTIONS',
    subtitle: 'IN TIME, EVERY TIME',
    img: '/images/private-sector/SDC-Logo-RGB.webp',
  },
  {
    name: 'Click Pic',
    subtitle: '(E-Commerce)',
    img: '', // Placeholder, update if you have the real logo
  },
];

export default function AboutMotherCompanies() {
  return (
    <section className="py-16 px-2 md:px-0 w-full flex flex-col items-center bg-white relative overflow-x-hidden">
      <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-2 tracking-tight">
        SDCS
      </h2>
      <div className="text-xl md:text-2xl font-bold text-black mb-10 tracking-widest">
        THE MOTHER OF MULTIPLE COMPANIES
      </div>
      {/* Horizontal line with dots */}
      <div className="relative w-full max-w-5xl flex items-center justify-between mb-12 h-16 md:h-24">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full" style={{zIndex:1}} />
        {/* Dots and logos */}
        {companies.map((company, idx) => (
          <div key={company.name} className="flex flex-col items-center z-10 w-1/5">
            {/* Dot */}
            <div className="w-5 h-5 bg-black rounded-full border-4 border-white shadow-lg mb-2" />
            {/* Logo */}
            {company.img ? (
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden mb-2">
                <Image src={company.img} alt={company.name} width={80} height={80} className="object-contain w-full h-full" />
              </div>
            ) : (
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center shadow-lg mb-2">
                <span className="text-2xl text-gray-500">?</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Company names and subtitles */}
      <div className="w-full max-w-5xl flex flex-row justify-between items-start mt-2">
        {companies.map((company, idx) => (
          <div key={company.name + '-label'} className="flex flex-col items-center w-1/5">
            <span className="font-bold text-base md:text-lg text-black text-center leading-tight">
              {company.name}
            </span>
            {company.subtitle && (
              <span className="text-xs md:text-sm text-gray-500 text-center mt-1">{company.subtitle}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 