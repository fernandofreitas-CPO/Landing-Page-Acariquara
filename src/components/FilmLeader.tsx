import React, { useState, useEffect } from 'react';

interface FilmLeaderProps {
  onComplete: () => void;
}

export const FilmLeader: React.FC<FilmLeaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(5);
  const [sweepAngle, setSweepAngle] = useState<number>(0);

  useEffect(() => {
    // 35mm Leader countdown: 5 -> 4 -> 3 -> 2 -> 1 -> complete
    const interval = window.setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 0;
        }
        return prev - 1;
      });
    }, 600);

    // Continuous radial sweep line
    let animId: number;
    const startTime = performance.now();
    const updateSweep = (time: number) => {
      const elapsed = time - startTime;
      const angle = (elapsed / 600) * 360; // 1 revolution per count
      setSweepAngle(angle % 360);
      animId = requestAnimationFrame(updateSweep);
    };
    animId = requestAnimationFrame(updateSweep);

    // Skip on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        clearInterval(interval);
        cancelAnimationFrame(animId);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-50 bg-[#0E0C0A] text-[#EFE6D2] flex flex-col items-center justify-between p-8 select-none cursor-pointer overflow-hidden animate-projector-jitter"
      role="dialog"
      aria-label="Contagem regressiva de cinema"
    >
      {/* Film scratches and grain */}
      <div className="absolute inset-0 pointer-events-none paper-grain opacity-60" />
      <div className="absolute top-0 bottom-0 left-[28%] w-[1px] bg-white/20 animate-film-scratch pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[35%] w-[1.5px] bg-white/15 animate-film-scratch pointer-events-none" />

      {/* Top Film Slate Info */}
      <div className="w-full flex justify-between items-center font-mono text-xs text-[#EFE6D2]/60 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF4A1C]" />
          <span>ROLO 01 / 35MM</span>
        </div>
        <span className="text-[11px] tracking-widest uppercase">
          Pular [ESC]
        </span>
      </div>

      {/* Center 35mm Leader Target Reticle */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center z-10">
        {/* Crosshairs */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#EFE6D2]/40" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#EFE6D2]/40" />

        {/* Concentric Circles with rough hand-drawn cut edge */}
        <div className="absolute inset-4 rounded-full border-2 border-[#EFE6D2]/60 paper-cut" />
        <div className="absolute inset-12 rounded-full border-2 border-[#EFE6D2]/40 paper-cut" />

        {/* Sweeping Radian Line */}
        <div
          className="absolute inset-4 rounded-full pointer-events-none overflow-hidden"
          style={{
            background: `conic-gradient(from ${sweepAngle}deg at 50% 50%, rgba(239, 230, 210, 0.25) 0deg, transparent 45deg, transparent 360deg)`,
          }}
        />

        {/* Big Hand-Drawn Countdown Number */}
        <div className="relative z-20 font-title text-8xl md:text-9xl font-extrabold text-[#EFE6D2] paper-cut select-none">
          {count > 0 ? count : '●'}
        </div>
      </div>

      {/* Bottom Title Subtitle */}
      <div className="w-full text-center z-10 space-y-2">
        <div className="font-mono text-xs md:text-sm tracking-[0.35em] text-[#FF4A1C] uppercase font-semibold">
          ACARIQUARA TECH APRESENTA
        </div>
        <div className="font-mono text-[10px] text-[#EFE6D2]/40 tracking-widest uppercase">
          Feito pra durar como a acariquara
        </div>
      </div>
    </div>
  );
};
