import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

export default function InstructorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paragraphs = [
    'Работаю с предпринимателями и подростками. Помогаю внедрять ИИ не ради хайпа, а ради реальных задач.',
    'Верю, что мышление можно натренировать — и что правильно поставленный вопрос важнее готового ответа.',
    'Веду все группы лично. Максимум — 12 человек. Больше — не беру, не получится уделить внимание каждому.',
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Circle photo container */}
              <motion.div
                whileHover={{ boxShadow: '0 0 40px rgba(255, 107, 53, 0.3)' }}
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-orange/30 transition-all duration-300"
              >
                {/* Photo */}
                <img
                  src="/tagir.png"
                  alt="Тагир"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-orange/10 rounded-full -z-10" />
              <div className="absolute -inset-8 border border-orange/5 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Тагир
            </motion.h2>

            <div className="space-y-4 mb-8">
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * (index + 1),
                    ease: [0, 0, 0.2, 1],
                  }}
                  className="text-white/80 leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-slate-text"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                Феодосия. Офлайн-встречи + онлайн-поддержка между занятиями.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
