import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ParentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paragraphs = [
    'Мы не обещаем «золотые горы» и «гарантированный заработок». Мы обещаем другое.',
    'Вы увидите, как ребёнок думать. Как у него появляются вопросы, а не только «скучно». Как он учится формулировать мысли, отстаивать точку зрения, планировать шаги.',
    'Это не замена школе. Это то, чего в школе нет: практика мышления, работа над собственным проектом, взрослое отношение к времени и результату.',
    'Первое занятие — бесплатно. Приходите вместе, посмотрите сами.',
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12"
        >
          Родителям: что вы увидите в своих детях
        </motion.h2>

        <div className="space-y-6">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: [0, 0, 0.2, 1],
              }}
              className={`text-lg leading-relaxed ${
                index === paragraphs.length - 1
                  ? 'text-orange font-medium'
                  : 'text-white/80'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
