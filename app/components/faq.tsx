'use client';

import { motion } from 'framer-motion';
import { faqItems } from '@/app/lib/data';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="faq" className="section bg-gradient-to-b from-slate-950/50 to-slate-900/30">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about investing with Farm Investor.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-dark rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 hover:bg-slate-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 border-t border-slate-700/30"
                >
                  <p className="text-foreground/70 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <button className="btn-primary">
            Contact Our Support Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
