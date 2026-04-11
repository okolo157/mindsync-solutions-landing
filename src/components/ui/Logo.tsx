import React from 'react';

interface LogoProps {
  isDark?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ isDark, className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* The Purple Bar Icon recreated in SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(9)].map((_, i) => (
            <rect 
              key={i}
              x={10 + i * 10} 
              y={25 + Math.abs(i - 4) * 8} 
              width="4" 
              height={50 - Math.abs(i - 4) * 16} 
              fill="#6366f1" 
              rx="2"
            />
          ))}
          {[...Array(9)].map((_, i) => (
            <rect 
              key={i+10}
              x={10 + i * 10} 
              y={75 - Math.abs(i - 4) * 4} 
              width="4" 
              height="8" 
              fill="#6366f1" 
              rx="2" 
              opacity="0.5"
            />
          ))}
        </svg>
      </div>
      <span className={`text-2xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
        mindsync
      </span>
    </div>
  );
};
