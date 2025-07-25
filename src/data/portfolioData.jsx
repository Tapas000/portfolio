import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiCplusplus, SiPython, SiApachekafka, SiPytorch, SiPandas, SiApacheairflow, SiApachespark, SiDocker, SiNumpy, SiLangchain, SiC, SiLatex, SiPostgresql, SiGooglecloud } from 'react-icons/si';


export const personalInfo = {
  name: "Tapas Barman",
  title: "Aspiring Data Engineer",
  email: "tb61946@gmail.com",
  linkedin: "https://www.linkedin.com/in/tapas-barman-2661161a0/",
  github: "https://github.com/Tapas000",
  resumeLink: "https://drive.google.com/file/d/1LIgsumw1Z9X8U_pvAq3bcSwVSLeDghww/view?usp=sharing",
  bio: "Aspiring Data Engineer with experience in building scalable data pipelines and real-time systems using tools like Kafka, Spark, Airflow, and FastAPI.",
  shortBio: "I build data systems where structure meets clarity—and insights come alive."
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Lucknow",
    degree: "MSc in Data Science",
    duration: "2024 – Present",
    score: "CGPA: 8.85/10",
  },
  {
    institution: "APC Roy Government College",
    degree: "BSc Honors in Physics",
    duration: "2020 – 2023",
    score: "CGPA: 8.23/10",
  },
  {
    institution: "Kendriya Vidyalaya BSF Gandhinagar",
    degree: "Class 12th CBSE",
    duration: "April 2019 - May 2020",
    score: "86.4%",
  },
];

export const projects = [
  {
    title: "Real-Time Inventory Management System",
    tech: ["Kafka", "PostgreSQL", "Streamlit"],
    description: "Simulates real-time inventory tracking using Kafka and PostgreSQL, with real-time dashboards in Streamlit.",
    date: "2025",
    githubLink: "https://github.com/Tapas000/Real-Time-Grocery-Stock-Tracker-BigData",
    liveLink: null,
    category: "Data Engineering",
    icon: <SiApachekafka size={24} className="text-accent-1"/>
  },
  {
    title: "Job Data ETL Pipeline with LLM Enrichment",
    tech: ["Airflow", "LangChain", "PostgreSQL"],
    description: "Extracts job listings, enriches data using LLMs, and stores results in PostgreSQL with Airflow orchestration.",
    date: "2025",
    githubLink: "https://github.com/Tapas000/Airflow-LLM-ETL-Workflow-Project",
    liveLink: null,
    category: "ETL Pipeline",
    icon: <SiApacheairflow size={24} className="text-accent-1"/>
  },
  {
    title: "AI Medical Chatbot",
    tech: ["LangChain", "Streamlit", "Grok API"],
    description: "An interactive AI-powered chatbot that answers medical queries using LangChain, integrated with dynamic Streamlit frontend.",
    date: "2025",
    githubLink: "https://github.com/Tapas000/AiMedicalAssistant",
    liveLink: null,
    category: "Healthcare AI",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  {
    title: "Udaan Translate API",
    tech: ["FastAPI", "LangChain", "LLaMA3"],
    description: "A lightweight micro-translation API built for Project Udaan (IIT Bombay), supporting Indian languages with LLaMA3 and scalable endpoints.",
    date: "2025",
    githubLink: "https://github.com/Tapas000/Translation-Microservice-IIT-Bombay",
    liveLink: null,
    category: "Microservice",
    icon: <FaDatabase size={24} className="text-accent-1"/>
  },
  {
    title: "Wikipedia Q&A Assistant",
    tech: ["LangChain", "LLaMA3", "Pinecone"],
    description: "Builds a chatbot that retrieves Wikipedia articles dynamically and answers questions using Groq’s LLaMA3 and Pinecone for semantic search.",
    date: "2025",
    githubLink: "https://github.com/Tapas000/Wikipedia-Powered-Chatbot",
    liveLink: null,
    category: "LLM/RAG",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  
];

export const skills = {
  languages: [
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Scala", icon: <FaCode /> },
    { name: "C/C++", icon: <SiCplusplus /> },
  ],
  frameworksAndLibraries: [
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "FastAPI", icon: <FaNodeJs /> },
    { name: "Streamlit", icon: <FaReact /> },
  ],
  toolsAndPlatforms: [
    { name: "Apache Kafka", icon: <SiApachekafka /> },
    { name: "Apache Spark", icon: <SiApachespark /> },
    { name: "Apache Airflow", icon: <SiApacheairflow /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
  ],
  coreCompetencies: [
    "Big Data Pipeline Design",
    "ETL / ELT Workflow Automation",
    "Stream Processing",
    "LLM/RAG Integration",
    "Data Cleaning & Wrangling",
    "API Development",
    "Cloud Tools & Deployment"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "AI Software Research Intern",
    organization: "IIT Bombay",
    duration: "July 2025 – Present",
    points: [
      "Developing a low-code medical application in Zoho Creator for patient management with role-based access and real-time dashboards.",
      "Built a multilingual translation API (Udaan Translate) using FastAPI, LLaMA 3.3 (Groq), LangChain, SQLite logging, and robust validation."
    ],
  },
  {
    role: "Freelance AI Tutor & Mathematician",
    organization: "Outlier",
    duration: "Sept 2024 – Dec 2024",
    points: [
      "Provided expert guidance on training AI models, leveraging advanced mathematical concepts to improve algorithmic accuracy",
    ],
  }
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
};
