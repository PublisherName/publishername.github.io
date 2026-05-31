import type { ContactInfo, Education, Experience, Project, SkillGroup } from "@/types";

export const projects: Project[] = [
  {
    title: "MeroCoffee",
    description:
      "A 'Buy Me a Coffee' platform for Nepali creators with Esewa, PayPal, and Stripe payments. Includes auth, analytics, Redis caching, and role-based access control.",
    image: "/assets/img/projects/mero-coffee.png",
    tags: ["Django", "PostgreSQL", "Redis", "PayPal", "Stripe"],
    url: "https://publishername.pythonanywhere.com/",
  },
  {
    title: "Nepali Calendar Extension",
    description:
      "GNOME Shell extension that displays the Nepali calendar in the top bar with daily updates on the current date, events, festivals, and tithi.",
    image: "/assets/img/projects/nepali-calendar.png",
    tags: ["JavaScript", "GNOME Shell", "GJS"],
    url: "https://extensions.gnome.org/extension/7490/nepali-calendar/",
  },
  {
    title: "Shutdown Dialogue Extension",
    description:
      "GNOME Shell extension that provides a custom Alt+F4 keybinding to show a shutdown dialog when no windows are open.",
    image: "/assets/img/projects/shutdown-dialogue.png",
    tags: ["JavaScript", "GNOME Shell", "GJS"],
    url: "https://extensions.gnome.org/extension/7444/shutdown-dialogue/",
  },
];

export const experienceList: Experience[] = [
  {
    title: "Junior Software Engineer (Full Stack)",
    company: "Nepware Pvt. Ltd.",
    location: "Koteshwor, Kathmandu",
    period: "Jan 2025 - Jul 2025",
    description: [
      "Developed an OIDC-based authentication and authorization microservice for BioMaxis using Node.js and React.",
      "Performed maintenance and upgrades on GBVAOR.net within the Drupal ecosystem to improve stability and performance.",
      "Implemented document export to DOCX for Neat+ using React, enabling users to download documents in a standard format.",
    ],
  },
  {
    title: "Internship",
    company: "Growfore Solution",
    location: "New Road, Pokhara",
    period: "July 2023 - Oct 2023",
    description: [
      "Developed internal tools that streamlined team workflows and improved operational efficiency.",
      "Provided WordPress support, maintenance, customizations, and troubleshooting for client sites.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Django", slug: "django" },
      { name: "Flask", slug: "flask" },
      { name: "React", slug: "react" },
      { name: "Express", slug: "express" },
      { name: "KoaJS", slug: "koa" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
    ],
  },
  {
    title: "APIs & Messaging",
    items: [
      { name: "Celery", slug: "celery" },
      { name: "GraphQL", slug: "graphql" },
      { name: "REST API", slug: "" },
      { name: "SOAP", slug: "" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "AWS", slug: "" },
      { name: "Terraform", slug: "terraform" },
    ],
  },
];

export const educationList: Education[] = [
  {
    logo: "/assets/img/education/mwu.png",
    alt: "Mid-West University",
    period: "2018 - 2023",
    degree: "Bachelor in Computer Engineering",
    school: "Graduate School of Engineering, Mid West University",
    courses: ["Computer Engineering", "Software Engineering", "Database Systems", "Networking"],
    active: true,
  },
  {
    logo: "/assets/img/education/ambition.jpg",
    alt: "Ambition Academy",
    period: "2016 - 2018",
    degree: "+2 Science (High School)",
    school: "Ambition Academy Secondary School",
    courses: ["Mathematics", "Computer Science", "Physics", "Chemistry"],
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: "ph-map-pin",
    label: "Location",
    value: "Golbasti Road, Ilam Municipality, Ilam, State 1, Nepal, NP 57300",
  },
  {
    icon: "ph-envelope",
    label: "Email",
    value: "subashghimire325@gmail.com",
    href: "mailto:subashghimire325@gmail.com",
  },
  {
    icon: "ph-github-logo",
    label: "GitHub",
    value: "@publishername",
    href: "https://github.com/publishername",
  },
  {
    icon: "ph-linkedin-logo",
    label: "LinkedIn",
    value: "/in/publishername",
    href: "https://www.linkedin.com/in/publishername/",
  },
];
