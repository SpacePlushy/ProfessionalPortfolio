export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export interface Education {
  school: string;
  department: string;
  degree: string;
  gpa: string;
  location: string;
  graduationDate: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}
