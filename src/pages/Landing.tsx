import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { preloadCalendly } from "@/utils/calendly";
import { AdvantageSection } from "@/components/Landing/AdvantageSection";
import { ProductShowcase } from "@/components/Landing/ProductShowcase";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

import adminsLight from "@/assets/admins.png";
import adminsDark from "@/assets/admins-dark.png";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MindSync Solutions",
    "url": "https://mindsync.solutions",
    "logo": "https://mindsync.solutions/mindsync.svg",
    "description": "MindSync Solutions provides a comprehensive ecosystem of educational technology products, including SIMS, LMS, Tutoring platforms, and more."
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] px-3 text-slate-900 dark:text-white overflow-x-clip selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="MindSync Solutions | Empowering Education Through Technology"
        description="Discover the MindSync ecosystem. From school management to AI-powered course transformation, we provide the tools for the future of education."
        canonicalUrl="https://mindsync.solutions"
      />
      <StructuredData data={organizationSchema} />
      <Navbar />

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-[0.8] lg:flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900 dark:text-white"
              >
                Infinite 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-gradient">
                  Solutions.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                MindSync Solutions is the definitive ecosystem for modern education. 
                One unified platform powering the next generation of learning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
              >
                <button
                  onClick={() => navigate("/schedule-demo")}
                  onMouseEnter={preloadCalendly}
                  className="group relative inline-flex items-center justify-center px-10 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:scale-105 transition-all duration-500 font-bold overflow-hidden shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <Rocket className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                
                <button
                  onClick={() => navigate("/products")}
                  className="group text-slate-600 dark:text-slate-400 font-bold flex items-center gap-2 hover:text-indigo-600 transition-colors"
                >
                  View Ecosystem
                  <div className="w-8 h-[2px] bg-slate-200 dark:bg-slate-800 group-hover:w-12 group-hover:bg-indigo-500 transition-all" />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 lg:flex-[1.1] relative w-full max-w-[650px] lg:max-w-none"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[80px] rounded-full scale-110" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <img
                    src={adminsLight}
                    alt="Educational Leaders"
                    className="block dark:hidden rounded-2xl w-full h-auto drop-shadow-[0_20px_50px_rgba(79,70,229,0.15)] border border-white/10"
                  />
                  <img
                    src={adminsDark}
                    alt="Educational Leaders"
                    className="hidden dark:block rounded-2xl w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-white/10"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Product Showcase */}
      <ProductShowcase />

      {/* Advantage Section */}
      <AdvantageSection />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden px-4">
        <div className="max-w-[1400px] mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-slate-900 rounded-[4rem] group-hover:scale-[1.01] transition-transform duration-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
          
          <div className="relative z-10 py-24 px-8 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Architecting the Future 
                <span className="block text-indigo-400">of Education.</span>
              </h2>
              <p className="text-xl md:text-2xl text-indigo-100/70 mb-12 font-medium">
                Connect with our specialists today to orchestrate your institution's digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-12 h-16 rounded-full bg-white text-slate-950 font-black text-lg hover:scale-105 transition-all shadow-2xl"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/schedule-demo")}
                  className="px-12 h-16 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  Consult an Expert
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
