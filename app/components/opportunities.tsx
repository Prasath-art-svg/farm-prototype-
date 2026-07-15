'use client';

import { motion } from 'framer-motion';
import { opportunities } from '@/app/lib/data';
import { TrendingUp, Users, Target, Leaf } from 'lucide-react';

export function Opportunities() {
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
    <section id="opportunities" className="section bg-gradient-to-b from-slate-900/30 to-slate-950/50">
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
            <span className="text-gradient">Active Opportunities</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Handpicked agricultural investments vetted by our expert team.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              variants={itemVariants}
              className="group glass-dark p-8 rounded-2xl hover:border-primary/50 hover:bg-slate-900/40 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {opp.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                  {opp.status}
                </span>
              </div>

              {/* Title and Location */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {opp.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-6 flex items-center gap-2">
                <span>📍</span> {opp.location}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-xs text-foreground/60 mb-1">Target Return</div>
                  <div className="text-2xl font-bold text-gradient">{opp.returnTarget}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-xs text-foreground/60 mb-1">Duration</div>
                  <div className="text-lg font-bold">{opp.duration}</div>
                </div>
              </div>

              {/* Investment Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">Min. Investment</span>
                  <span className="font-semibold">{opp.minInvestment}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">Target Goal</span>
                  <span className="font-semibold">{opp.totalTarget}</span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/60">Funded</span>
                    <span className="text-primary font-semibold">{opp.fundedPercentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                      style={{ width: `${opp.fundedPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6 pb-6 border-b border-slate-700/30">
                {opp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-primary">✓</span>
                    {highlight}
                  </div>
                ))}
              </div>

              {/* Footer Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Users size={16} />
                  <span>{opp.investors} investors</span>
                </div>
                <button className="btn-primary text-sm">View Details</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="btn-outline text-lg">
            View All Opportunities →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
