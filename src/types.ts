export interface Project {
  id: string;
  title: string;
  domain: string;
  desc: string;
  url?: string;
  tags: string[];
  isCustom?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  desc: string;
  tags: string[];
  isCustom?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  start: string;
  end: string;
  location?: string;
  desc: string;
  tags: string[];
  isCustom?: boolean;
}

export interface CustomSection {
  id: string;
  title: string;
  type: 'list' | 'cards' | 'text' | 'timeline';
  content: string;
}

export type ViewType = 'portfolio' | 'contact';
