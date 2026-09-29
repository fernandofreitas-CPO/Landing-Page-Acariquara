import React, { useState } from 'react';
import { CutoutText } from './CutoutText';

export interface CastSceneData {
  id: string;
  number: string;
  name: string;
  oneLineDesc: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  badgeBg: string;
  badgeTextColor: string;
  screenImg: string | React.ReactNode;
  secondaryImg?: string | React.ReactNode;
  motifType: 'military' | 'coffee' | 'barber' | 'tree' | 'scale' | 'parking' | 'gear' | 'clock';
  screenRotation: number;
}

interface FilmCastSceneProps {
  scene: CastSceneData;
  index: number;
}

export const FilmCastScene: React.FC<FilmCastSceneProps> = ({ scene }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Render thematic cutout paper motif for each scene
  const renderCutoutMotif = () => {
    switch (scene.motifType) {
      case 'military':
        return (
          <div
            style={{
              transform: isHovered ? 'rotate(12deg) scale(1.05)' : 'rotate(0deg) scale(1)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute top-12 right-8 md:top-20 md:right-24 flex flex-col items-center gap-2 select-none pointer-events-none opacity-85 z-0"
          >
            {/* Cutout Military Chevrons (Divisas) */}
            <div className="w-16 h-8 bg-[#0E0C0A] paper-cut shadow-hard-black clip-chevron" />
            <div className="w-16 h-8 bg-[#0E0C0A] paper-cut shadow-hard-black clip-chevron" />
            <div className="w-16 h-8 bg-[#0E0C0A] paper-cut shadow-hard-black clip-chevron" />
            {/* Cutout Star */}
            <div className="text-4xl text-[#0E0C0A] mt-2 font-black paper-cut">
              ★
            </div>
          </div>
        );

      case 'coffee':
        return (
          <div
            style={{
              transform: isHovered ? 'translateY(-12px) rotate(-6deg)' : 'translateY(0) rotate(0deg)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute top-16 right-8 md:top-24 md:right-20 flex flex-col items-center gap-3 select-none pointer-events-none z-0"
          >
            {/* Cutout rising steam wavy strips */}
            <div className="flex gap-2 mb-1">
              <div className="w-2.5 h-12 bg-[#FF4A1C] paper-cut rounded-full rotate-[-12deg]" />
              <div className="w-2.5 h-16 bg-[#FF4A1C] paper-cut rounded-full rotate-[6deg]" />
              <div className="w-2.5 h-10 bg-[#FF4A1C] paper-cut rounded-full rotate-[-8deg]" />
            </div>
            {/* Cutout Coffee Cup saucer & mug */}
            <div className="w-24 h-16 bg-[#EFE6D2] paper-cut shadow-hard-orange rounded-b-xl border-t-4 border-[#FF4A1C]" />
            <div className="w-32 h-3 bg-[#FF4A1C] paper-cut shadow-hard-orange rounded-full" />
          </div>
        );

      case 'barber':
        return (
          <div
            style={{
              transform: isHovered ? 'rotate(15deg) scale(1.08)' : 'rotate(0deg) scale(1)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute bottom-16 left-8 md:bottom-24 md:left-16 flex items-center gap-2 select-none pointer-events-none z-0"
          >
            {/* Cutout razor blade silhouette */}
            <div className="w-32 h-16 bg-[#E8B83A] paper-cut shadow-hard-black relative flex items-center justify-center rotate-[-14deg]">
              <div className="w-20 h-4 bg-[#0E0C0A] paper-cut flex items-center justify-between px-1">
                <span className="w-2 h-2 rounded-full bg-[#E8B83A]" />
                <span className="w-2 h-2 rounded-full bg-[#E8B83A]" />
              </div>
            </div>
            {/* Sharp scissor blades in paper */}
            <div className="w-6 h-28 bg-[#FF4A1C] paper-cut shadow-hard-black rotate-[28deg] origin-bottom" />
          </div>
        );

      case 'tree':
        return (
          <div
            style={{
              transform: isHovered ? 'scale(1.06) rotate(4deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute top-16 right-10 md:top-20 md:right-28 select-none pointer-events-none z-0 opacity-80"
          >
            {/* Tree trunk concentric growth rings & branches */}
            <div className="relative w-36 h-36 border-4 border-[#5B3DF5] rounded-full paper-cut flex items-center justify-center">
              <div className="w-24 h-24 border-3 border-[#5B3DF5] rounded-full paper-cut flex items-center justify-center">
                <div className="w-12 h-12 bg-[#0E0C0A] rounded-full paper-cut" />
              </div>
              <div className="absolute -top-6 w-4 h-16 bg-[#0E0C0A] paper-cut rotate-[25deg]" />
              <div className="absolute -bottom-6 w-4 h-16 bg-[#0E0C0A] paper-cut rotate-[-35deg]" />
            </div>
          </div>
        );

      case 'scale':
        return (
          <div
            style={{
              transform: isHovered ? 'rotate(-8deg)' : 'rotate(0deg)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute top-14 right-12 md:top-20 md:right-24 select-none pointer-events-none z-0"
          >
            {/* Abstract judicial balance beam and plates */}
            <div className="w-40 h-3 bg-[#EFE6D2] paper-cut shadow-hard-black relative flex justify-between items-center">
              <div className="absolute left-1/2 -top-6 w-3 h-16 bg-[#0E0C0A] paper-cut -translate-x-1/2" />
              <div className="w-10 h-10 border-b-4 border-l-4 border-r-4 border-[#EFE6D2] paper-cut shadow-hard-black mt-8" />
              <div className="w-10 h-10 border-b-4 border-l-4 border-r-4 border-[#EFE6D2] paper-cut shadow-hard-black mt-8" />
            </div>
          </div>
        );

      case 'parking':
        return (
          <div
            style={{
              transform: isHovered ? 'translateX(14px)' : 'translateX(0)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute bottom-16 right-8 md:bottom-20 md:right-24 select-none pointer-events-none z-0"
          >
            {/* Barrier gate and asphalt yellow stripes */}
            <div className="flex flex-col gap-2">
              <div className="w-48 h-5 bg-[#0E0C0A] paper-cut shadow-hard-black flex items-center justify-between px-2">
                <div className="w-6 h-full bg-[#EFE6D2] skew-x-12" />
                <div className="w-6 h-full bg-[#EFE6D2] skew-x-12" />
                <div className="w-6 h-full bg-[#EFE6D2] skew-x-12" />
              </div>
              <div className="text-5xl font-black text-[#EFE6D2] paper-cut ml-auto">
                ➔
              </div>
            </div>
          </div>
        );

      case 'gear':
        return (
          <div
            style={{
              transform: isHovered ? 'rotate(30deg) scale(1.05)' : 'rotate(0deg)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute top-14 right-8 md:top-20 md:right-24 select-none pointer-events-none z-0"
          >
            {/* Jagged cutout industrial gear */}
            <div className="relative w-36 h-36 bg-[#E8B83A] paper-cut shadow-hard-black flex items-center justify-center">
              <div className="w-16 h-16 bg-[#0E0C0A] paper-cut rounded-full" />
              <div className="absolute top-0 w-8 h-4 bg-[#FF4A1C] paper-cut" />
              <div className="absolute bottom-0 w-8 h-4 bg-[#FF4A1C] paper-cut" />
              <div className="absolute left-0 h-8 w-4 bg-[#FF4A1C] paper-cut" />
              <div className="absolute right-0 h-8 w-4 bg-[#FF4A1C] paper-cut" />
            </div>
          </div>
        );

      case 'clock':
        return (
          <div
            style={{
              transform: isHovered ? 'rotate(18deg)' : 'rotate(0deg)',
              transition: 'transform 0.1s steps(2)',
            }}
            className="absolute top-14 right-10 md:top-20 md:right-28 select-none pointer-events-none z-0"
          >
            {/* Giant cut clock hands */}
            <div className="relative w-32 h-32 border-4 border-[#E8B83A] rounded-full paper-cut flex items-center justify-center">
              <div className="w-3 h-3 bg-[#EFE6D2] rounded-full z-10" />
              {/* Hour hand */}
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-3.5 h-12 bg-[#EFE6D2] paper-cut shadow-hard-black origin-bottom rotate-[-45deg]" />
              {/* Minute hand */}
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-2 h-16 bg-[#E8B83A] paper-cut shadow-hard-black origin-bottom rotate-[65deg]" />
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id={scene.id}
      style={{ backgroundColor: scene.bgColor, color: scene.textColor }}
      className="relative min-h-screen w-full py-20 md:py-28 px-6 md:px-12 flex flex-col justify-between select-none overflow-hidden border-b-4 border-[#0E0C0A]"
    >
      {/* Background Cutout Paper Motif */}
      {renderCutoutMotif()}

      {/* Top Slate Information */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between font-mono text-xs z-10 pb-6 border-b-2 border-current/20">
        <div className="flex items-center gap-3">
          <span className="font-title text-base font-black tracking-wider">
            {scene.number}
          </span>
          <span className="opacity-40">/</span>
          <span className="tracking-widest uppercase">
            Direção: Acariquara Tech
          </span>
        </div>

        {/* Selo Recortado "EM USO REAL" */}
        <div
          style={{ backgroundColor: scene.badgeBg, color: scene.badgeTextColor }}
          className="px-3 py-1 font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase paper-cut shadow-hard-black"
        >
          ● EM USO REAL
        </div>
      </div>

      {/* Center Stage: Title + Printed Screen(s) */}
      <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 py-8">
        {/* Left Column: Film Title & One Line Synopsis */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-mono text-xs tracking-[0.25em] uppercase opacity-75">
            SISTEMA SOB MEDIDA
          </div>

          <h2 className="font-title text-[clamp(2.25rem,5.5vw,4.5rem)] font-black uppercase tracking-tight leading-[0.92] paper-cut">
            <CutoutText text={scene.name} />
          </h2>

          <p className="font-sans text-sm md:text-base leading-relaxed opacity-90 max-w-md pt-2">
            {scene.oneLineDesc}
          </p>

          <div className="pt-4 font-mono text-xs opacity-60">
            <span>Manaus, AM</span>
            <span className="mx-2">·</span>
            <span>Código Proprietário</span>
          </div>
        </div>

        {/* Right Column: Printed Screen with White Paper Margin & Hard Shadow */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: isHovered
                ? `translate(-10px, -10px) rotate(${scene.screenRotation + 1.5}deg)`
                : `translate(0, 0) rotate(${scene.screenRotation}deg)`,
              transition: 'transform 0.1s steps(2)',
            }}
            className="relative p-3 md:p-4 bg-white paper-cut shadow-hard-black cursor-pointer group max-w-2xl w-full"
          >
            {/* White paper photographic print margin */}
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] bg-black overflow-hidden border border-slate-300">
              {scene.screenImg}
            </div>

            {/* Overlapping secondary screen (for Jordão Metaltech) */}
            {scene.secondaryImg && (
              <div
                style={{
                  transform: isHovered
                    ? 'translate(-6px, -6px) rotate(-2deg)'
                    : 'translate(0, 0) rotate(-4deg)',
                  transition: 'transform 0.1s steps(2)',
                }}
                className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 w-[70%] h-[55%] p-2 md:p-3 bg-white paper-cut shadow-hard-black z-20"
              >
                <div className="w-full h-full bg-black overflow-hidden border border-slate-300">
                  {scene.secondaryImg}
                </div>
              </div>
            )}

            {/* Print paper bottom caption */}
            <div className="mt-2 flex items-center justify-between font-mono text-[9px] md:text-[10px] text-slate-700 tracking-wider">
              <span>ACARIQUARA TECH · FRAME ARQUIVO</span>
              <span>100% PRODUÇÃO REAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slate */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between font-mono text-[11px] opacity-60 z-10 pt-4 border-t border-current/20">
        <span>PRODUÇÃO ORIGINAL</span>
        <span>MANAUS / BRASIL</span>
      </div>
    </section>
  );
};
