'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Briefcase, MapPin, Clock, Users, Award, GraduationCap, Upload } from 'lucide-react';

export default function CareersPage() {
  const containerRef = useGSAP();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Project Manager',
      department: 'Project Management',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead complex projects from initiation to closure, managing cross-functional teams and ensuring successful delivery.',
      requirements: [
        'PMP certification preferred',
        'Experience in government projects',
        'Strong leadership and communication skills',
        'Proficiency in project management tools'
      ],
      responsibilities: [
        'Manage project lifecycle and deliverables',
        'Coordinate with stakeholders and team members',
        'Ensure quality and timeline adherence',
        'Risk management and mitigation'
      ]
    },
    {
      id: '2',
      title: 'Business Analyst',
      department: 'Consulting',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Analyze business processes, identify improvement opportunities, and develop strategic recommendations.',
      requirements: [
        'MBA or equivalent qualification',
        'Strong analytical and problem-solving skills',
        'Experience in process improvement',
        'Excellent presentation skills'
      ],
      responsibilities: [
        'Conduct business process analysis',
        'Develop improvement recommendations',
        'Create detailed documentation',
        'Support implementation activities'
      ]
    },
    {
      id: '3',
      title: 'Software Developer',
      department: 'Technology',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop and maintain software applications using modern technologies and best practices.',
      requirements: [
        'Proficiency in Java, Python, or .NET',
        'Experience with web technologies',
        'Knowledge of database systems',
        'Understanding of software development lifecycle'
      ],
      responsibilities: [
        'Design and develop software applications',
        'Write clean and maintainable code',
        'Participate in code reviews',
        'Collaborate with cross-functional teams'
      ]
    },
    {
      id: '4',
      title: 'HR Specialist',
      department: 'Human Resources',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Support recruitment, employee relations, and HR operations to build a strong organizational culture.',
      requirements: [
        'Degree in HR or related field',
        'Experience in recruitment and selection',
        'Knowledge of labor laws',
        'Strong interpersonal skills'
      ],
      responsibilities: [
        'Manage recruitment processes',
        'Support employee relations',
        'Maintain HR documentation',
        'Assist in policy development'
      ]
    }
  ];

  const internships = [
    {
      id: '1',
      title: 'Project Management Intern',
      duration: '6 months',
      location: 'Mumbai, Maharashtra',
      description: 'Gain hands-on experience in project management methodologies and tools.',
      requirements: [
        'Currently pursuing MBA or Engineering',
        'Interest in project management',
        'Good communication skills',
        'Willingness to learn'
      ]
    },
    {
      id: '2',
      title: 'Business Development Intern',
      duration: '3-6 months',
      location: 'Delhi NCR',
      description: 'Support business development activities and market research initiatives.',
      requirements: [
        'Currently pursuing MBA or related degree',
        'Strong research and analytical skills',
        'Excellent presentation abilities',
        'Proactive and self-motivated'
      ]
    },
    {
      id: '3',
      title: 'Technology Intern',
      duration: '6 months',
      location: 'Bangalore, Karnataka',
      description: 'Work on real projects using cutting-edge technologies and development practices.',
      requirements: [
        'Currently pursuing Computer Science or IT',
        'Knowledge of programming languages',
        'Understanding of software development',
        'Eagerness to learn new technologies'
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with performance-based incentives and bonuses.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and professional development programs.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive and inclusive environment.'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear career progression paths with opportunities for advancement and leadership roles.'
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
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Build your career with us and be part of a dynamic team that's shaping 
                the future of management consulting and business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose SDC Management Solutions?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We offer more than just a job – we provide a platform for growth, 
                learning, and making a meaningful impact in the industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="scale-in text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Current Openings
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore exciting career opportunities across various departments 
                and find the perfect role that matches your skills and aspirations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={job.id} className="scale-in hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {job.department}
                      </p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{job.experience} experience</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </Button>
                    <Button size="sm" className="group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Internship Opportunities
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start your career journey with our comprehensive internship programs 
                designed to provide real-world experience and mentorship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <Card key={internship.id} className="scale-in hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {internship.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {internship.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {internship.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full group">
                    Apply for Internship
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Apply Now
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to join our team? Submit your application and let's start 
                  a conversation about your future with us.
                </p>
              </div>
            </div>

            <Card className="slide-in-left">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Position Applied For *
                      </label>
                      <Input placeholder="Enter position title" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cover Letter
                    </label>
                    <Textarea 
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Resume Upload *
                    </label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground mb-2">
                        Drag and drop your resume here, or click to browse
                      </p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <Button size="lg" className="w-full group">
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}