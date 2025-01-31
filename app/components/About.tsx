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
    <section id="about" className="relative py-20 bg-[#bdd1de] text-[#4180ab] overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#4180ab] to-[#8ab3cf]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content[language].title}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto text-[#4180ab]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content[language].description}
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {content[language].skills.map((skill, index) => (
            <motion.span 
              key={index} 
              className="bg-[#8ab3cf] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About;