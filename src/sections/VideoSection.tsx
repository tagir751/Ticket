import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
        >
          Смотри, как это устроено
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="relative mx-auto max-w-[400px]"
        >
          {/* Video placeholder container */}
          <div className="relative aspect-[9/16] bg-dark-card rounded-2xl overflow-hidden border border-white/10">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-dark-card to-dark">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-orange/20 flex items-center justify-center cursor-pointer mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </motion.div>
              <p className="text-white/60 text-center px-8">
                [МЕСТО ДЛЯ ВИДЕО ИЗ ВК]
              </p>
              <p className="text-slate-text text-sm mt-4 text-center px-8">
                360×640px или адаптивная высота
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-orange/5 rounded-3xl blur-2xl -z-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-text mt-8 max-w-lg mx-auto"
        >
          Вводная лекция: кто я, как мы будем работать, 
          и почему это не похоже на школьные уроки
        </motion.p>
      </div>
    </section>
  );
}
