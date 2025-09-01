import { ComponentType } from 'react';
import { LucideProps } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 1-100
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
   icon: ComponentType<LucideProps>;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}


