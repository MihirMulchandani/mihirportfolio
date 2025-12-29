export interface Project {
  name: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}