import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paragraphs = [
    'Ты живёшь в городе-курорте. Здесь сезон, гости, бармены, администраторы гостиниц. Технологий нет. Высшего образования нет. Перспектив — нет.',
    'Школа учит ответам из прошлого века. Университеты готовят к профессиям, которых не будет.',
    'А нейросети? Все вокруг «генерят картинки» и думают, что это навык. Это не навык. Это кнопка.',
    'Через год эту кнопку нажимать будет каждый второй. А ты — в очереди за пособием.',
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16"
        >
          Почему всё вокруг кажется бессмысленным
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - paragraphs */}
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
                className="text-lg text-white/90 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Right column - accent block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] }}
            className="flex items-center"
          >
            <div className="relative p-8 lg:p-10 bg-dark-card rounded-2xl border-l-4 border-orange">
              <div className="absolute -inset-4 bg-orange/5 rounded-2xl blur-xl -z-10" />
              <p className="text-xl lg:text-2xl font-semibold text-orange leading-relaxed">
                Навык — это не про знание. 
                <br />
                <br />
                Навык — это уметь думать так, чтобы ИИ делал то, что нужно тебе.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
