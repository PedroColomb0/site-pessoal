"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

const Certificacoes = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Certifications",
      certifications: [
        { name: "AWS Certified Developer", issuer: "Amazon", year: "2023" },
        { name: "React Professional Certification", issuer: "Meta", year: "2022" },
        { name: "Kubernetes Administrator", issuer: "CNCF", year: "2021" },
      ],
    },
    pt: {
      title: "Certificações",
      certifications: [
        { name: "Desenvolvedor Certificado AWS", issuer: "Amazon", year: "2023" },
        { name: "Certificação Profissional React", issuer: "Meta", year: "2022" },
        { name: "Administrador Kubernetes", issuer: "CNCF", year: "2021" },
      ],
    },
  };

  return (
    <section id="certifications" className="py-20 bg-[#27548c] text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#e4ebf0]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#8ab3cf] p-6 rounded-xl shadow-lg border border-[#e4ebf0] transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#27548c]">{cert.name}</h3>
              <p className="text-[#4180ab] font-medium">{cert.issuer}</p>
              <p className="text-[#e4ebf0] font-light">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificacoes;