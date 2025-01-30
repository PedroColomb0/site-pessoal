"use client"

import { useLanguage } from "../LanguageContext"
import { motion } from "framer-motion"

const Education = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Education",
      education: [
        {
          degree: "Master of Science in Computer Science",
          institution: "Tech University",
          period: "2014 - 2016",
          description: "Focused on advanced algorithms, machine learning, and software engineering principles.",
        },
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "State University",
          period: "2010 - 2014",
          description: "Studied fundamental computer science concepts, data structures, and programming languages.",
        },
      ],
    },
    pt: {
      title: "Educação",
      education: [
        {
          degree: "Mestrado em Ciência da Computação",
          institution: "Universidade Tech",
          period: "2014 - 2016",
          description: "Foco em algoritmos avançados, aprendizado de máquina e princípios de engenharia de software.",
        },
        {
          degree: "Bacharelado em Ciência da Computação",
          institution: "Universidade Estadual",
          period: "2010 - 2014",
          description:
            "Estudou conceitos fundamentais de ciência da computação, estruturas de dados e linguagens de programação.",
        },
      ],
    },
  }

  return (
    <section id="education" className="py-20 bg-gray-100">
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
          {content[language].education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 mt-1">{edu.institution}</p>
              <p className="text-gray-500 mt-1">{edu.period}</p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

