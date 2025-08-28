import { Target, Users, Building, Truck, Shield, Wrench, GraduationCap, ClipboardList, Award } from 'lucide-react';
import constructionBg from '@/public/images/services/construction-bg.webp';
import miningBg from '@/public/images/services/mining-bg.webp';
import staffingBg from '@/public/images/services/staffing-bg.webp';
import governmentBg from '@/public/images/services/government-bg.webp';
import securityBg from '@/public/images/services/security-bg.webp';
import housekeepingBg from '@/public/images/services/housekeeping-bg.webp';
import trainingBg from '@/public/images/services/training-bg.webp';
import surveyBg from '@/public/images/services/survey-bg.webp';
import type { StaticImageData } from 'next/image';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  processSteps: string[];
  slug: string;
  icon: string;
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Government OutSourcing',
    description: 'Specialized services for government projects and initiatives.',
    fullDescription: 'Our Government OutSourcing services provide end-to-end solutions for public sector projects. We specialize in managing complex government initiatives, ensuring regulatory compliance, and delivering efficient outsourcing solutions that meet stringent government standards and requirements.',
    features: ['Project Management', 'Compliance', 'Documentation', 'Reporting'],
    benefits: [
      'Reduced operational costs by 30-40%',
      'Improved compliance and transparency',
      'Streamlined government processes',
      'Enhanced project delivery timelines',
      'Better resource allocation and utilization'
    ],
    processSteps: [
      'Initial Assessment and Planning',
      'Compliance Framework Development',
      'Implementation and Execution',
      'Monitoring and Quality Control',
      'Reporting and Documentation'
    ],
    slug: 'government-and-outsourcing',
    icon: `target`,
    image: '/images/services/government-bg.webp',
    category: 'Government'
  },
  {
    id: '2',
    title: 'Recruitment and Staffing Solutions',
    description: 'Professional staffing and recruitment services across various industries.',
    fullDescription: 'Our Recruitment and Staffing Solutions offer comprehensive talent acquisition services, from executive search to bulk hiring. We provide skilled professionals across various industries, ensuring the right fit for your organizational needs and culture.',
    features: ['Talent Acquisition', 'HR Management', 'Employee Training', 'Performance Monitoring'],
    benefits: [
      'Access to qualified talent pool',
      'Reduced hiring time by 50%',
      'Cost-effective recruitment solutions',
      'Improved employee retention rates',
      'Comprehensive background verification'
    ],
    processSteps: [
      'Requirement Analysis',
      'Candidate Sourcing and Screening',
      'Skills Assessment and Interview',
      'Background Verification',
      'Final Selection and Onboarding'
    ],
    slug: 'recruitment-and-staffing-solutions',
    icon: `users`,
    image: '/images/services/staffing-bg.webp',
    category: 'Human Resources'
  },
  {
    id: '3',
    title: 'Details of Clients Served',
    description: 'Comprehensive client portfolio showcasing our diverse experience across multiple industries and sectors.',
    fullDescription: 'Our extensive client portfolio demonstrates our capability to serve diverse industries with tailored solutions. We have successfully delivered projects for government agencies, private corporations, and international organizations across various sectors.',
    features: [
      'Government Agencies Partnership',
      'Private Sector Collaborations',
      'International Client Base',
      'Multi-Industry Experience',
      'Long-term Client Relationships',
      'Success Stories and Case Studies',
      'Client Testimonials',
      'Industry Recognition'
    ],
    benefits: [
      'Proven track record across industries',
      'Deep understanding of sector-specific needs',
      'Established relationships and trust',
      'Diverse experience and expertise',
      'Consistent delivery excellence'
    ],
    processSteps: [
      'Client Onboarding',
      'Requirement Understanding',
      'Solution Design',
      'Implementation and Delivery',
      'Ongoing Support and Maintenance'
    ],
    slug: 'details-of-clients-served',
    icon: `award`,
    image: '/images/services/government-bg.webp',
    category: 'Portfolio'
  },
  {
    id: '4',
    title: 'Construction Management',
    description: 'Comprehensive construction project management and supervision services.',
    fullDescription: 'Our Construction services encompass the entire project lifecycle from planning to completion. We provide comprehensive construction management, quality control, and project execution services for various types of construction projects.',
    features: ['Project Planning', 'Site Supervision', 'Quality Control', 'Timeline Management'],
    benefits: [
      'On-time project completion',
      'Cost optimization and control',
      'High-quality construction standards',
      'Safety compliance and management',
      'Efficient resource utilization'
    ],
    processSteps: [
      'Site Survey and Planning',
      'Design and Approval',
      'Construction Execution',
      'Quality Monitoring',
      'Project Handover'
    ],
    slug: 'construction',
    icon: `building`,
    image: '/images/services/construction-bg.webp',
    category: 'Infrastructure'
  },
  {
    id: '5',
    title: 'Mining & Raw Materials',
    description: 'Mining operations and raw material supply services.',
    fullDescription: 'Our Mining Raw Materials services provide comprehensive solutions for mineral extraction, processing, and supply chain management. We ensure sustainable mining practices while maintaining the highest safety and environmental standards.',
    features: ['Quartz Mining', 'Feldspar Supply', 'Granite Mining', 'Quality Control'],
    benefits: [
      'Sustainable mining practices',
      'Environmental compliance assurance',
      'Optimized extraction processes',
      'Safety-first approach',
      'Efficient supply chain management'
    ],
    processSteps: [
      'Site Assessment and Survey',
      'Mining Plan Development',
      'Extraction and Processing',
      'Quality Control and Testing',
      'Transportation and Delivery'
    ],
    slug: 'mining-raw-materials',
    icon: `truck`,
    image: '/images/services/mining-bg.webp',
    category: 'Mining'
  },
  {
    id: '6',
    title: 'Security Services',
    description: 'Complete security solutions for businesses and organizations.',
    fullDescription: 'Our Security Services provide comprehensive protection solutions combining trained security personnel, advanced technology, and risk management strategies. We ensure complete security coverage for various facilities and events.',
    features: ['Guards & Surveillance', 'Access Control', 'Emergency Response', 'Security Audits'],
    benefits: [
      'Complete security coverage',
      'Trained and certified personnel',
      'Advanced technology integration',
      'Rapid emergency response',
      'Customized security solutions'
    ],
    processSteps: [
      'Security Assessment',
      'Solution Design and Planning',
      'Personnel Deployment',
      'Technology Installation',
      'Ongoing Monitoring and Support'
    ],
    slug: 'security-services',
    icon: `shield`,
    image: '/images/services/security-bg.webp',
    category: 'Security'
  },
  {
    id: '7',
    title: 'Housekeeping Services',
    description: 'Professional cleaning and facility maintenance services.',
    fullDescription: 'Our Housekeeping Services provide comprehensive cleaning and facility management solutions for commercial, industrial, and residential properties. We ensure high standards of cleanliness, hygiene, and maintenance.',
    features: ['Regular Cleaning', 'Deep Cleaning', 'Equipment Maintenance', 'Quality Assurance'],
    benefits: [
      'Maintained clean environments',
      'Improved hygiene standards',
      'Professional service delivery',
      'Cost-effective solutions',
      'Eco-friendly practices'
    ],
    processSteps: [
      'Facility Assessment',
      'Service Plan Development',
      'Staff Training and Deployment',
      'Regular Service Delivery',
      'Quality Monitoring and Feedback'
    ],
    slug: 'housekeeping-services',
    icon: `wrench`,
    image: '/images/services/housekeeping-bg.webp',
    category: 'Facility Management'
  },
  {
    id: '8',
    title: 'Training & Development',
    description: 'Corporate training and skill development programs.',
    fullDescription: 'Our Training and Development services offer customized learning solutions designed to enhance individual and organizational capabilities. We provide comprehensive training programs across various domains and skill levels.',
    features: ['Skill Assessment', 'Custom Training', 'Certification Programs', 'Performance Tracking'],
    benefits: [
      'Enhanced employee capabilities',
      'Improved productivity and performance',
      'Professional growth opportunities',
      'Organizational skill development',
      'Industry-relevant training content'
    ],
    processSteps: [
      'Training Needs Assessment',
      'Program Design and Development',
      'Training Delivery',
      'Skills Assessment',
      'Continuous Improvement'
    ],
    slug: 'training-and-development',
    icon: `graduation-cap`,
    image: '/images/services/training-bg.webp',
    category: 'Education'
  },
  {
    id: '9',
    title: 'Survey & Research',
    description: 'Comprehensive survey and market research services.',
    fullDescription: 'Our Survey and Research services offer comprehensive market research and data collection services to help businesses make informed decisions. We provide insights and analysis to support your strategic planning and market entry strategies.',
    features: ['Data Collection', 'Market Analysis', 'Report Generation', 'Insights Delivery'],
    benefits: [
      'Informed decision-making',
      'Market insights and analysis',
      'Strategic planning support',
      'Data-driven insights',
      'Customized research solutions'
    ],
    processSteps: [
      'Research Design and Planning',
      'Data Collection',
      'Analysis and Insights',
      'Report Generation',
      'Insights Delivery'
    ],
    slug: 'survey',
    icon: `clipboard-list`,
    image: '/images/services/survey-bg.webp',
    category: 'Research'
  }
];

export const serviceBackgrounds: { [key: string]: StaticImageData } = {
  'construction': constructionBg,
  'mining': miningBg,
  'staffing': staffingBg,
  'government': governmentBg,
  'security': securityBg,
  'housekeeping': housekeepingBg,
  'training': trainingBg,
  'survey': surveyBg,
};