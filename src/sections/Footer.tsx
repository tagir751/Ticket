import { motion } from 'framer-motion';
import { MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-card border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-1">
              Архитектура Смысла
            </h3>
            <p className="text-sm text-slate-text">
              Тренинг мышления с ИИ
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-slate-text"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Феодосия, Крым</span>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="https://t.me/TagirFeo?text=Хочу%20записаться%20на%20курсы"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange text-white font-medium text-sm rounded-lg hover:bg-orange/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Написать в Telegram
          </motion.a>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-6 border-t border-white/5 text-center"
        >
          <p className="text-xs text-slate-text/60">
            © 2025 Архитектура Смысла. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
