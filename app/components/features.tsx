'use client';

import { motion } from 'framer-motion';
import { features } from '@/app/lib/data';
import {
  TrendingUp,
  Shield,
  Sprout,
  BarChart3,
  Lock,
  Headphones,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={32} className="text-primary" />,
  Shield: <Shield size={32} className="text-primary" />,
  Sprout: <Sprout size={32} className="text-primary" />,
  BarChart3: <BarChart3 size={32} className="text-primary" />,
  Lock: <Lock size={32} className="text-primary" />,
  Headphones: <Headphones size={32} className="text-primary" />,
};

export function Features() {
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
    <section id="features" className="section">
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
            Why Choose <span className="text-gradient">Farm Investor</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Industry-leading platform features designed for serious investors.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-dark p-8 rounded-2xl group hover:border-primary/50 hover:bg-slate-900/40 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-dark p-12 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to diversify your portfolio?</h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Join thousands of investors already earning returns while supporting sustainable agriculture.
            </p>
            <button className="btn-primary">
              Start Investing Today →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
