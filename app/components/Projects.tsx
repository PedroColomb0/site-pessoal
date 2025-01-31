"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

const Projects = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "My Projects",
      projects: [
        {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["React", "Node.js", "MongoDB", "Express"],
          link: "#",
        },
        {
          title: "Task Management App",
          description: "A responsive task management application with real-time updates using React and Firebase.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["React", "Firebase", "Redux", "Material-UI"],
          link: "#",
        },
        {
          title: "Weather Forecast Dashboard",
          description:
            "A weather forecast dashboard that displays current and future weather conditions using a third-party API.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
          link: "#",
        },
      ],
    },
    pt: {
      title: "Meus Projetos",
      projects: [
        {
          title: "Plataforma de E-commerce",
          description: "Uma plataforma de e-commerce full-stack construída com React, Node.js e MongoDB.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["React", "Node.js", "MongoDB", "Express"],
          link: "#",
        },
        {
          title: "Aplicativo de Gerenciamento de Tarefas",
          description:
            "Um aplicativo responsivo de gerenciamento de tarefas com atualizações em tempo real usando React e Firebase.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["React", "Firebase", "Redux", "Material-UI"],
          link: "#",
        },
        {
          title: "Dashboard de Previsão do Tempo",
          description:
            "Um dashboard de previsão do tempo que exibe condições climáticas atuais e futuras usando uma API de terceiros.",
          image: "/placeholder.svg?height=200&width=300",
          tags: ["JavaScript", "Integração de API", "Chart.js", "CSS Grid"],
          link: "#",
        },
      ],
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#e4ebf0]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#27548c]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#8ab3cf] transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#27548c]">{project.title}</h3>
                <p className="text-[#4180ab] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#8ab3cf] text-white text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-[#27548c] hover:text-[#4180ab] font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === "en" ? "View Project" : "Ver Projeto"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;