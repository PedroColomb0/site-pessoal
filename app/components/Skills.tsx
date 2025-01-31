"use client"

import { useLanguage } from "../LanguageContext"
import { motion } from "framer-motion"

const Skills = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "My Skills",
      categories: [
        {
          name: "Frontend",
          skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Backend",
          skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "PHP"],
        },
        {
          name: "Database",
          skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
        },
        {
          name: "DevOps",
          skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud"],
        },
      ],
    },
    pt: {
      title: "Minhas Habilidades",
      categories: [
        {
          name: "Frontend",
          skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Backend",
          skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "PHP"],
        },
        {
          name: "Banco de Dados",
          skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
        },
        {
          name: "DevOps",
          skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud"],
        },
      ],
    },
  }

  return (
    <section id="skills" className="py-20 bg-[#e4ebf0]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#27548c]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#8ab3cf] transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#27548c]">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-[#4180ab] font-medium">
                    <svg
                      className="w-5 h-5 mr-2 text-[#8ab3cf]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills