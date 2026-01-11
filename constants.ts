import { Project, NavItem, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Mihir Mulchandani",
  email: "mulchandanimihir67@gmail.com",
  location: "Ahmedabad, India",
  role: "Security-First Web Systems",
  resumeFileName: "Mihir_Mulchandani_Resume.pdf"
};

export const PROJECTS: Project[] = [
  {
    name: "KeyOne",
    description: "One-time, privacy-first message sharing system designed with zero-knowledge principles.",
    tags: ["Security", "Cryptography", "Privacy"],
    liveLink: "https://keyone.vercel.app/",
  },
  {
    name: "MsgOne",
    description: "Ephemeral encrypted messaging system focusing on temporary data persistence.",
    tags: ["Encryption", "Ephemeral", "Communication"],
    liveLink: "https://msgone.vercel.app/",
  },
  {
    name: "Secure Pass Check",
    description: "Client-side password strength checker ensuring sensitive data never leaves the browser.",
    tags: ["Client-side", "Validation", "Security"],
    liveLink: "https://secure-pass-check-navy.vercel.app/",
  },
  {
    name: "PalmPong",
    description: "Gesture-controlled Pong exploring camera-based input as a precise, client-side control system.",
    tags: ["Client-side", "Real-time", "Input Systems"],
    liveLink: "https://palm-pong.vercel.app/",
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Security", path: "/security" },
  { label: "About", path: "/about" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/MihirMulchandani",
    label: "github.com/MihirMulchandani"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/mihir-mulchandani-a38104379",
    label: "LinkedIn Profile"
  }
];

export const PHILOSOPHY_POINTS = [
  "Server is untrusted by default",
  "Deterministic behavior over clever features",
  "Constraints define correctness"
];