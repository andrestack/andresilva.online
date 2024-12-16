// Define types for nested structures
interface SocialLink {
    name: string;
    url: string;
    icon: any; // Adjust this type based on your icon component
    navbar: boolean;
  }
  
  interface Contact {
    email: string;
    tel: string;
    social: {
      [key: string]: SocialLink; // Dynamic keys for social links
    };
  }
  
  interface WorkExperience {
    company: string;
    href: string;
    badges: string[]; // Assuming badges are strings
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }
  
  interface Education {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }
  
  interface Project {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links?: { type: string; href: string; icon: any }[]; // Adjust icon type as needed
    image?: string;
    video?: string;
  }
  
  // Main DATA type
  interface ResumeData {
    name: string;
    initials: string;
    url: string;
    location: string;
    locationLink: string;
    description: string;
    summary: string;
    avatarUrl: string;
    skills: string[];
    navbar: { href: string; icon: any; label: string }[]; // Adjust icon type as needed
    contact: Contact;
    work: WorkExperience[];
    education: Education[];
    projects: Project[];
  }

  export type { ResumeData };