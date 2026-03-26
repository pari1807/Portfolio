import { ReactNode } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export type ProjectSkill = {
  title: string;
  icon: ReactNode;
  color: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  skills: ProjectSkill[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "class-connect",
    title: "Class Connect",
    category: "Full Stack Web Application",
    summary:
      "A comprehensive digital classroom platform that bridges the gap between students and educators with real-time collaboration tools.",
    problem:
      "Traditional classroom communication was fragmented — students struggled with delayed responses to doubts, lack of organized learning resources, and no centralized feedback mechanism.",
    solution:
      "Built a full-stack platform featuring a real-time chat system, structured doubt-ticketing workflow, curated playlist management for learning resources, and an integrated feedback system for continuous improvement.",
    impact: [
      "30% faster doubt resolution through structured ticketing",
      "45% increase in student engagement via interactive features",
      "Streamlined communication between students and educators",
    ],
    skills: [
      { title: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { title: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { title: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { title: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { title: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { title: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { title: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
    github: "https://github.com/pari1807",
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model",
    category: "Machine Learning",
    summary:
      "An intelligent ML classification system that predicts breast cancer diagnosis with high accuracy using multiple algorithms and advanced preprocessing.",
    problem:
      "Early detection of breast cancer is critical for patient survival, but manual diagnosis is time-consuming and prone to human error in interpreting complex medical data patterns.",
    solution:
      "Developed a machine learning pipeline with comprehensive data preprocessing, feature engineering, and ensemble of classification algorithms including Random Forest, SVM, and Logistic Regression to automate prediction.",
    impact: [
      "~85% prediction accuracy across multiple algorithms",
      "Automated preprocessing pipeline for medical datasets",
      "Comparative analysis across 5+ ML algorithms",
    ],
    skills: [
      { title: "Python", icon: <SiPython />, color: "#3776AB" },
      { title: "Pandas", icon: <SiPandas />, color: "#150458" },
      { title: "NumPy", icon: <SiNumpy />, color: "#013243" },
      { title: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
    ],
    github: "https://github.com/pari1807",
  },
];

export default projects;
