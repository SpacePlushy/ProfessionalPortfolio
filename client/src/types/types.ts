export interface Experience {
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  university: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  contactMessage: string;
  professionalSummary: string[];
  personalTraits: string[];
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  socialLinks: SocialLink[];
}
