// Skill categories for Paritosh Pradhan's portfolio
export type SkillCategory = {
  id: number;
  category: string;
  icon: string;
  skills: SkillItem[];
};

export type SkillNames = "react" | "nextjs" | "javascript" | "typescript" | "tailwind" | "node" | "git" | "python" | "cpp" | "java" | "php" | "mysql" | "docker";

export type Skill = {
  name: SkillNames | string;
  label: string;
  shortDescription: string;
};

export const SKILLS: Record<string, Skill> = {
  react: { name: "react", label: "React", shortDescription: "UI library" },
  nextjs: { name: "nextjs", label: "Next.js", shortDescription: "React framework" },
  javascript: { name: "javascript", label: "JavaScript", shortDescription: "Web language" },
  typescript: { name: "typescript", label: "TypeScript", shortDescription: "Typed JS" },
  tailwind: { name: "tailwind", label: "Tailwind", shortDescription: "CSS framework" },
  node: { name: "node", label: "Node.js", shortDescription: "JS runtime" },
  git: { name: "git", label: "Git", shortDescription: "Version control" },
  python: { name: "python", label: "Python", shortDescription: "Used in ML" },
  cpp: { name: "cpp", label: "C++", shortDescription: "High performance" },
  java: { name: "java", label: "Java", shortDescription: "Enterprise backend" },
  php: { name: "php", label: "PHP", shortDescription: "Server side" },
  mysql: { name: "mysql", label: "MySQL", shortDescription: "Database" },
  docker: { name: "docker", label: "Docker", shortDescription: "Containerization" },
};

export type SkillItem = {
  name: string;
  icon: string;
  color: string;
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 1,
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#FFFFFF" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    ],
  },
  {
    id: 2,
    category: "State/Data",
    icon: "🔄",
    skills: [
      { name: "Zustand", icon: "", color: "#e8b05f" }, // Using fallback text icon
      { name: "TanStack Query", icon: "", color: "#ff4154" },
    ],
  },
  {
    id: 3,
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#FFFFFF" },
    ],
  },
  {
    id: 4,
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    ],
  },
  {
    id: 5,
    category: "Dev Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#FFFFFF" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      { name: "Postman API", icon: "", color: "#FF6C37" },
    ],
  },
  {
    id: 6,
    category: "Other",
    icon: "🚀",
    skills: [
      { name: "REST APIs", icon: "", color: "#1e95f2" },
      { name: "Payment Integrations", icon: "", color: "#9244f4" },
    ],
  },
];

export type Certification = {
  id: number;
  date: string;
  title: string;
  issuer: string;
  description: string[];
  link?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    date: "2025",
    title: "Oracle AI Foundations",
    issuer: "Oracle",
    description: [
      "Explored foundational concepts in Artificial Intelligence, including machine learning algorithms and neural networks.",
      "Gained hands-on experience with Oracle Cloud Infrastructure AI services.",
    ],
  },
  {
    id: 2,
    date: "2025",
    title: "Oracle Cloud Infrastructure (OCI)",
    issuer: "Oracle",
    description: [
      "Mastered core OCI services including compute, networking, storage, and identity management.",
      "Learned cloud architecture patterns and best practices for scalable deployments.",
    ],
  },
  {
    id: 3,
    date: "2025",
    title: "Oracle DevOps Professional",
    issuer: "Oracle",
    description: [
      "Studied CI/CD pipelines, container orchestration, and infrastructure-as-code practices.",
      "Applied DevOps principles to streamline software delivery on Oracle Cloud.",
    ],
  },
  {
    id: 4,
    date: "2024",
    title: "Cloud Computing",
    issuer: "NPTEL",
    description: [
      "Covered cloud infrastructure, virtualization, distributed systems, and service models (IaaS, PaaS, SaaS).",
      "Explored deployment strategies for building scalable cloud-native applications.",
    ],
  },
  {
    id: 5,
    date: "2024",
    title: "MongoDB Certification",
    issuer: "MongoDB University",
    description: [
      "Gained expertise in MongoDB document data model, CRUD operations, and aggregation pipelines.",
      "Learned indexing strategies, replication, and sharding for production deployments.",
    ],
  },
  {
    id: 6,
    date: "2024",
    title: "MERN Stack Development",
    issuer: "Udemy",
    description: [
      "Built full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented authentication, REST APIs, and responsive frontend designs.",
    ],
  },
  {
    id: 7,
    date: "2023",
    title: "Java Training",
    issuer: "Lovely Professional University",
    description: [
      "Completed comprehensive Java programming training covering OOPs, data structures, and multithreading.",
      "Built console and GUI applications using Java SE and Swing frameworks.",
    ],
  },
];

export const ACADEMIC_JOURNEY = [
  {
    id: 1,
    title: "Bachelor of Technology — Computer Science & Engineering",
    issuer: "Lovely Professional University, Phagwara, Punjab",
    date: "2021 – 2025",
    grade: "CGPA: 8.49",
  },
  {
    id: 2,
    title: "Intermediate (12th)",
    issuer: "Higher Secondary Education",
    date: "Completed",
    grade: "Percentage: 93%",
  },
  {
    id: 3,
    title: "Matriculation (10th)",
    issuer: "Secondary Education",
    date: "Completed",
    grade: "Percentage: 91%",
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "400+ Problems Solved",
    description:
      "Solved over 400 coding problems across LeetCode, CodeChef, and HackerRank — sharpening algorithmic thinking and data structure mastery.",
    icon: "🧩",
    stat: "400+",
  },
  {
    id: 2,
    title: "100+ Day Coding Streak",
    description:
      "Maintained a relentless 100+ day consecutive coding streak, building discipline and consistency in problem-solving practice.",
    icon: "🔥",
    stat: "100+",
  },
  {
    id: 3,
    title: "Top 30 — Neo-Codeathon",
    description:
      "Ranked in the Top 30 out of thousands of participants in the Neo-Codeathon, a national-level competitive programming contest.",
    icon: "🏆",
    stat: "Top 30",
  },
  {
    id: 4,
    title: "LeetCode — Rank 3600 / 45000",
    description:
      "Achieved a competitive rank of 3,600 out of 45,000 participants in LeetCode contests, placing in the top 8% globally.",
    icon: "⚡",
    stat: "3600",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Proceed with sunglasses!",
  ],
  dark: [
    "Welcome back to the dark side!",
    "Dark mode activated! Your eyes thank you.",
  ],
};
