import type { ContactInfo, Education, Experience, Project, SkillGroup, Stat } from "@/types";

export const projects: Project[] = [
  {
    title: "MeroCoffee",
    description:
      "A creator-support platform for Nepali creators, with local and international payments. It supports Esewa, PayPal, and Stripe, so supporters can pay locally or from abroad.",
    image: "/assets/img/projects/mero-coffee.png",
    tags: ["Django", "PostgreSQL", "Redis", "Esewa", "PayPal", "Stripe"],
    url: "https://publishername.pythonanywhere.com/",
    repoUrl: "https://github.com/PublisherName/mero-coffee",
    impact:
      "Supports 3 payment gateways (Esewa, PayPal, Stripe) with Redis-cached creator pages and separate creator/admin RBAC.",
    details:
      "A creator-first platform for direct support, combining local and international payments with separate creator and admin workflows.",
  },
  {
    title: "Event Management API",
    description:
      "A containerized REST API for creating and managing events. Built with Django REST Framework, it supports CRUD event workflows and runs in Docker with Redis.",
    image: "/assets/img/projects/event-management-api.svg",
    tags: ["Django REST Framework", "Docker", "Redis"],
    repoUrl: "https://github.com/PublisherName/event-management-application-api",
    impact:
      "Containerized CRUD API for event workflows, with Redis and Docker wired in for local/dev parity.",
    details:
      "A focused backend project for practicing clean REST boundaries, containerized development, and cache-ready infrastructure.",
  },
  {
    title: "Nepali Calendar GNOME Extension",
    description:
      "A GNOME Shell extension that shows the Nepali date in the top bar along with daily updates on events, festivals, and tithi. It converts between Bikram Sambat and AD dates.",
    image: "/assets/img/projects/nepali-calendar.png",
    tags: ["JavaScript", "GJS", "GNOME Shell"],
    url: "https://extensions.gnome.org/extension/7490/nepali-calendar/",
    repoUrl: "https://github.com/PublisherName/nepali-calendar-gs-extension",
    impact:
      "Published on GNOME Extensions; GitHub repo has 10 stars and provides BS-to-AD conversion with daily festival/tithi context.",
    details: "Open source under GPL v3 and published through GNOME Extensions.",
  },
  {
    title: "React Template",
    description:
      "A type-safe React starter for production projects. Built with Vite, TanStack Router and Query, Tailwind CSS, and Zod environment validation for a clean, scalable structure from the first commit.",
    image: "/assets/img/projects/react-template.svg",
    tags: ["React", "TypeScript", "Vite", "TanStack Router", "TanStack Query", "Tailwind", "Zod"],
    repoUrl: "https://github.com/PublisherName/React-Template",
    impact:
      "Reusable starter with typed routing, data fetching, styling, and environment validation wired in.",
    details:
      "A reusable foundation for typed React applications, with routing, data fetching, styling, and environment validation configured from the first commit.",
    more: true,
  },
  {
    title: "Shutdown Dialogue Extension",
    description:
      "A GNOME Shell extension that adds a custom Alt+F4 keybinding. When no windows are open, it shows a shutdown dialog instead of doing nothing.",
    image: "/assets/img/projects/shutdown-dialogue.png",
    tags: ["JavaScript", "GJS", "GNOME Shell"],
    url: "https://extensions.gnome.org/extension/7444/shutdown-dialogue/",
    repoUrl: "https://github.com/PublisherName/shutdown-dialogue-gs-extension",
    impact:
      "Published GNOME extension with a safer Alt+F4 shutdown flow and no runtime dependencies.",
    details: "Open source under GPL v3.",
    more: true,
  },
];

export const stats: Stat[] = [
  { label: "Selected projects", value: projects.length },
  { label: "GNOME extensions", value: 2 },
  { label: "Payment gateways", value: 3 },
];

export const experienceList: Experience[] = [
  {
    title: "Full Stack Engineer",
    company: "Thoplo Machine",
    logo: "/assets/img/experience/thoplo-machine.png",
    logoAlt: "Thoplo Machine",
    location: "Kathmandu District, Nepal · On-site",
    period: "Jul 2026 - Present",
    description: [
      "Own full-stack delivery across Python/Django and React, translating product requirements into API endpoints, data models, admin workflows, and responsive interfaces.",
      "Contribute to database design, deployment workflows, and code review for production web applications, with a focus on maintainability and reliable releases.",
    ],
  },
  {
    title: "Junior Software Engineer (Full Stack)",
    company: "Nepware Pvt. Ltd.",
    location: "Koteshwor, Kathmandu",
    period: "Jan 2025 - Jul 2025",
    description: [
      "Shipped an OIDC auth and authorization microservice for BioMaxis with Node.js and React, centralizing login and permissions across the product.",
      "Upgraded GBVAOR.net's Drupal stack, improving stability and reducing maintenance friction for the team.",
      "Added DOCX export to Neat+ with React, enabling users to download documents in a standard editable format.",
    ],
  },
  {
    title: "Independent Software Engineer",
    company: "Independent Projects",
    location: "Remote",
    period: "Aug 2025 - Jun 2026",
    description: [
      "Built and iterated on MeroCoffee, a creator-support platform connecting Django, PostgreSQL, Redis, and three payment gateways.",
      "Published two GNOME Shell extensions, including Nepali calendar conversion and a custom shutdown workflow.",
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
    title: "Backend",
    items: [
      { name: "Python", slug: "python" },
      { name: "Django", slug: "django" },
      { name: "Django REST", slug: "django" },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "MySQL", slug: "mysql" },
    ],
  },
  {
    title: "Delivery",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Linux/GNOME", slug: "gnome" },
    ],
  },
  {
    title: "Familiar with",
    items: [
      { name: "AWS", slug: "" },
      { name: "Terraform", slug: "terraform" },
      { name: "Flask", slug: "flask" },
      { name: "Express", slug: "express" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Celery", slug: "celery" },
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
    value: "Nepal · Open to remote/hybrid",
  },
  {
    icon: "ph-envelope",
    label: "Email",
    value: "info@subashghimire.info.np",
    href: "mailto:info@subashghimire.info.np",
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
