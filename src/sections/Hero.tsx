import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-card opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Твой билет из города
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl text-slate-text mb-8"
        >
          Научись думать так, чтобы ИИ работал на тебя — 
          <br className="hidden sm:block" />
          не через год, а сейчас
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] }}
          className="text-base sm:text-lg text-slate-text max-w-2xl mx-auto mb-10"
        >
          Феодосия. Город без IT-заводов и перспектив. 
          Но с ноутбуком и правильной головой — ты не привязан к местности.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0, 0, 0.2, 1] }}
        >
          <a
            href="https://t.me/TagirFeo?text=Хочу%20записаться%20на%20курсы"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-white font-semibold text-lg rounded-xl hover:scale-105 transition-transform duration-300 shadow-glow hover:shadow-glow-lg animate-pulse-glow"
          >
            ПОПАСТЬ НА БЕСПЛАТНОЕ СОБЕСЕДОВАНИЕ
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-sm text-slate-text"
        >
          Первая встреча — бесплатно. Это челлендж: 
          <br className="hidden sm:block" />
          если мы найдём общий язык, начнём работать.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-text/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-slate-text rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
