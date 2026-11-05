export type Lang = 'en' | 'it';

export interface LinkItem {
  label: string;
  href: string;
  /** opens in a new tab (other sites) */
  external?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  place?: string;
  dates: string;
  link?: LinkItem;
  intro?: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  /** e.g. "Personal project", "Freelance case study" */
  kind: string;
  summary: string;
  problem: string;
  solution: string[];
  result: string;
  tools: string[];
  links: LinkItem[];
  image?: string;
  note?: string;
}

export interface FocusArea {
  title: string;
  text: string;
}

export interface Content {
  meta: { title: string; description: string };
  pageTitles: { home: string; experience: string; projects: string; contact: string; notFound: string };
  nav: {
    home: string;
    experience: string;
    projects: string;
    contact: string;
    cv: string;
    menu: string;
    switchTo: string;
    skip: string;
  };
  title: string;
  location: string;
  cvFile: string;
  home: {
    badge: string;
    intro: string;
    ctaProjects: string;
    ctaCv: string;
    focusTitle: string;
    focusSubtitle: string;
    focus: FocusArea[];
    workTitle: string;
    workSubtitle: string;
    allProjects: string;
    readMore: string;
    skillsTitle: string;
    skillsSubtitle: string;
    nextTitle: string;
    nextText: string[];
    nextCta: string;
  };
  skills: SkillGroup[];
  experiencePage: {
    title: string;
    subtitle: string;
    downloadEn: string;
    downloadIt: string;
    experience: string;
    education: string;
    certifications: string;
    languages: string;
    skills: string;
  };
  experience: Experience[];
  education: { title: string; school: string; dates?: string }[];
  certifications: { name: string; issuer: string }[];
  languages: string[];
  projectsPage: {
    title: string;
    subtitle: string;
    problem: string;
    solution: string;
    result: string;
    githubTitle: string;
    githubText: string;
    githubCta: string;
  };
  projects: Project[];
  contactPage: {
    title: string;
    subtitle: string;
    text: string;
    emailCta: string;
    copy: string;
    copied: string;
    subject: string;
    elsewhere: string;
  };
  footer: { tagline: string; explore: string; connect: string; rights: string };
  notFound: { title: string; back: string };
}
