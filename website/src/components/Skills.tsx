import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, TrendingUp } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-outfit">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <Code size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Technical</h3>
            <p className="text-zinc-400 leading-relaxed">
              SEO, Social Media Analytics and Insights, Content Strategy Development, UX/UI Design and Prototyping, Motion Graphics, Network Troubleshooting.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <Layout size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Software & Tools</h3>
            <p className="text-zinc-400 leading-relaxed">
              Google Suite, Adobe Suite, MS Office, HubSpot, Jira, Hootsuite, AI Tools, WordPress, Social Media Ads, Canva, Slack, Asana, Salesforce.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 md:col-span-2 group relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Business</h3>
            <p className="text-zinc-400 leading-relaxed max-w-3xl">
              Account Management, Customer Relationship Management, Problem Resolution, Lead Generation, Customer Service, Training and Mentoring.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
