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
    title: 'Government and Outsourcing',
    description: 'Comprehensive government project management and outsourcing solutions with regulatory compliance expertise.',
    fullDescription: 'Our Government and Outsourcing services provide end-to-end solutions for public sector projects. We specialize in managing complex government initiatives, ensuring regulatory compliance, and delivering efficient outsourcing solutions that meet stringent government standards and requirements.',
    features: [
      'Government Project Management',
      'Regulatory Compliance Consulting',
      'Public Sector Outsourcing',
      'Policy Implementation Support',
      'Documentation and Reporting',
      'Stakeholder Management',
      'Quality Assurance Systems',
      'Risk Management and Mitigation'
    ],
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
    icon: 'Building2',
    image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg',
    category: 'Government'
  },
  {
    id: '2',
    title: 'Recruitment and Staffing Solutions',
    description: 'End-to-end recruitment and staffing services providing qualified professionals across all industry sectors.',
    fullDescription: 'Our Recruitment and Staffing Solutions offer comprehensive talent acquisition services, from executive search to bulk hiring. We provide skilled professionals across various industries, ensuring the right fit for your organizational needs and culture.',
    features: [
      'Executive Search and Selection',
      'Bulk Recruitment Services',
      'Temporary and Contract Staffing',
      'Permanent Placement Solutions',
      'Skills Assessment and Testing',
      'Background Verification',
      'Onboarding Support',
      'Talent Pipeline Management'
    ],
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
    icon: 'Users',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
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
    icon: 'Award',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    category: 'Portfolio'
  },
  {
    id: '4',
    title: 'Construction',
    description: 'Complete construction project management and execution services for residential, commercial, and infrastructure projects.',
    fullDescription: 'Our Construction services encompass the entire project lifecycle from planning to completion. We provide comprehensive construction management, quality control, and project execution services for various types of construction projects.',
    features: [
      'Project Planning and Design',
      'Construction Management',
      'Quality Control and Assurance',
      'Safety Management Systems',
      'Material Procurement',
      'Vendor Management',
      'Timeline and Budget Control',
      'Regulatory Compliance'
    ],
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
    icon: 'HardHat',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    category: 'Infrastructure'
  },
  {
    id: '5',
    title: 'Mining Raw Materials',
    description: 'Specialized mining operations and raw material extraction services with environmental compliance and safety focus.',
    fullDescription: 'Our Mining Raw Materials services provide comprehensive solutions for mineral extraction, processing, and supply chain management. We ensure sustainable mining practices while maintaining the highest safety and environmental standards.',
    features: [
      'Mineral Exploration and Survey',
      'Mining Operations Management',
      'Raw Material Processing',
      'Environmental Compliance',
      'Safety Management Systems',
      'Equipment and Machinery Management',
      'Supply Chain Optimization',
      'Regulatory Approvals'
    ],
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
    icon: 'Mountain',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    category: 'Mining'
  },
  {
    id: '6',
    title: 'Security Services',
    description: 'Comprehensive security solutions including personnel, technology, and risk management for complete protection.',
    fullDescription: 'Our Security Services provide comprehensive protection solutions combining trained security personnel, advanced technology, and risk management strategies. We ensure complete security coverage for various facilities and events.',
    features: [
      'Trained Security Personnel',
      'Access Control Systems',
      'CCTV Surveillance',
      'Risk Assessment and Management',
      'Emergency Response Planning',
      'Event Security Management',
      'Industrial Security Solutions',
      '24/7 Monitoring Services'
    ],
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
    icon: 'Shield',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
    category: 'Security'
  },
  {
    id: '7',
    title: 'Housekeeping Services',
    description: 'Professional housekeeping and facility management services ensuring clean, hygienic, and well-maintained environments.',
    fullDescription: 'Our Housekeeping Services provide comprehensive cleaning and facility management solutions for commercial, industrial, and residential properties. We ensure high standards of cleanliness, hygiene, and maintenance.',
    features: [
      'Daily Cleaning Services',
      'Deep Cleaning Solutions',
      'Facility Management',
      'Waste Management Systems',
      'Hygiene and Sanitation',
      'Equipment and Supply Management',
      'Quality Control Inspections',
      'Eco-friendly Cleaning Solutions'
    ],
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
    icon: 'Sparkles',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
    category: 'Facility Management'
  },
  {
    id: '8',
    title: 'Training and Development',
    description: 'Comprehensive training programs and professional development services to enhance skills and organizational capabilities.',
    fullDescription: 'Our Training and Development services offer customized learning solutions designed to enhance individual and organizational capabilities. We provide comprehensive training programs across various domains and skill levels.',
    features: [
      'Customized Training Programs',
      'Professional Skill Development',
      'Leadership Training',
      'Technical Skills Enhancement',
      'Soft Skills Development',
      'Certification Programs',
      'E-learning Solutions',
      'Performance Assessment'
    ],
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
    icon: 'GraduationCap',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    category: 'Education'
  }
];