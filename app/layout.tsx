import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'; // Added import for React
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Developer Portfolio',
  description: 'Professional portfolio showcasing my skills and projects as a developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}