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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
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
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
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