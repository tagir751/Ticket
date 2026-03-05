import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Готов сделать первый шаг?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="text-lg text-slate-text mb-10"
        >
          Бесплатное собеседование. Никаких обязательств. 
          <br className="hidden sm:block" />
          Просто приходи, расскажи, что у тебя в голове, 
          и узнай, как это можно превратить в проект.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] }}
        >
          <a
            href="https://t.me/TagirFeo?text=Хочу%20записаться%20на%20курсы"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange text-white font-bold text-xl rounded-xl hover:scale-105 transition-transform duration-300 shadow-glow hover:shadow-glow-lg animate-pulse-glow"
          >
            <Send className="w-6 h-6" />
            НАПИСАТЬ В TELEGRAM
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-sm text-slate-text"
        >
          Я отвечу лично. Без менеджеров и автоответчиков.
        </motion.p>
      </div>
    </section>
  );
}
