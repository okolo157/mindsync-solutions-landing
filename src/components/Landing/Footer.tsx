import logoLight from "@/assets/mind-light.png";
import logoDark from "@/assets/mind-dark.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-slate-100 dark:border-white/5 py-12 text-slate-500 dark:text-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={logoLight}
              alt="Mindsync Logo"
              className="h-10 w-auto dark:hidden"
            />
            <img
              src={logoDark}
              alt="Mindsync Logo"
              className="h-10 w-auto hidden dark:block text-white"
            />
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">
              © {new Date().getFullYear()} MindSync Solutions
            </span>
          </div>

          <div className="flex items-center gap-10">
            <a href="/products" className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-600 transition-colors">ECOSYSTEM</a>
            <a href="/privacy" className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-600 transition-colors">PRIVACY</a>
            <a href="/terms" className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-600 transition-colors">TERMS</a>
            <a href="mailto:hello@mindsync.solutions" className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-600 transition-colors">SUPPORT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
