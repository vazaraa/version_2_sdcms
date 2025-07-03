export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  testimonial?: string;
  author?: string;
  position?: string;
}

export const clients: Client[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    industry: 'Technology',
    testimonial: 'SDC Management Solutions transformed our project delivery process. Their expertise in project management is unmatched.',
    author: 'Sarah Johnson',
    position: 'CTO, TechCorp Solutions'
  },
  {
    id: '2',
    name: 'Global Industries',
    logo: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg',
    industry: 'Manufacturing',
    testimonial: 'Working with SDC has been a game-changer for our operations. Their strategic planning helped us achieve 25% growth.',
    author: 'Michael Chen',
    position: 'CEO, Global Industries'
  },
  {
    id: '3',
    name: 'Metro Health System',
    logo: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    industry: 'Healthcare',
    testimonial: 'The team at SDC delivered exceptional results in our digital transformation project. Highly recommended.',
    author: 'Dr. Emily Rodriguez',
    position: 'Chief Medical Officer'
  },
  {
    id: '4',
    name: 'EduTech Institute',
    logo: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    industry: 'Education',
    testimonial: 'SDC\'s consulting services helped us streamline our operations and improve student outcomes significantly.',
    author: 'Robert Taylor',
    position: 'Director of Operations'
  },
  {
    id: '5',
    name: 'Green Energy Corp',
    logo: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
    industry: 'Energy',
    testimonial: 'Professional, reliable, and results-driven. SDC Management Solutions exceeded our expectations.',
    author: 'Lisa Wang',
    position: 'Project Manager'
  },
  {
    id: '6',
    name: 'Urban Development Ltd',
    logo: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    industry: 'Real Estate',
    testimonial: 'Their expertise in urban planning and project management made our development project a huge success.',
    author: 'David Kim',
    position: 'Development Director'
  }
];