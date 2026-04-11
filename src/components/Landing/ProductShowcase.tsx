import { motion } from "framer-motion";
import { PRODUCTS } from "@/config/products";
import { ArrowUpRight } from "lucide-react";

export const ProductShowcase = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-[#030712]">
      {/* Decorative lines / Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8"
          >
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Ecosphere.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
          >
            Each platform in the MindSync ecosystem is meticulously engineered to 
            work in concert, providing a seamless operational backbone for your institution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-10 rounded-[3rem] bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] flex flex-col h-full overflow-hidden"
            >
              {/* Blur accent */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />

              <div className="flex items-center justify-between relative z-10 mb-8">
                {product.link && (
                  <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-indigo-500 transition-colors ml-auto">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                )}
              </div>

              <div className="mb-6 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500/80">
                  {product.tagline}
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10 flex-1 relative z-10">
                {product.description}
              </p>

              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10"
                >
                  EXPLORE PLATFORM
                  <div className="w-6 h-[2px] bg-slate-900 dark:bg-white group-hover:w-10 group-hover:bg-indigo-600 transition-all" />
                </a>
              ) : (
                <span className="text-xs font-bold text-slate-400 tracking-widest relative z-10">COMING TO ECOSYSTEM</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
