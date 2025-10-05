// src/types/project.ts
export interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  featured?: boolean;
}
