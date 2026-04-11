import { motion } from "framer-motion";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "@/config/products";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

export default function Products() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.name,
      "description": p.description,
      "url": p.link || "https://mindsync.solutions"
    }))
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="Our Solutions | MindSync Solutions Australia"
        description="Explore the MindSync ecosystem. From SIMS and LMS to tutoring platforms and AI tools, we provide the technology to power education."
        canonicalUrl="https://mindsync.solutions/products"
      />
      <StructuredData data={productSchema} />
      <Navbar />

      {/* Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-20 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800"
          >
            The MindSync Ecosystem
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/50 dark:from-white dark:via-white/90 dark:to-white/50"
          >
            Innovative Tools for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Modern Institutions.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our comprehensive suite of educational technology products designed 
            to streamline operations and enhance learning outcomes.
          </motion.p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <product.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {product.name}
                  </h2>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 font-mono">
                    {product.tagline}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
                    {product.description}
                  </p>

                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 group/btn"
                    >
                      Visit Product Website
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-sm italic">
                      Coming Soon to the Ecosystem
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-slate-50 dark:bg-[#02040a] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Looking for a Custom Solution?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Our team of educational technology experts is ready to help you build the perfect setup for your institution.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-5 rounded-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-600 hover:text-white transition-all"
          >
            Schedule a Strategy Call
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
