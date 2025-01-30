"use client"

import { useLanguage } from "../LanguageContext"
import { motion } from "framer-motion"

const About = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Me",
      description:
        "I'm a passionate full stack developer with experience in building scalable, secure and reliable web applications. I enjoy solving complex problems and learning new skills.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "NoSQL"],
    },
    pt: {
      title: "Sobre Mim",
      description:
        "Sou um desenvolvedor full stack apaixonado, com experiência na construção de aplicações web escaláveis, seguras e confiáveis. Gosto de resolver problemas complexos e aprender novas habilidades.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "NoSQL"],
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].title}
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content[language].description}
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content[language].skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

