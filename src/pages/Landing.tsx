import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { preloadCalendly } from "@/utils/calendly";
import { TrustSection } from "@/components/Landing/TrustSection";
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
    "name": "MindSync Solutions Australia",
    "url": "https://mindsync.solutions",
    "logo": "https://mindsync.solutions/mindsync.svg",
    "description": "MindSync Solutions Australia provides a comprehensive ecosystem of educational technology products, including SIMS, LMS, Tutoring platforms, and more."
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] px-3 text-slate-900 dark:text-white overflow-x-clip selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="MindSync Solutions Australia | Empowering Education Through Technology"
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                The Future of Education is Here
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/50 dark:from-white dark:via-white/90 dark:to-white/50"
              >
                One Ecosystem.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 dark:from-indigo-400 dark:to-purple-400">
                  Infinite Solutions.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-600/90 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0"
              >
                MindSync Solutions Australia brings together the world's most innovative educational tools 
                under one umbrella. From management to mastery, we power the learning journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <button
                  onClick={() => navigate("/schedule-demo")}
                  onMouseEnter={preloadCalendly}
                  className="inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 sm:px-12 h-12 sm:h-16 rounded-full bg-indigo-600 dark:bg-white text-white dark:text-indigo-950 hover:bg-indigo-700 dark:hover:bg-slate-200 border-none shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 font-bold w-full sm:w-auto"
                >
                  Book a Consultation
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="text-slate-600 dark:text-slate-400 font-bold hover:text-indigo-600 transition-colors"
                >
                  Explore Products
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

      {/* Trust & Compliance Section */}
      <TrustSection />

      {/* CTA Section */}
      <div className="py-20 lg:py-32 relative overflow-hidden bg-indigo-900 rounded-[3rem] mb-12 mx-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Transform Your Educational Future
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-10 px-4">
              Connect with our experts today to see how the MindSync ecosystem can revolutionize your institution.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-12 h-16 rounded-full bg-white text-indigo-900 hover:bg-indigo-50 border-none shadow-xl font-bold text-lg transition-all"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
