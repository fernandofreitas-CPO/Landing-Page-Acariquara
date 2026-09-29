import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CutoutText } from './CutoutText';

export const FilmSynopsis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-15%' });

  const STRIPS = [
    {
      word: 'SISTEMAS',
      bg: '#0E0C0A',
      textColor: '#EFE6D2',
      shadowClass: 'shadow-hard-orange',
      rot: -1.8,
      align: 'self-start',
      fromLeft: true,
    },
    {
      word: 'PLATAFORMAS',
      bg: '#FF4A1C',
      textColor: '#EFE6D2',
      shadowClass: 'shadow-hard-black',
      rot: 2.1,
      align: 'self-end',
      fromLeft: false,
    },
    {
      word: 'PDVs',
      bg: '#E8B83A',
      textColor: '#0E0C0A',
      shadowClass: 'shadow-hard-black',
      rot: -1.2,
      align: 'self-center',
      fromLeft: true,
    },
    {
      word: 'SITES',
      bg: '#5B3DF5',
      textColor: '#EFE6D2',
      shadowClass: 'shadow-hard-black',
      rot: 1.6,
      align: 'self-start',
      fromLeft: false,
    },
    {
      word: 'AUTOMAÇÕES',
      bg: '#0E0C0A',
      textColor: '#E8B83A',
      shadowClass: 'shadow-hard-orange',
      rot: -2.0,
      align: 'self-end',
      fromLeft: true,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="sinopse"
      className="relative min-h-screen bg-[#EFE6D2] text-[#0E0C0A] py-28 md:py-36 px-6 md:px-12 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Film Slate Header */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between font-mono text-xs text-[#0E0C0A]/60 pb-8 border-b-2 border-[#0E0C0A]/20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#0E0C0A] paper-cut" />
          <span className="font-bold tracking-widest uppercase">SINOPSE / O QUE FAZEMOS</span>
        </div>
        <span className="tracking-widest uppercase text-[11px]">
          Acariquara Tech Studio
        </span>
      </div>

      {/* 5 Alternating Cutout Paper Strips */}
      <div className="max-w-4xl mx-auto w-full my-auto flex flex-col gap-4 md:gap-6 py-12">
        {STRIPS.map((strip, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{
                x: strip.fromLeft ? -100 : 100,
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                      x: 0,
                      opacity: 1,
                    }
                  : {
                      x: strip.fromLeft ? -100 : 100,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 0.35,
                delay: idx * 0.1,
                ease: 'circOut',
              }}
              style={{
                transform: `rotate(${strip.rot}deg)`,
                backgroundColor: strip.bg,
                color: strip.textColor,
              }}
              className={`${strip.align} inline-block px-5 py-2.5 md:px-8 md:py-4 ${strip.shadowClass} paper-cut cursor-default`}
            >
              <span className="font-title text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                <CutoutText text={strip.word} />
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer of the scene: statement & handwritten note */}
      <div className="max-w-5xl mx-auto w-full pt-8 border-t-2 border-[#0E0C0A]/20 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <h2 className="font-title text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#0E0C0A]">
            Cada um sob medida. Nenhum de prateleira.
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#0E0C0A]/70 mt-1 max-w-md">
            Desenhamos cada interface e arquitetamos cada banco de dados a partir da sua operação real.
          </p>
        </div>

        <div className="font-hand text-2xl text-[#FF4A1C] rotate-[-3deg] shrink-0">
          * sem código genérico.
        </div>
      </div>
    </section>
  );
};
