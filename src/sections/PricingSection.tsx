import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, MessageCircle, Clock, Check } from 'lucide-react';

const formatItems = [
  { icon: Users, text: 'Группа: 4–12 человек' },
  { icon: Calendar, text: 'Встречи: 1 раз в неделю, офлайн в Феодосии' },
  { icon: MessageCircle, text: 'Поддержка: ежедневно онлайн (проверка задач, вопросы, не даю расслабиться)' },
  { icon: Clock, text: 'Длительность: 3 месяца, оплата помесячно' },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Format */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Как проходит и стоимость
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {formatItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0, 0, 0.2, 1],
                }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-orange/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-orange" />
                </div>
                <p className="text-white/80 pt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Main course */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="relative p-6 lg:p-8 bg-dark rounded-2xl border border-orange/30"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-orange/20 to-transparent rounded-2xl blur-lg -z-10" />
            
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-orange" />
              <span className="text-sm font-medium text-orange uppercase tracking-wide">
                Основной курс
              </span>
            </div>

            <div className="mb-4">
              <span className="text-4xl lg:text-5xl font-bold text-white">7.500</span>
              <span className="text-xl text-white/60 ml-1">₽ / месяц</span>
            </div>

            <p className="text-white/60">
              3 месяца, групповые занятия
            </p>
          </motion.div>

          {/* Individual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] }}
            className="relative p-6 lg:p-8 bg-dark rounded-2xl border border-white/10"
          >
            <span className="text-sm font-medium text-slate-text uppercase tracking-wide">
              Индивидуально
            </span>

            <div className="mt-4 mb-4">
              <span className="text-2xl lg:text-3xl font-bold text-white">
                Оговаривается отдельно
              </span>
            </div>

            <p className="text-white/60">
              Для тех, кто уже знает, что хочет реализовать, и нужна личная поддержка
            </p>
          </motion.div>
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] }}
          className="relative p-6 lg:p-8 bg-orange/10 rounded-2xl border border-orange/30"
        >
          <div className="absolute -inset-4 bg-orange/5 rounded-2xl blur-xl -z-10" />
          <p className="text-lg text-orange font-medium text-center leading-relaxed">
            Первое занятие — бесплатное собеседование. 
            Это не лекция, это разговор. Мы смотрим, сработаемся ли. 
            Если нет — честно скажу, не возьму. Это важно и для меня, и для тебя.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
