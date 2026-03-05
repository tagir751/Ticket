import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, User, Zap, Database } from 'lucide-react';

const cards = [
  {
    letter: 'P',
    title: 'Purpose',
    subtitle: 'Цель',
    description: 'Зачем это нужно? Какую пользу принесёт? Учим целеполаганию, а не «хочу красивое».',
    icon: Target,
  },
  {
    letter: 'C',
    title: 'Context',
    subtitle: 'Контекст',
    description: 'Кто ты? Что умеешь? Чего хочешь? Нейросеть не знает твоего мира — ты должен описать его точно.',
    icon: User,
  },
  {
    letter: 'A',
    title: 'Action',
    subtitle: 'Действие',
    description: 'Как разбить сложное на шаги? Как поставить задачу, которую можно выполнить?',
    icon: Zap,
  },
  {
    letter: 'M',
    title: 'Memory',
    subtitle: 'Формат',
    description: 'Как сохранить результат, чтобы он работал? Таблица, код, текст, план — не «что-то там».',
    icon: Database,
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Мы учим не кнопкам. Мы учим мышлению.
          </h2>
          <p className="text-xl text-slate-text">
            Метод PCAM — четыре буквы, которые меняют всё
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.letter}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0, 0, 0.2, 1],
              }}
              whileHover={{ y: -8, borderColor: '#FF6B35' }}
              className="group relative p-6 bg-dark rounded-xl border border-white/10 transition-all duration-300"
            >
              {/* Letter badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">{card.letter}</span>
              </div>

              {/* Icon */}
              <div className="mb-4 mt-4">
                <card.icon className="w-8 h-8 text-orange/60 group-hover:text-orange transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-orange mb-3">{card.subtitle}</p>
              <p className="text-white/70 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-orange/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0, 0.2, 1] }}
          className="relative p-8 lg:p-10 bg-gradient-to-r from-orange/10 to-transparent rounded-2xl border border-orange/20"
        >
          <div className="absolute -inset-4 bg-orange/5 rounded-2xl blur-xl -z-10" />
          <p className="text-xl lg:text-2xl font-semibold text-orange text-center leading-relaxed">
            Если у тебя каша в голове — ИИ вернёт тебе красивую кашу.
            <br className="hidden lg:block" />
            Если у тебя чёткая мысль — ИИ построит то, что ты задумал.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
