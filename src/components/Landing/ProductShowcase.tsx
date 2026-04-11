import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PRODUCTS } from "@/config/products";
import { CTAButton } from "@/components/ui/ctaButton";
import { useNavigate } from "react-router-dom";

export const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Our Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            A unified suite of products designed to empower every corner of the educational landscape, 
            from classroom management to staffing solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                {product.link && <ExternalLink className="w-5 h-5 text-indigo-500" />}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {product.name}
              </h3>
              <div className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">
                {product.tagline}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  Visit Website <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="text-sm font-medium text-slate-400">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <CTAButton
            onClick={() => navigate("/products")}
            size="lg"
            className="px-12 h-16 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-500/20"
          >
            Explore All Solutions
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
