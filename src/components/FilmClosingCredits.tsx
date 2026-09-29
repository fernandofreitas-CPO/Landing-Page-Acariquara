import React from 'react';
import { CutoutText } from './CutoutText';

export const FilmClosingCredits: React.FC = () => {
  const CREDITS = [
    {
      role: 'CONVERSA',
      desc: 'Entendemos a sua operação de verdade, na raiz do problema.',
    },
    {
      role: 'ROTEIRO',
      desc: 'Telas, fluxos e regras de negócio definidos antes de programar.',
    },
    {
      role: 'FILMAGEM',
      desc: 'Desenvolvimento em Manaus, com entregas parciais que você já testa.',
    },
    {
      role: 'ESTREIA',
      desc: 'Entrada no ar assistida e treinamento presencial ou ao vivo da sua equipe.',
    },
    {
      role: 'SEQUÊNCIA',
      desc: 'Evolução contínua e arquitetura sólida conforme seu negócio cresce.',
    },
  ];

  return (
    <section
      id="processo"
      className="relative min-h-screen bg-[#0E0C0A] text-[#EFE6D2] py-32 md:py-48 px-6 md:px-12 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Film Header Slate */}
      <div className="max-w-4xl mx-auto w-full text-center space-y-3 pb-16 border-b border-[#EFE6D2]/15">
        <span className="font-mono text-xs text-[#FF4A1C] tracking-[0.35em] uppercase font-semibold">
          CRÉDITOS DE PRODUÇÃO / PROCESSO
        </span>
        <h2 className="font-title text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight paper-cut">
          <CutoutText text="COMO TRABALHAMOS" />
        </h2>
        <p className="font-mono text-xs text-[#EFE6D2]/60 uppercase tracking-widest max-w-md mx-auto">
          Ordem cronológica da engenharia sob medida
        </p>
      </div>

      {/* 2-Column Classic Cinema End Credits List */}
      <div className="max-w-4xl mx-auto w-full my-auto py-16 space-y-12 md:space-y-16">
        {CREDITS.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
          >
            {/* Left Column: Film Role (Aligned Right towards center) */}
            <div className="md:col-span-4 text-left md:text-right">
              <span className="font-title text-2xl sm:text-3xl font-black uppercase text-[#E8B83A] tracking-wider paper-cut">
                {item.role}
              </span>
            </div>

            {/* Middle separator dot */}
            <div className="hidden md:flex md:col-span-1 justify-center text-[#FF4A1C] font-mono text-sm">
              —
            </div>

            {/* Right Column: Description (Aligned Left from center) */}
            <div className="md:col-span-7 text-left">
              <p className="font-mono text-sm sm:text-base text-[#EFE6D2]/90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Production Slate */}
      <div className="max-w-4xl mx-auto w-full pt-16 border-t border-[#EFE6D2]/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#EFE6D2]/50 text-center sm:text-left">
        <div>
          <span>ESTÚDIO DE ENGENHARIA DE SOFTWARE</span>
          <span className="mx-2">·</span>
          <span>MANAUS, AM</span>
        </div>
        <div className="font-hand text-xl text-[#FF4A1C] rotate-[-2deg]">
          corte final aprovado ✔
        </div>
      </div>
    </section>
  );
};
