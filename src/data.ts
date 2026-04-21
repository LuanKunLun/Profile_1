import type { Experience, Education, Project, SkillCategory } from './types';

export const personalInfo = {
  name: 'John Doe',
  title: 'Product Manager',
  tagline: 'Building products that people love — at scale.',
  summary:
    'Results-driven Product Manager with proven experience at tech industry leaders Airbnb and Uber. Skilled in driving product strategy, executing roadmaps, and delivering innovative solutions that enhance user experience and business growth. Adept at cross-functional collaboration, data-driven decision making, and translating complex user needs into successful product features.',
  location: 'San Francisco, CA',
  email: 'johndoe@email.com',
  phone: '(555) 123-4567',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
};

export const experiences: Experience[] = [
  {
    company: 'Airbnb',
    role: 'Senior Product Manager, Host Experience',
    period: 'Jan 2021 – Present',
    location: 'San Francisco, CA',
    achievements: [
      'Led the redesign of the host onboarding process, increasing conversion rates by 32% and reducing time-to-list by 45%.',
      'Spearheaded a new host analytics dashboard, resulting in 28% improvement in host retention and 15% increase in listing quality scores.',
      'Collaborated with engineering, design, and marketing teams to launch AirCover for Hosts — driving 40% higher host satisfaction and 22% increase in new host acquisition.',
      'Established prioritization framework for the product roadmap, aligning team objectives with company strategy while delivering features on time and within budget.',
      'Analyzed user feedback and market trends to identify opportunities, resulting in 3 new feature launches that improved host NPS score by 18 points.',
    ],
  },
  {
    company: 'Uber',
    role: 'Product Manager, Rider Experience',
    period: 'Jun 2018 – Dec 2020',
    location: 'San Francisco, CA',
    achievements: [
      'Directed development of a personalized ride recommendation system, increasing user engagement by 24% and repeat bookings by 18%.',
      'Optimized the ride-matching algorithm, reducing wait times by 17% across major markets and improving driver utilization by 12%.',
      'Led a cross-functional team of 15 engineers, designers, and data scientists to launch safety features that reduced incidents by 35%.',
      'Implemented A/B testing methodology for feature releases, improving overall conversion rate by 21%.',
      'Localized rider experience in 5 new markets, contributing to 30% growth in international user base.',
    ],
  },
];

export const education: Education[] = [
  {
    school: 'University of California, San Diego (UCSD)',
    degree: 'M.S. Information Systems Management',
    period: '2016 – 2018',
    gpa: '3.8 / 4.0',
    details: [
      'Specialization: Product Management & Data Analytics',
      'User Experience Design · Data Science for Business · Agile Methodologies',
    ],
  },
  {
    school: 'University of California, Berkeley',
    degree: 'B.S. Computer Science · Minor: Business Administration',
    period: '2012 – 2016',
    gpa: '3.7 / 4.0',
    details: [],
  },
];

export const projects: Project[] = [
  {
    title: 'Host Onboarding Redesign',
    category: 'Airbnb',
    description:
      'End-to-end redesign of the host onboarding journey to reduce friction and improve first-time host conversion.',
    metrics: [
      { label: 'Conversion Rate', value: '+32%' },
      { label: 'Time-to-List', value: '-45%' },
    ],
    tags: ['UX', 'Onboarding', 'Growth'],
  },
  {
    title: 'AirCover for Hosts Launch',
    category: 'Airbnb',
    description:
      'Cross-functional product launch delivering host protection features that significantly boosted satisfaction and new host acquisition.',
    metrics: [
      { label: 'Host Satisfaction', value: '+40%' },
      { label: 'New Host Acquisition', value: '+22%' },
    ],
    tags: ['Launch', 'Cross-functional', 'Trust & Safety'],
  },
  {
    title: 'Host Analytics Dashboard',
    category: 'Airbnb',
    description:
      'Built a self-service analytics dashboard giving hosts visibility into performance, pricing, and occupancy trends.',
    metrics: [
      { label: 'Host Retention', value: '+28%' },
      { label: 'Listing Quality', value: '+15%' },
    ],
    tags: ['Analytics', 'Data', 'Self-Service'],
  },
  {
    title: 'Personalized Ride Recommendations',
    category: 'Uber',
    description:
      'ML-powered recommendation engine surfacing relevant ride options based on individual user behaviour patterns.',
    metrics: [
      { label: 'User Engagement', value: '+24%' },
      { label: 'Repeat Bookings', value: '+18%' },
    ],
    tags: ['ML', 'Personalization', 'Engagement'],
  },
  {
    title: 'Ride-Matching Algorithm Optimisation',
    category: 'Uber',
    description:
      'Revamped matching logic to reduce rider wait times and improve driver utilization across top-10 markets.',
    metrics: [
      { label: 'Wait Time', value: '-17%' },
      { label: 'Driver Utilisation', value: '+12%' },
    ],
    tags: ['Algorithm', 'Operations', 'Efficiency'],
  },
  {
    title: 'Safety Features Rollout',
    category: 'Uber',
    description:
      'Led 15-person cross-functional team to ship a suite of in-app safety features for riders worldwide.',
    metrics: [
      { label: 'Safety Incidents', value: '-35%' },
      { label: 'Conversion Rate', value: '+21%' },
    ],
    tags: ['Safety', 'Leadership', 'Global'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Product Strategy',
    skills: ['Roadmapping', 'OKRs', 'Go-to-Market', 'Revenue Modeling'],
    level: 95,
  },
  {
    name: 'Agile / Execution',
    skills: ['Scrum', 'Kanban', 'CSPO Certified', 'Sprint Planning'],
    level: 90,
  },
  {
    name: 'Data & Analytics',
    skills: ['SQL', 'Amplitude', 'Mixpanel', 'A/B Testing'],
    level: 85,
  },
  {
    name: 'UX & Research',
    skills: ['Wireframing', 'Prototyping', 'User Interviews', 'Journey Mapping'],
    level: 80,
  },
  {
    name: 'Leadership',
    skills: ['Cross-functional Teams', 'Stakeholder Mgmt', 'Mentorship', 'Presentations'],
    level: 92,
  },
  {
    name: 'Technical',
    skills: ['API Knowledge', 'SQL', 'Technical Documentation', 'Product Lifecycle'],
    level: 75,
  },
];
