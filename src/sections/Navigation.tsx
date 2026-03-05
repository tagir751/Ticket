import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-nav-bg/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Архитектура Смысла
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="https://t.me/TagirFeo?text=Хочу%20записаться%20на%20курсы"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              isScrolled
                ? 'bg-orange text-white hover:bg-orange/90'
                : 'bg-orange text-white hover:bg-orange/90'
            }`}
          >
            Записаться
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
