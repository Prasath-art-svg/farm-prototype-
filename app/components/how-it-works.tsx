'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/app/lib/data';
import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="how-it-works" className="section bg-gradient-to-b from-slate-950/50 to-slate-900/30">
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
            <span className="text-gradient">Simple, Transparent Process</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Get started in four easy steps and begin your agricultural investment journey.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="relative">
              {/* Step Card */}
              <div className="glass-dark p-8 rounded-2xl h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-slate-900 font-bold text-lg mb-4">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary z-10">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-dark rounded-2xl overflow-hidden p-1"
        >
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl h-96 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <button className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-slate-900 transition-all hover:scale-110">
                <span className="text-2xl">▶</span>
              </button>
              <p className="text-foreground/70">Watch platform walkthrough</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
