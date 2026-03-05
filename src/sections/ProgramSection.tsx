import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  {
    number: '01',
    title: 'Крах иллюзий',
    description: 'Смотрим правде в глаза. Пробуешь сделать сайт «за вечер» — и понимаешь, почему получается ерунда. Внедряем PCAM. Уже здесь результат меняется.',
  },
  {
    number: '02',
    title: 'Инвентаризация личности',
    description: 'Кто ты? Не «буду айтишником», а конкретно: какие сильные стороны, что мешает, куда тебя это ведёт. Создаём твой психологический портрет — фундамент для всех решений.',
  },
  {
    number: '03',
    title: 'Инженерия будущего',
    description: 'Строим траекторию на 3–5 лет. Используем ИИ как спарринг-партнёра: одна нейросеть пишет, вторая критикует, третья ищет противоречия. Ты — судья. Учимся не верить на слово.',
  },
  {
    number: '04',
    title: 'Свой продукт',
    description: 'Архитектура проекта от идеи до маркетинга. Защита перед группой. Видео-фиксация — петля необратимости. У тебя в руках: работающий проект, план, понимание куда дальше.',
  },
];

export default function ProgramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16"
        >
          Четыре этапа. От хаоса — к своему проекту.
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-white/10" />

          {/* Stages */}
          <div className="space-y-12 lg:space-y-16">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                  ease: [0, 0, 0.2, 1],
                }}
                className="relative flex gap-6 lg:gap-8"
              >
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-dark-card rounded-full border-2 border-orange/50 flex items-center justify-center hover:border-orange transition-colors cursor-default"
                >
                  <span className="text-orange font-bold text-sm lg:text-base">
                    {stage.number}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2 lg:pt-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed max-w-2xl">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 lg:mt-16 text-center text-slate-text italic"
        >
          Это не лекции. Это лаборатория, где ты работаешь, 
          а я задаю вопросы и не даю соскочить.
        </motion.p>
      </div>
    </section>
  );
}
