export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  details?: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number;
}
