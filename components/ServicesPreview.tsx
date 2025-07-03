'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import Image from 'next/image';

const ServicesPreview = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive management solutions tailored to meet your business needs.<br />
            From construction to staffing, we provide end-to-end services that drive success.
            </p>
        </div>

        {/* Services Cards Row */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg flex flex-col w-full md:w-1/3 max-w-sm mx-auto overflow-hidden"
            >
              {/* Service Image & Badge */}
              <div className="relative w-full h-48">
                <Image
                      src={service.image}
                      alt={service.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="370px"
                  priority={index === 0}
                    />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10">
                  <span className="bg-white text-red-600 font-bold text-lg px-5 py-2 rounded-lg shadow border-2 border-red-500 whitespace-nowrap">
                    {service.title}
                  </span>
                      </div>
                    </div>
              {/* Service Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 mb-4 text-base leading-relaxed">
                      {service.description}
                    </p>
                <ul className="mb-6 space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base text-gray-800">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-2 rounded-lg mt-auto">
                      <Link href={`/services/${service.slug}`} className="flex items-center justify-center w-full">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;