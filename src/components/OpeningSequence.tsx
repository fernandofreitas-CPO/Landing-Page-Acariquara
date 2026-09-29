import React, { useState, useEffect } from 'react';
import { CutoutText } from './CutoutText';
import { AcariquaraLogo } from './AcariquaraLogo';

interface OpeningSequenceProps {
  onScrollDown: () => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onScrollDown }) => {
  // Stop-motion animation phases (0 to 4)
  const [phase, setPhase] = useState<number>(0);
  const [lettersVisible, setLettersVisible] = useState<number>(0);

  useEffect(() => {
    // Stop-motion stepped timing (8-12 fps feel)
    const t1 = setTimeout(() => setPhase(1), 300); // Orange strip steps in
    const t2 = setTimeout(() => setPhase(2), 700); // Violet strip steps in & touches
    const t3 = setTimeout(() => setPhase(3), 1100); // Center dot drops in 2 steps
    const t4 = setTimeout(() => setPhase(4), 1600); // Dry cut snap to official logo

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Title letters pop in step by step
  useEffect(() => {
    if (phase >= 4) {
      const fullText = 'ACARIQUARA TECH';
      const interval = setInterval(() => {
        setLettersVisible((prev) => {
          if (prev >= fullText.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 70); // ~14 fps jerky title reveal
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <section
      id="abertura"
      className="relative w-full min-h-screen bg-[#0E0C0A] text-[#EFE6D2] flex flex-col justify-between p-6 md:p-12 select-none overflow-hidden"
    >
      {/* Film Slate Meta in top corners */}
      <div className="w-full flex items-center justify-between font-mono text-xs text-[#EFE6D2]/60 z-20">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#FF4A1C] paper-cut" />
          <span className="tracking-widest">CENA 00 · TITULOS PRINCIPAIS</span>
        </div>
        <div className="hidden sm:block text-[11px] tracking-widest text-[#EFE6D2]/40 uppercase">
          35mm / 24fps Stop-Motion
        </div>
      </div>

      {/* Center Stage: Symbol Assembly & Cutout Title Card */}
      <div className="my-auto flex flex-col items-center justify-center text-center z-10 py-12">
        {/* Símbolo montado em papel recortado -> corte seco para SVG fiel */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-8">
          {phase < 4 ? (
            /* Papel recortado artesanal em stop-motion */
            <div className="relative w-40 h-40">
              {/* Tira 1: Laranja-brasa (perna esquerda do A) */}
              <div
                style={{
                  transform:
                    phase === 0
                      ? 'translate(-90px, -60px) rotate(-35deg)'
                      : phase === 1
                      ? 'translate(-30px, -15px) rotate(-22deg)'
                      : 'translate(0px, 0px) rotate(-18deg)',
                  transition: 'transform 0.08s steps(2)',
                }}
                className="absolute top-4 left-6 w-8 h-32 bg-[#FF4A1C] shadow-hard-black paper-cut origin-top"
              />

              {/* Tira 2: Violeta (perna direita do A) */}
              <div
                style={{
                  transform:
                    phase < 2
                      ? 'translate(90px, -60px) rotate(35deg)'
                      : 'translate(0px, 0px) rotate(18deg)',
                  transition: 'transform 0.08s steps(2)',
                }}
                className="absolute top-4 right-6 w-8 h-32 bg-[#5B3DF5] shadow-hard-black paper-cut origin-top"
              />

              {/* Ponto central: cai no centro */}
              {phase >= 3 && (
                <div
                  style={{
                    transform:
                      phase === 3
                        ? 'translateY(-24px)'
                        : 'translateY(0px)',
                    transition: 'transform 0.09s steps(2)',
                  }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#E8B83A] shadow-hard-black paper-cut"
                />
              )}
            </div>
          ) : (
            /* CORTE SECO: O símbolo oficial da marca com gradiente interno ciano-violeta */
            <div className="animate-in fade-in duration-0">
              <AcariquaraLogo size={140} showText={false} />
            </div>
          )}
        </div>

        {/* CARD DE TÍTULO: Letras recortadas aparecendo uma a uma */}
        <div className="max-w-4xl space-y-4">
          <h1 className="font-title text-[clamp(2.75rem,8.5vw,7.5rem)] font-extrabold text-[#EFE6D2] tracking-tighter uppercase leading-[0.9] paper-cut">
            {phase >= 4 ? (
              <CutoutText
                text={'ACARIQUARA TECH'.slice(0, lettersVisible)}
                paperTiles={false}
              />
            ) : (
              <span className="opacity-0">ACARIQUARA TECH</span>
            )}
          </h1>

          {/* Subtítulo em mono */}
          {phase >= 4 && lettersVisible >= 10 && (
            <div className="space-y-3 pt-3 animate-in fade-in duration-100">
              <p className="font-mono text-xs md:text-sm text-[#EFE6D2]/80 tracking-[0.22em] uppercase max-w-xl mx-auto">
                Sistemas sob medida. Feitos em Manaus. Feitos pra durar.
              </p>

              {/* Nota de diretor à mão */}
              <div className="pt-2 flex items-center justify-center gap-2">
                <span className="font-hand text-xl md:text-2xl text-[#E8B83A] tracking-wider rotate-[-2deg]">
                  roda o filme ↓
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Slate info & scroll trigger */}
      <div className="w-full flex items-end justify-between font-mono text-xs text-[#EFE6D2]/60 z-20 pt-8 border-t border-[#EFE6D2]/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <span className="text-[#FF4A1C] font-semibold">DIREÇÃO: ACARIQUARA TECH</span>
          <span className="text-[#EFE6D2]/40 hidden sm:inline">|</span>
          <span>AMAZONAS, BRASIL</span>
        </div>

        <button
          onClick={onScrollDown}
          className="group flex items-center gap-2 text-[#E8B83A] hover:text-[#FF4A1C] transition-colors cursor-pointer uppercase tracking-widest text-[11px]"
        >
          <span>Avançar Rolo</span>
          <span className="inline-block transform group-hover:translate-y-1 transition-transform font-bold">
            ↓
          </span>
        </button>
      </div>
    </section>
  );
};
