"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "../LanguageContext"

const Header = () => {
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { label: { en: "Home", pt: "Início" }, href: "/" },
    { label: { en: "About", pt: "Sobre" }, href: "#about" },
    { label: { en: "Skills", pt: "Habilidades" }, href: "#skills" },
    { label: { en: "Projects", pt: "Projetos" }, href: "#projects" },
    { label: { en: "Experience", pt: "Experiência" }, href: "#experience" },
    { label: { en: "Contact", pt: "Contato" }, href: "#contact" },
  ]

  return (
    <header className="bg-[#27548c] text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            PecS
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gray-300">
                {item.label[language]}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
            >
              {language === "en" ? "PT" : "EN"}
            </button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 hover:text-gray-300">
                {item.label[language]}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="block w-full text-left py-2 hover:text-gray-300"
            >
              {language === "en" ? "Português" : "English"}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header