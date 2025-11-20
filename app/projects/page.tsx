'use client';

import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Users, Target, Zap, Calendar, MapPin, Award } from 'lucide-react';
import Image from 'next/image';
import StatsCounter from '@/components/StatsCounter';

const completedProjects = [
  {
    title: 'Government Survey Project',
    description:
      'Conducted comprehensive surveys for government agencies to gather citizen feedback and improve public services.',
    category: 'Survey & Research',
    year: '2023',
    location: 'Multiple States',
    achievements: [
      'Covered 50+ districts',
      '10,000+ responses collected',
      '95% data accuracy',
      'Timely delivery',
    ],
    image: '/images/projects/Government Survey Project.webp',
  },
  {
    title: 'Corporate Training Program',
    description:
      'Implemented skill development programs for a leading IT company to enhance employee capabilities.',
    category: 'Training & Development',
    year: '2023',
    location: 'Pan India',
    achievements: [
      '500+ employees trained',
      '20+ technical courses',
      '85% satisfaction rate',
      'Certified trainers',
    ],
    image: '/images/projects/Corporate Training Program.webp',
  },
  {
    title: 'Security Management',
    description:
      'Provided comprehensive security solutions for a major industrial complex.',
    category: 'Security Services',
    year: '2023',
    location: 'Mumbai',
    achievements: [
      '24/7 security coverage',
      '100+ security personnel',
      'Zero security incidents',
      'Advanced surveillance',
    ],
    image: '/images/projects/Security Management.webp',
  },
  {
    title: 'Facility Management',
    description:
      'Managed complete facility operations for a corporate office complex.',
    category: 'Facility Management',
    year: '2023',
    location: 'Delhi NCR',
    achievements: [
      '50,000 sq ft area',
      '100% uptime',
      'Green building certified',
      'Cost optimization',
    ],
    image: '/images/projects/Facility Management.webp',
  },
];

const miniProjects = [
  {
    title: 'Office Cleaning Initiative',
    description:
      'Regular cleaning and maintenance services for small to medium-sized offices.',
    category: 'Housekeeping',
    status: 'Ongoing',
    location: 'Bangalore',
    highlights: [
      'Daily cleaning services',
      'Eco-friendly products',
      'Flexible scheduling',
      'Quality assurance',
    ],
    image: '/images/projects/Office Cleaning Initiative.webp',
  },
  {
    title: 'Security Guard Training',
    description: 'Specialized training program for security personnel.',
    category: 'Training',
    status: 'Ongoing',
    location: 'Chennai',
    highlights: [
      'Basic security training',
      'Emergency response',
      'Customer service',
      'Report writing',
    ],
    image: '/images/projects/Security Guard Training.webp',
  },
  {
    title: 'Employee Survey',
    description: 'Internal employee satisfaction survey for a tech company.',
    category: 'Survey',
    status: 'Ongoing',
    location: 'Hyderabad',
    highlights: [
      'Anonymous feedback',
      'Department-wise analysis',
      'Action plan development',
      'Regular follow-ups',
    ],
    image: '/images/projects/Employee Survey.webp',
  },
];

const upcomingProjects = [
  {
    title: 'Smart City Security',
    description:
      'Implementation of advanced security systems for smart city infrastructure.',
    category: 'Security Services',
    startDate: 'Q2 2024',
    location: 'Multiple Cities',
    features: [
      'AI-powered surveillance',
      'IoT integration',
      'Real-time monitoring',
      'Emergency response system',
    ],
    image: '/images/projects/Smart City Security.webp',
  },
  {
    title: 'Green Building Certification',
    description:
      'Facility management and certification for eco-friendly buildings.',
    category: 'Facility Management',
    startDate: 'Q3 2024',
    location: 'Mumbai',
    features: [
      'Energy efficiency',
      'Waste management',
      'Water conservation',
      'Sustainable practices',
    ],
    image: '/images/projects/Green Building Certification.webp',
  },
  {
    title: 'Digital Skills Training',
    description:
      'Comprehensive digital skills training program for government employees.',
    category: 'Training & Development',
    startDate: 'Q2 2024',
    location: 'Pan India',
    features: [
      'Digital literacy',
      'E-governance tools',
      'Data management',
      'Cybersecurity basics',
    ],
    image: '/images/projects/Digital Skills Training.webp',
  },
];

type ProjectType = 'ongoing' | 'current' | 'upcoming';

type Project = {
  title: string;
  description: string;
  category: string;
  year?: string;
  status?: string;
  startDate?: string;
  location: string;
  achievements?: string[];
  highlights?: string[];
  features?: string[];
  image: string;
};

function ProjectCard({ project, type }: { project: Project; type: ProjectType }) {
  return (
    <div className="group bg-white/80 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col animate-fade-in">
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-3">{project.description}</p>
        <div className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">{project.category}</span>
          {project.year && <span> &middot; {project.year}</span>}
          {project.status && <span> &middot; {project.status}</span>}
          {project.startDate && <span> &middot; {project.startDate}</span>}
        </div>
        <div className="text-xs text-gray-400 mb-2">{project.location}</div>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {(project.achievements || project.highlights || project.features || []).map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const containerRef = useGSAP();

  const stats = [
    { label: 'Total Projects', value: '500+', icon: Building2 },
    { label: 'Active Projects', value: '50+', icon: Zap },
    { label: 'Satisfied Clients', value: '200+', icon: Users },
    { label: 'Success Rate', value: '98%', icon: Award }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Project Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Showcasing our expertise through successful project deliveries across 
                diverse industries and sectors, creating lasting impact and value.
              </p>
              <div className="mt-3 text-sm">
                <Link href="/services" className="text-primary font-medium hover:underline underline-offset-4 mr-4">see related facility management services</Link>
                <Link href="/about" className="text-primary font-medium hover:underline underline-offset-4 mr-4">learn about our team</Link>
                <Link href="/contact" className="text-primary font-medium hover:underline underline-offset-4">talk to us about similar work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter
            stats={[
              { value: 500, suffix: '+', label: 'Total Projects' },
              { value: 50, suffix: '+', label: 'Active Projects' },
              { value: 200, suffix: '+', label: 'Satisfied Clients' },
              { value: 98, suffix: '%', label: 'Success Rate' }
            ]}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our most impactful projects that demonstrate our expertise 
                and commitment to delivering exceptional results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} type="current" />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ongoing Projects
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our ongoing projects that are currently in progress.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} type="ongoing" />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Upcoming Projects
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our upcoming projects that are scheduled for the future.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} type="upcoming" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how we can help you achieve your project goals with our 
                proven expertise and innovative solutions.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
}