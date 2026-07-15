'use client';

import { motion } from 'framer-motion';
import { stats } from '@/app/lib/data';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <motion.div
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="text-primary text-lg">✨</span>
            <span className="text-sm font-medium">Invest in Sustainable Agriculture Today</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient">Grow Your Wealth</span>
            <br />
            <span className="text-foreground">With Sustainable Farms</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
            Connect with verified agricultural opportunities, earn competitive returns, and support
            the future of sustainable farming—all from one platform.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary group">
            <span className="flex items-center gap-2">
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="btn-outline">
            <span className="flex items-center gap-2">
              Watch Demo
              <span className="text-lg">▶</span>
            </span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-dark p-6 text-center rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Opportunities Preview */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '☕',
              title: 'Premium Coffee',
              return: '18.5%',
              location: 'Colombia',
            },
            {
              icon: '🌾',
              title: 'Organic Grains',
              return: '14.2%',
              location: 'Kansas',
            },
            {
              icon: '🥬',
              title: 'Vertical Farming',
              return: '22.1%',
              location: 'California',
            },
          ].map((opp, index) => (
            <div key={index} className="glass-dark p-6 rounded-xl group hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">{opp.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{opp.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{opp.location}</p>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" />
                <span className="font-bold text-primary">{opp.return} APY</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
