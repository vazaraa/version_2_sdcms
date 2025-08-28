export interface Company {
  id: string;
  name: string;
  specialization: string;
  established: string;
  description: string;
  fullDescription: string;
  features: string[];
  services: string[];
  achievements: string[];
  slug: string;
  icon: string;
  image: string;
  color: string;
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'Sri Durga Consultancy Services',
    specialization: 'Government & Compliance Consulting',
    established: '2013',
    description: 'Specialized consultancy services focusing on government projects and compliance.',
    fullDescription: 'Sri Durga Consultancy Services is our pioneering company established in 2013, specializing in government project consulting and regulatory compliance. We provide comprehensive solutions for public sector initiatives, ensuring adherence to government regulations and successful project delivery.',
    features: [
      'Government project expertise',
      'Regulatory compliance',
      'Policy consulting',
      'Documentation services',
      'Stakeholder management',
      'Risk assessment and mitigation'
    ],
    services: [
      'Government Project Consulting',
      'Regulatory Compliance Services',
      'Policy Development and Implementation',
      'Documentation and Reporting',
      'Stakeholder Engagement',
      'Risk Management Consulting'
    ],
    achievements: [
      '100+ Government Projects Completed',
      '10+ Years of Excellence',
      'Trusted by Multiple Government Agencies',
      'Zero Compliance Issues Record'
    ],
    slug: 'sri-durga-consultancy-services',
    icon: 'Target',
    image: '/images/logo/sdcs logo.jpg',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'SDC Management Solutions Pvt. Ltd.',
    specialization: 'Management Consulting & Staffing',
    established: '2020',
    description: 'The flagship company providing comprehensive management consulting and staffing solutions.',
    fullDescription: 'SDC Management Solutions Pvt. Ltd. is our flagship company established in 2020, representing the culmination of our expertise in management consulting and staffing solutions. We provide comprehensive business solutions with a pan-India presence and multi-sector expertise.',
    features: [
      'Leading management consultancy',
      '500+ successful projects',
      'Multi-sector expertise',
      'Pan-India presence',
      'Comprehensive staffing solutions',
      'Strategic business consulting'
    ],
    services: [
      'Management Consulting',
      'Strategic Planning',
      'Recruitment and Staffing',
      'Business Process Optimization',
      'Organizational Development',
      'Change Management'
    ],
    achievements: [
      '500+ Successful Projects',
      'Pan-India Operations',
      'Multi-Sector Expertise',
      'Industry Leadership Recognition'
    ],
    slug: 'sdc-management-solutions-pvt-ltd',
    icon: 'Building2',
    image: '/images/logo/SDCMS logo.jpg',
    color: 'bg-green-500'
  },
  {
    id: '3',
    name: 'Vazrashri Industries Pvt. Ltd.',
    specialization: 'Industrial Solutions',
    established: '2021',
    description: 'Industrial solutions and manufacturing support services for various sectors.',
    fullDescription: 'Vazrashri Industries Pvt. Ltd., established in 2021, focuses on providing comprehensive industrial solutions and manufacturing support services. We specialize in industrial automation, manufacturing consulting, and supply chain optimization across various industrial sectors.',
    features: [
      'Industrial automation',
      'Manufacturing consulting',
      'Supply chain optimization',
      'Quality assurance',
      'Process improvement',
      'Technology integration'
    ],
    services: [
      'Industrial Automation Solutions',
      'Manufacturing Process Consulting',
      'Supply Chain Management',
      'Quality Control Systems',
      'Equipment Installation and Maintenance',
      'Industrial Training Programs'
    ],
    achievements: [
      '50+ Industrial Projects',
      'Advanced Automation Solutions',
      'Quality Excellence Recognition',
      'Manufacturing Efficiency Improvements'
    ],
    slug: 'vazrashri-industries-pvt-ltd',
    icon: 'Settings',
    image: '/images/logo/vip logo.PNG',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Click Pic',
    specialization: 'E-commerce & Retail',
    established: '2022',
    description: 'Premier destination for quality products at unbeatable discounts, offering an extensive range of items for every need.',
    fullDescription: 'Click Pic, established in 2022, is our e-commerce and retail venture that serves as a premier destination for quality products at competitive prices. We offer an extensive range of items across multiple categories, ensuring quality assurance and fast delivery for our customers.',
    features: [
      'Extensive product range',
      'Competitive pricing',
      'Quality assurance',
      'Fast delivery',
      'Customer-centric approach',
      'Secure payment systems'
    ],
    services: [
      'Online Retail Platform',
      'Product Sourcing and Procurement',
      'Quality Control and Testing',
      'Logistics and Delivery',
      'Customer Support Services',
      'Digital Marketing Solutions'
    ],
    achievements: [
      '10,000+ Products Available',
      '5,000+ Satisfied Customers',
      '99% Customer Satisfaction Rate',
      'Rapid Market Expansion'
    ],
    slug: 'click-pic',
    icon: 'ShoppingCart',
    image: '/images/logo/CLICK PICK logo.png',
    color: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'Urban Expert',
    specialization: 'Urban Services Platform',
    established: '2023',
    description: 'Your all-in-one solution for urban living, connecting you with services and experiences that matter most in your city.',
    fullDescription: 'Urban Expert, our newest venture established in 2023, is an innovative urban services platform that serves as your all-in-one solution for urban living. We connect residents with essential services and experiences, making city life more convenient and accessible.',
    features: [
      'All-in-one urban services',
      'Local service providers',
      'Seamless user experience',
      'City-wide coverage',
      'Digital platform integration',
      'Real-time service tracking'
    ],
    services: [
      'Urban Service Aggregation',
      'Local Service Provider Network',
      'Digital Platform Development',
      'Service Quality Management',
      'Customer Experience Optimization',
      'Urban Lifestyle Solutions'
    ],
    achievements: [
      '5+ Cities Covered',
      '1,000+ Service Providers',
      '25,000+ Service Requests',
      'Innovation in Urban Services'
    ],
    slug: 'urban-expert',
    icon: 'Home',
    image: '/images/companies/urbanexpert.jpg',
    color: 'bg-teal-500'
  }
];