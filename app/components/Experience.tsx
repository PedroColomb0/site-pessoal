"use client"

import { useLanguage } from "../LanguageContext"
import { motion } from "framer-motion"

const Experience = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Work Experience",
      experiences: [
        {
          company: "Tech Innovators Inc.",
          position: "Senior Full Stack Developer",
          period: "2020 - Present",
          description:
            "Lead development of multiple web applications, mentored junior developers, and implemented CI/CD pipelines.",
        },
        {
          company: "Digital Solutions Ltd.",
          position: "Full Stack Developer",
          period: "2018 - 2020",
          description: "Developed and maintained various client projects using React, Node.js, and PostgreSQL.",
        },
        {
          company: "StartUp Ventures",
          position: "Junior Web Developer",
          period: "2016 - 2018",
          description:
            "Assisted in the development of web applications and gained experience in frontend and backend technologies.",
        },
      ],
    },
    pt: {
      title: "Experiência Profissional",
      experiences: [
        {
          company: "Tech Innovators Inc.",
          position: "Desenvolvedor Full Stack Sênior",
          period: "2020 - Presente",
          description:
            "Liderou o desenvolvimento de múltiplas aplicações web, mentorou desenvolvedores juniores e implementou pipelines de CI/CD.",
        },
        {
          company: "Digital Solutions Ltd.",
          position: "Desenvolvedor Full Stack",
          period: "2018 - 2020",
          description: "Desenvolveu e manteve vários projetos de clientes usando React, Node.js e PostgreSQL.",
        },
        {
          company: "StartUp Ventures",
          position: "Desenvolvedor Web Júnior",
          period: "2016 - 2018",
          description:
            "Auxiliou no desenvolvimento de aplicações web e ganhou experiência em tecnologias frontend e backend.",
        },
      ],
    },
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].title}
        </motion.h2>
        <div className="space-y-12">
          {content[language].experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h4 className="text-lg font-semibold">{exp.position}</h4>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

