export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
  impact: string;
  details?: string;
  role?: string;
  problem?: string;
  more?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  logo?: string;
  logoAlt?: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  logo: string;
  alt: string;
  period: string;
  degree: string;
  school: string;
  courses: string[];
  active?: boolean;
}

export interface SkillGroup {
  title: string;
  items: { name: string; slug: string }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
