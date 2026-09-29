import React from 'react';
import { CutoutText } from './CutoutText';

export const FilmCreditsStrip: React.FC = () => {
  /* ======================================================================== */
  /* VALORES EDITÁVEIS - CRÉDITOS NUMÉRICOS (PLACEHOLDER EDITÁVEL)            */
  /* Altere as métricas abaixo conforme a expansão dos sistemas da empresa.   */
  /* ======================================================================== */

  // PLACEHOLDER EDITÁVEL: Total de sistemas operacionais em produção
  const TOTAL_SISTEMAS = '8 SISTEMAS NO AR';

  // PLACEHOLDER EDITÁVEL: Cidade sede e engenharia
  const CIDADE_SEDE = 'MANAUS, AMAZONAS';

  // PLACEHOLDER EDITÁVEL: Garantia e governança técnica
  const MODELO_SUPORTE = 'SUPORTE DIRETO COM QUEM CONSTRUIU';

  /* ======================================================================== */

  return (
    <section
      id="numeros"
      className="relative w-full py-20 md:py-28 px-6 md:px-12 bg-[#0E0C0A] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Long Paper Ribbon Banner across screen */}
      <div className="w-full max-w-6xl transform rotate-[-1.5deg]">
        <div className="bg-[#E8B83A] text-[#0E0C0A] p-6 md:p-10 paper-cut shadow-hard-black border-2 border-[#0E0C0A]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            {/* Bloco 1: Total de Sistemas */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 block">
                CATÁLOGO ATIVO
              </span>
              <div className="font-title text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight paper-cut">
                <CutoutText text={TOTAL_SISTEMAS} />
              </div>
            </div>

            <div className="hidden md:block w-3 h-3 bg-[#0E0C0A] paper-cut rotate-45" />

            {/* Bloco 2: Localidade */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 block">
                ORIGEM & BASE
              </span>
              <div className="font-title text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight paper-cut">
                <CutoutText text={CIDADE_SEDE} />
              </div>
            </div>

            <div className="hidden md:block w-3 h-3 bg-[#0E0C0A] paper-cut rotate-45" />

            {/* Bloco 3: Suporte Direto */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70 block">
                ATENDIMENTO
              </span>
              <div className="font-title text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight paper-cut text-[#FF4A1C]">
                <CutoutText text={MODELO_SUPORTE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
