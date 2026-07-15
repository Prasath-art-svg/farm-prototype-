'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/app/lib/data';
import { Star } from 'lucide-react';

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section">
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
            Trusted by Thousands of <span className="text-gradient">Investors</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See what successful investors are saying about their Farm Investor experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-dark p-8 rounded-2xl group hover:border-primary/50 hover:bg-slate-900/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-dark p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-foreground/60 text-sm">Average rating from 8,234 investors</div>
          </div>
          <div className="glass-dark p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-gradient mb-2">$42.5M</div>
            <div className="text-foreground/60 text-sm">Total capital deployed</div>
          </div>
          <div className="glass-dark p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-gradient mb-2">18.3%</div>
            <div className="text-foreground/60 text-sm">Average annual return</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
