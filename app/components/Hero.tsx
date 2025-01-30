"use client"

import { useLanguage } from "../LanguageContext"
import { motion } from "framer-motion"

const Hero = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      greeting: "Hi, I'm",
      name: "Your Name",
      role: "Full Stack Developer",
      cta: "View My Work",
    },
    pt: {
      greeting: "Olá, eu sou",
      name: "Seu Nome",
      role: "Desenvolvedor Full Stack",
      cta: "Ver Meus Projetos",
    },
  }

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].greeting} <span className="text-yellow-300">{content[language].name}</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content[language].role}
        </motion.p>
        <motion.a
          href="#projects"
          className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content[language].cta}
        </motion.a>
      </div>
    </section>
  )
}

export default Hero

