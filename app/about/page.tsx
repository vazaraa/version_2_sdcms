/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp, 
  Globe, 
  Briefcase, 
  Star,
  Calendar,
  Building2,
  Shield,
  Heart,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import AboutMotherCompanies from '@/components/AboutMotherCompanies';

export default function AboutPage() {
  const containerRef = useGSAP();

  const catalysts = [
    { 
      title: 'TRANSPARENCY', 
      icon: Eye,
      description: 'Open and honest communication in all our dealings'
    },
    { 
      title: 'ETHICAL', 
      icon: Shield,
      description: 'Maintaining the highest standards of business ethics'
    },
    { 
      title: 'RESPECT', 
      icon: Heart,
      description: 'Valuing every individual and their contributions'
    },
    { 
      title: 'INTEGRITY', 
      icon: CheckCircle,
      description: 'Upholding moral and ethical principles consistently'
    }
  ];

  const coreValues = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality results that exceed expectations.',
      icon: Star
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.',
      icon: Shield
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to provide cutting-edge solutions for modern challenges.',
      icon: Zap
    },
    {
      title: 'Reliability',
      description: 'We are dependable partners who consistently deliver on our promises and commitments.',
      icon: CheckCircle
    }
  ];

  const companies = [
    {
      name: 'Sri Durga Consultancy Services',
      type: 'Government & Compliance Consulting',
      established: '2013',
      description: 'Specialized consultancy services focusing on government projects and compliance.',
      features: [
        'Government project expertise',
        'Regulatory compliance',
        'Policy consulting',
        'Documentation services'
      ],
      color: 'bg-blue-500'
    },
    {
      name: 'SDC Management Solutions Pvt. Ltd.',
      type: 'Management Consulting & Staffing',
      established: '2020',
      description: 'The flagship company providing comprehensive management consulting and staffing solutions.',
      features: [
        'Leading management consultancy',
        '500+ successful projects',
        'Multi-sector expertise',
        'Pan-India presence'
      ],
      color: 'bg-green-500'
    },
    {
      name: 'Vazrashri Industries Pvt. Ltd.',
      type: 'Industrial Solutions',
      established: '2021',
      description: 'Industrial solutions and manufacturing support services for various sectors.',
      features: [
        'Industrial automation',
        'Manufacturing consulting',
        'Supply chain optimization',
        'Quality assurance'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Click Pic',
      type: 'E-commerce & Retail',
      established: '2022',
      description: 'Premier destination for quality products at unbeatable discounts, offering an extensive range of items for every need.',
      features: [
        'Extensive product range',
        'Competitive pricing',
        'Quality assurance',
        'Fast delivery'
      ],
      color: 'bg-orange-500'
    },
    {
      name: 'Urban Expert',
      type: 'Urban Services Platform',
      established: '2023',
      description: 'Your all-in-one solution for urban living, connecting you with services and experiences that matter most in your city.',
      features: [
        'All-in-one urban services',
        'Local service providers',
        'Seamless user experience',
        'City-wide coverage'
      ],
      color: 'bg-red-500'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                SDCMS was established in 2013, SDCMS group headquarters located in Andhra Pradesh, 
                Most dependable business support and growth partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Foundation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SDCMS was established in 2013, SDCMS group headquarters located in Andhra 
                  Pradesh, Most dependable business support and growth partner. And our company also 
                  Recognized Outsourcing Agency since 2013.
                </p>
                <p>
                  It is recognized by the State Empanelment Committee as Outsourcing Agency.
                </p>
                <p>
                  We believe in developing blue collar worker's proficiency to render professional 
                  services with unparalleled ethics. We provide a diverse set of services from 
                  skilling and placement to fully managed solutions to suit the needs of households 
                  and businesses across various industries, alike.
                </p>
              </div>
            </div>

            <div className="slide-in-right flex justify-center items-center">
              <img
                src="/images/logo.png"
                alt="SDCMS Logo"
                className="rounded-lg shadow-2xl w-full max-w-md h-auto object-contain bg-white p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalysts for Change */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="text-left max-w-2xl mb-12 lg:mb-0">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The catalysts for change
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Our core principles that drive transformation and success
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {catalysts.map((catalyst, index) => {
                  const Icon = catalyst.icon;
                  return (
                    <div key={catalyst.title} className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.12}s` }}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 animate-icon-pop">
                        <Icon className="h-6 w-6 text-white drop-shadow-lg" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {catalyst.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {catalyst.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center items-center">
              <img
                src="/images/our_core_values.webp"
                alt="Catalysts for Change"
                className="rounded-3xl shadow-2xl w-full max-w-2xl h-auto object-cover"
              />
            </div>
          </div>
          {/* Animations */}
          <style jsx>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
            }
            @keyframes icon-pop {
              0% { opacity: 0; transform: scale(0.7); }
              80% { opacity: 1; transform: scale(1.15); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-icon-pop {
              animation: icon-pop 0.7s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-100 rounded-full opacity-40 blur-3xl z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 inline-block relative">
                Our Core Values
                <span className="block h-1 w-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full mx-auto mt-2"></span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-8 flex items-start gap-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Animated, glowing icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-pink-200 transition-transform duration-300 animate-icon-pop">
                    <Icon className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  {/* Accent border animation */}
                  <span className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-yellow-400 via-pink-400 to-blue-400 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
        {/* Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes icon-pop {
            0% { opacity: 0; transform: scale(0.7); }
            80% { opacity: 1; transform: scale(1.15); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-icon-pop {
            animation: icon-pop 0.7s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}</style>
      </section>

      {/* Mother of Companies Section */}
      <AboutMotherCompanies />

      {/* Company Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Keep these companies - Our expanding portfolio of specialized services
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/20"></div>
              
              {companies.map((company, index) => (
                <div key={company.name} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${company.color.replace('bg-', 'bg-')}`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} scale-in`}>
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-4 h-4 rounded-full ${company.color}`}></div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {company.name}
                            </h3>
                            <p className="text-primary font-semibold">
                              {company.type}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Established: {company.established}</span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {company.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {company.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/50">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Let's work together to achieve your business goals with our comprehensive 
                range of services and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3 rounded-full shadow transition flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-primary text-primary font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-primary/10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}