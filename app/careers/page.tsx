"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Users,
  Award,
  GraduationCap,
  Upload,
} from "lucide-react";

 

export default function CareersPage() {
  const containerRef = useGSAP();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const scrollToApplyForm = () => {
    const applyForm = document.getElementById("apply-form");
    if (applyForm) {
      applyForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const jobOpenings = [
    // {
    //   id: "1",
    //   title: "Accountant – Guntur",
    //   department: "",
    //   location: "Guntur",
    //   type: "Full-time",
    //   experience: "Minimum 2 years",
    //   description: "Proficiency in GST, Tally, Excel, TDS, and IT Returns.",
    //   requirements: [
    //     "Proficiency in GST",
    //     "Proficiency in Tally",
    //     "Proficiency in Excel",
    //     "Proficiency in TDS",
    //     "Proficiency in IT Returns",
    //   ],
    //   responsibilities: [],
    // },
    {
      id: "2",
      title: "Accountant – Hyderabad",
      department: "Accounts",
      location: "Hyderabad",
      type: "Full-time",
      experience: "Minimum 2 years",
      description: "Hands-on experience with Tally ERP.",
      requirements: ["Hands-on experience with Tally ERP"],
      responsibilities: [],
    },
    // {
    //   id: "3",
    //   title: "Store Executive",
    //   department: "Sales  & Marketing",
    //   location: "Hyderabad",
    //   type: "Full-time",
    //   experience: "1–2 years",
    //   description:
    //     "Good communication skills, basic computer knowledge, and a background in sales.",
    //   requirements: [
    //     "Good communication skills",
    //     "Basic computer knowledge",
    //     "Background in sales",
    //   ],
    //   responsibilities: [],
    // },
    // {
    //   id: "4",
    //   title: "Sales Executive",
    //   department: "Sales  & Marketing",
    //   location: "Visakhapatnam, Hyderabad, Rajahmundry",
    //   type: "Full-time",
    //   experience: "1–2 years in FMCG sales",
    //   description: "Proven experience in field sales within the FMCG sector.",
    //   requirements: ["Proven experience in field sales within the FMCG sector"],
    //   responsibilities: [],
    // },
    {
      id: "5",
      title: "Business Development Manager(freelancer)",
      department: "Facility Management ",
      location: "Hyderabad, Bangalore, Chennai, Delhi ,Pune,Visakhapatnam,Tirupati",
      type: "Full-time",
      experience: "0–1 year",
      description:
        "The Business Development Manager is responsible for driving business growth for the Facility Management division by generating new clients and maintaining strong relationships. The role focuses on understanding client requirements for housekeeping and security manpower, preparing quotations, and finalizing service contracts.",
      requirements: [
        "Identify and generate leads across industries such as MNCs, hotels, factories, and corporate offices",
        "Conduct client visits, understand requirements, and provide customized facility management solutions",
        "Prepare quotations for housekeeping and security staff",
        "Negotiate terms, finalize contracts, and onboard clients",
        "Maintain healthy client relationships and ensure long-term business growth",
        "Collaborate with the operations team for smooth execution of services",
        "Achieve assigned sales targets and contribute to revenue growth",
      ],

      responsibilities: [
        "Any graduation",
        "2–5 years of proven experience in business development (preferably in facility management)",
        "Excellent communication, negotiation, and presentation skills",
        "Strong client relationship management abilities",
        "Target-oriented and willing to travel extensively",
      ],
    },
    {
  id: "6",
  title: "Trainer – Banking, BPO & Employability Skills",
  department: "Skill Development (CSR Project)",
  location: "Ramanthapur, Hyderabad",
  type: "Full-time",
  experience: "2–3 years",
  description:
    "We are looking for an experienced female trainer to lead sessions under our CSR Skill Development initiative. The trainer will be responsible for delivering high-quality training in Banking, BPO, and Employability Skills to students/candidates, ensuring they are industry-ready and capable of securing sustainable employment opportunities.",
  requirements: [
    "Graduate / Postgraduate in any discipline (Commerce, Management, or related field preferred).",
    "Minimum 2–3 years of training experience in Banking, BPO, Soft Skills, or Employability Skills.",
    "Excellent communication, presentation, and interpersonal skills.",
    "Proficiency in English and local language.",
    "Ability to handle diverse groups of learners and adapt training methods accordingly.",
    "Passion for teaching and empowering youth through skill development."
  ],
  responsibilities: [
    "Conduct classroom training sessions on Banking, BPO, Communication, and Employability Skills.",
    "Develop and deliver engaging training modules, lesson plans, and assessments.",
    "Focus on improving students’ spoken English, soft skills, interview skills, and professional etiquette.",
    "Mentor and guide candidates to enhance confidence and workplace readiness.",
    "Assess student progress, provide feedback, and prepare regular reports.",
    "Ensure training is aligned with industry standards and CSR project objectives.",
    "Coordinate with project coordinators and HR for smooth execution of training schedules.",
    "Motivate learners to achieve career goals and support them in placement activities."
  ],
  preferredSkills: [
    "Exposure to CSR/Skill Development/NSDC projects.",
    "Knowledge of banking products, BPO processes, and customer service skills.",
    "Basic computer literacy (MS Office, PPT, Email)."
  ],
  compensation: "As per company norms with additional benefits under CSR project guidelines."
},
  ];

  const internships = [
    // {
    //   id: '1',
    //   title: 'Junior Web & App Developer Intern',
    //   duration: '6 months',
    //   location: 'Guntur (On-site)',
    //   description: 'Full-time, on-site internship providing real-world project exposure in website and mobile app development.',
    //   requirements: [
    //     'Final-year students or recent graduates in Computer Science, IT, or related disciplines',
    //     'Portfolio or GitHub profile is a plus (not mandatory)',
    //     'Knowledge of HTML, CSS, JavaScript, and frameworks like React or Flutter',
    //     'Understanding of backend integrations using Firebase, PHP, or Node.js'
    //   ]
    // },
    // {
    //   id: '2',
    //   title: 'E-Commerce Executive Intern',
    //   duration: '6 months',
    //   location: 'Guntur (On-site)',
    //   description: 'Dynamic and detail-oriented role to support digital retail operations with practical experience in managing online listings, order processing, and customer service.',
    //   requirements: [
    //     'Graduate or final-year student in Commerce, Business, or related fields',
    //     'Familiarity with e-commerce platforms is a plus',
    //     'Basic knowledge of Excel and digital marketing tools desirable',
    //     'Strong communication and organizational skills'
    //   ]
    // },
    {
      id: "3",
      title: "Recruiting Intern (HR)",
      duration: "6 months",
      location: "Guntur (On-site)",
      description:
        "Support the Human Resources team in end-to-end recruitment with valuable exposure to HR operations, hiring workflows, and talent acquisition strategies.",
      requirements: [
        "MBA (HR) students or recent graduates preferred",
        "Strong communication and organizational skills",
        "Familiarity with job portals like Naukri, Indeed, etc., is a plus",
        "Attention to detail and ability to maintain candidate databases",
      ],
    },
    // {
    //   id: "4",
    //   title: "Tender Executive Intern",
    //   duration: "6 months",
    //   location: "Guntur (On-site)",
    //   description:
    //     "Proactive role to assist in identifying and preparing bids for government and private sector tenders, learning about procurement processes and documentation.",
    //   requirements: [
    //     "Students or graduates in Business Administration, Commerce, or relevant fields",
    //     "Basic understanding of government procurement/tendering process preferred (not mandatory)",
    //     "Strong attention to detail and MS Office skills",
    //     "Ability to coordinate with cross-functional teams",
    //   ],
    // },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Competitive Compensation",
      description:
        "Industry-leading salary packages with performance-based incentives and bonuses.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Continuous learning opportunities, certifications, and professional development programs.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with talented professionals in a supportive and inclusive environment.",
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description:
        "Clear career progression paths with opportunities for advancement and leadership roles.",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Explore jobs at SDCMS in staffing, housekeeping, HR and facility
                management. Find career opportunities in Guntur, Andhra Pradesh and
                across South India.
              </p>
              {/* <div className="mt-2 text-sm">
                <a href="/services" className="text-primary font-medium hover:underline underline-offset-4 mr-4">see what we deliver to clients</a>
                <a href="/about" className="text-primary font-medium hover:underline underline-offset-4 mr-4">our culture and growth</a>
                <a href="/contact" className="text-primary font-medium hover:underline underline-offset-4">speak to our recruitment team</a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-xl mx-auto my-12 p-6 text-center bg-red-500 text-white rounded-xl shadow-lg fade-in">
        <h1 className="text-2xl font-bold mb-3">Contact HR for Job Enquiry</h1>
        <p className="text-lg mb-6">
          For any job-related inquiries, please reach out to our HR team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919985624111"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-100 transition duration-300"
          >
            📞 Call HR
          </a>

          <a
            href="https://wa.me/919985624111"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition duration-300"
          >
            💬 WhatsApp HR
          </a>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose SDC Management Solutions?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We offer more than just a job – we provide a platform for
                growth, learning, and making a meaningful impact in the
                industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="scale-in text-center hover:shadow-lg transition-shadow duration-300"
                >
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Current Openings
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore exciting career opportunities across various departments
                and find the perfect role that matches your skills and
                aspirations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card
                key={job.id}
                className="scale-in hover:shadow-xl transition-shadow duration-300"
              >
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
                      onClick={() =>
                        setSelectedJob(selectedJob === job.id ? null : job.id)
                      }
                    >
                      {selectedJob === job.id ? "Hide Details" : "View Details"}
                    </Button>
                    <Button size="sm" className="group">
                      <a
                        href="https://wa.me/919985624111"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>

                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Requirements:
                        </h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Internship Opportunities
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start your career journey with our comprehensive internship
                programs designed to provide real-world experience and
                mentorship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <Card
                key={internship.id}
                className="scale-in hover:shadow-lg transition-shadow duration-300"
              >
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
                    <h4 className="font-semibold text-foreground mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {internship.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={scrollToApplyForm}
                  >
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
      <section id="apply-form" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Apply Now
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to join our team? Submit your application and let's
                  start a conversation about your future with us.
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
