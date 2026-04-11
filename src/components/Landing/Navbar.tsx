import { Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { preloadCalendly } from "@/utils/calendly";
import logoDark from "@/assets/mind-dark.png";
import logoLight from "@/assets/mind-light.png";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  // Determine effective theme for logo
  useEffect(() => {
    const checkTheme = () => {
      if (theme === "system") {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      } else {
        setIsDark(theme === "dark" || theme === "dark-blue");
      }
    };

    checkTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") checkTheme();
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 bg-white/70 dark:bg-black/20 backdrop-blur-md border-b border-white/10 dark:border-white/5 transition-all duration-300">
      <div className="flex items-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* LEFT — Logo */}
        <div className="flex flex-1">
          <img
            src={isDark ? logoDark : logoLight}
            alt="Logo"
            onClick={() => navigate("/")}
            className="w-20 sm:w-28 h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>

        {/* CENTER — Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12">
          <button
            onClick={() => navigate("/")}
            className="group relative text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/products")}
            className="group relative text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            Ecosystem
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="group relative text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        {/* RIGHT — Actions */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-slate-300" />
            ) : (
              <Moon className="h-4 w-4 text-slate-600" />
            )}
          </button>

          <button
            onClick={() => navigate("/schedule-demo")}
            onMouseEnter={preloadCalendly}
            className="px-8 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:scale-105 transition-all shadow-xl"
          >
            Consult Expert
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-8 mt-16 px-4">
                <button
                  onClick={() => navigate("/")}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Home
                </button>

                <button
                  onClick={() => navigate("/products")}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Ecosystem
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-left text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  Contact
                </button>

                <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => navigate("/schedule-demo")}
                    onMouseEnter={preloadCalendly}
                    className="w-full h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-lg"
                  >
                    Consult Expert
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
