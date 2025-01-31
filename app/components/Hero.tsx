"use client"

import { useLanguage } from "../LanguageContext"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      greeting: "Hi, I'm",
      name: "Pedro Colombo",
      role: "Full Stack Developer",
      cta: "View My Work",
    },
    pt: {
      greeting: "Olá, eu sou",
      name: "Pedro Colombo",
      role: "Desenvolvedor Full Stack",
      cta: "Ver Meus Projetos",
    },
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#4180ab] text-white overflow-hidden">
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#bdd1de] to-[#8ab3cf]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {content[language].greeting} <span className="text-white">{content[language].name}</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-3xl font-medium text-[#e4ebf0] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content[language].role}
        </motion.p>
        
        <motion.a
          href="#projects"
          className="inline-block bg-[#8ab3cf] text-[#4180ab] px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content[language].cta}
        </motion.a>

        <div className="flex gap-6 mt-6 text-2xl">
          <a href="https://linkedin.com/in/seu-perfil" target="_blank" className="text-white hover:text-[#bdd1de] transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/seu-usuario" target="_blank" className="text-white hover:text-[#bdd1de] transition duration-300">
            <FaGithub />
          </a>
          <a href="https://instagram.com/seu-perfil" target="_blank" className="text-white hover:text-[#bdd1de] transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;