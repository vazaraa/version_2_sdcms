'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

  const projects = [
    {
    image: '/images/projects/Corporate Training Program.webp',
    badges: [
      { label: 'Training & Development', color: 'bg-brand-red' },
      { label: 'In Progress', color: 'bg-brand-yellow text-brand-navy' },
    ],
    title: 'Corporate Training Program',
    description: 'Comprehensive training program for a leading IT company covering leadership, technical skills, and soft skills development.',
    company: 'TechCorp Solutions',
    duration: '6 months',
    location: 'Hyderabad',
    features: ['Leadership Development', 'Technical Skills', 'Soft Skills', '+1 more features'],
  },
  {
    image: '/images/projects/Digital Skills Training.webp',
    badges: [
      { label: 'Government Services', color: 'bg-brand-red' },
      { label: 'Active', color: 'bg-brand-yellow text-brand-navy' },
    ],
    title: 'Digital Skills Training',
    description: 'Digital transformation training initiative for government employees to enhance their technological capabilities.',
    company: 'State Government',
    duration: '12 months',
    location: 'Multiple Cities',
    features: ['Digital Literacy', 'E-Governance', 'Technology Adoption', '+1 more features'],
  },
  {
    image: '/images/projects/Employee Survey.webp',
    badges: [
      { label: 'Survey & Research', color: 'bg-brand-red' },
      { label: 'Data Collection', color: 'bg-brand-yellow text-brand-navy' },
    ],
    title: 'Employee Survey Project',
    description: 'Comprehensive employee engagement survey for a multinational corporation to improve workplace satisfaction.',
    company: 'Global Industries Ltd',
    duration: '3 months',
    location: 'Pan India',
    features: ['Data Collection', 'Analysis', 'Reporting', '+1 more features'],
  },
];

const ProjectsOverview = () => {
  return (
    <section className="py-20 bg-brand-lavender/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Our Key Projects
            </h2>
            <p className="text-xl text-brand-navy/70 leading-relaxed">
              Discover how we've helped organizations across industries achieve remarkable 
              transformations and sustainable growth through our innovative solutions.
            </p>
          </div>
        </div>

        {/* Projects Horizontal Scrollable Cards */}
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory px-4 md:px-8 lg:px-16 xl:px-32 2xl:justify-center">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg flex-shrink-0 w-[370px] max-w-full snap-center flex flex-col overflow-hidden border border-brand-cream/70"
            >
              {/* Project Image & Badges */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="370px"
                  priority={idx === 0}
                />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 z-10">
                  {project.badges.map((badge, i) => (
                    <span
                      key={badge.label}
                      className={`text-xs font-semibold px-3 py-1 rounded-full shadow ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                    </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                      </div>
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-brand-navy mb-1 flex items-center gap-2">
                  <span>{project.title}</span>
                      </h3>
                <p className="text-brand-navy/80 mb-3 text-sm leading-relaxed">
                        {project.description}
                      </p>
                <div className="flex flex-wrap items-center gap-3 text-brand-navy/70 text-xs mb-2">
                  <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/></svg> {project.company}</span>
                  <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> {project.duration}</span>
                  <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-1.414 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414z"/></svg> {project.location}</span>
                </div>
                <ul className="text-brand-navy text-sm mb-2 pl-4 list-disc">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-in mt-12">
          <Button size="lg" className="group bg-brand-red hover:brightness-95">
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;