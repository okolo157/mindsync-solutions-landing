import { motion } from "framer-motion";

export const HeroVisual = () => {
    return (
        <div className="relative w-full aspect-square max-w-[600px] mx-auto group">
            {/* Ambient Depth Layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[4rem] blur-[80px] animate-pulse" />
            
            <div className="relative h-full w-full bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/20 dark:border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                {/* Floating Geometric Elements */}
                <motion.div 
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-[2rem] border border-white/20"
                />

                <motion.div 
                    animate={{ 
                        y: [0, 20, 0],
                        rotate: [0, -8, 0]
                    }}
                    transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[20%] right-[10%] w-[35%] h-[50%] bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-3xl"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] border border-slate-200/20 dark:border-white/5 rounded-[3rem] rotate-12" />
                    <div className="absolute w-[80%] h-[80%] border border-slate-200/10 dark:border-white/5 rounded-[3rem] -rotate-6" />
                </div>

                {/* Animated Light Streaks */}
                <motion.div 
                    animate={{ 
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"
                />
            </div>

            {/* Accent Orbs */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"
            />
            <motion.div 
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-[100px]"
            />
        </div>
    );
};
