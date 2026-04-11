import { motion } from "framer-motion";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { ExternalLink } from "lucide-react";
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
        title="Our Solutions | MindSync Solutions"
        description="Explore the MindSync ecosystem. From SIMS and LMS to tutoring platforms and AI tools, we provide the technology to power education."
        canonicalUrl="https://mindsync.solutions/products"
      />
      <StructuredData data={productSchema} />
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-56 lg:pb-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.8] text-slate-900 dark:text-white"
          >
            Empowering <br />
            <span className="text-indigo-600 dark:text-indigo-500">Evolution.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A cohesive suite of architectural foundations designed to scale 
            modern educational institutions with precision and reliability.
          </motion.p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-12 rounded-[3.5rem] bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute -right-24 -top-24 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/15 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-slate-50 dark:bg-slate-800/50 text-slate-400 group-hover:text-indigo-600 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>

                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 transition-colors duration-500">
                    {product.name}
                  </h2>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-8">
                    {product.tagline}
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-12 font-medium">
                    {product.description}
                  </p>

                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-all"
                    >
                      Explore Platform
                      <div className="w-8 h-[2px] bg-slate-900 dark:bg-white group-hover:w-16 group-hover:bg-indigo-600 transition-all duration-500 opacity-20" />
                    </a>
                  ) : (
                    <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                      Phase II Implementation
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-[4rem] group-hover:scale-[1.01] transition-transform duration-700" />
          
          <div className="relative z-10 py-24 px-8 md:px-16 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-[0.9]">
              Ready for a <br />
              <span className="text-indigo-600">Strategic Shift?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
              Our specialists are ready to help you migrate to a more resilient, 
              interoperable educational ecosystem.
            </p>
            
            <button
              onClick={() => navigate("/contact")}
              className="px-12 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Consult Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
