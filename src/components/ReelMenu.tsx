import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, X, Disc3 } from 'lucide-react';
import { projectorAudio } from '../utils/projectorAudio';
import { AcariquaraLogo } from './AcariquaraLogo';

interface ReelStation {
  id: string;
  reelNumber: string;
  title: string;
  genre: string;
}

export const REELS: ReelStation[] = [
  { id: 'abertura', reelNumber: 'ROLO 00', title: 'Títulos Principais', genre: 'Abertura' },
  { id: 'sinopse', reelNumber: 'ROLO 01', title: 'Sinopse', genre: 'O que fazemos' },
  { id: 'filme-1', reelNumber: 'FILME 01', title: 'QI Militar', genre: 'Educação Militar' },
  { id: 'filme-2', reelNumber: 'FILME 02', title: 'Aurora Coffee', genre: 'E-commerce Sensorial' },
  { id: 'filme-3', reelNumber: 'FILME 03', title: 'Barber Pro', genre: 'Gestão & PDV' },
  { id: 'filme-4', reelNumber: 'FILME 04', title: 'AlpenTree', genre: 'Genealogia Secular' },
  { id: 'filme-5', reelNumber: 'FILME 05', title: 'Amni Codex', genre: 'Inteligência Jurídica' },
  { id: 'filme-6', reelNumber: 'FILME 06', title: 'Estacionamento', genre: 'PDV de Pátio' },
  { id: 'filme-7', reelNumber: 'FILME 07', title: 'Jordão Metaltech', genre: 'PCP & Corte a Laser' },
  { id: 'filme-8', reelNumber: 'FILME 08', title: 'Horalys', genre: 'Ponto Biométrico' },
  { id: 'numeros', reelNumber: 'ROLO 09', title: 'Catálogo Ativo', genre: 'Métricas' },
  { id: 'processo', reelNumber: 'ROLO 10', title: 'Créditos Finais', genre: 'Processo' },
  { id: 'final', reelNumber: 'FINAL', title: 'Começo.', genre: 'Contato Direto' },
];

interface ReelMenuProps {
  onNavigate: (id: string) => void;
}

export const ReelMenu: React.FC<ReelMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  const toggleAudio = async () => {
    if (audioActive) {
      projectorAudio.stop();
      setAudioActive(false);
    } else {
      const ok = await projectorAudio.start();
      if (ok) setAudioActive(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Fixed Reel & Audio Trigger in Corner */}
      <nav
        aria-label="Controle de bobinas e som de projetor"
        className="fixed top-6 right-6 md:top-8 md:right-10 z-40 flex items-center gap-3 select-none"
      >
        {/* Projector 35mm Audio Button */}
        <button
          onClick={toggleAudio}
          aria-label={audioActive ? 'Desligar som do projetor' : 'Ligar som do projetor mecânico'}
          className={`flex items-center gap-2 px-3 py-1.5 border-2 border-[#0E0C0A] font-mono text-[11px] tracking-widest uppercase paper-cut shadow-hard-black transition-colors cursor-pointer ${
            audioActive
              ? 'bg-[#FF4A1C] text-[#EFE6D2]'
              : 'bg-[#EFE6D2] text-[#0E0C0A] hover:bg-[#E8B83A]'
          }`}
        >
          {audioActive ? (
            <>
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              <span>PROJETOR ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PROJETOR OFF</span>
            </>
          )}
        </button>

        {/* Cutout Reel Circle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir lista de bobinas e filmes"
          className="relative w-11 h-11 bg-[#E8B83A] text-[#0E0C0A] border-2 border-[#0E0C0A] paper-cut shadow-hard-black flex items-center justify-center cursor-pointer hover:bg-[#EFE6D2] transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5 font-bold" />
          ) : (
            <Disc3 className="w-6 h-6 animate-spin [animation-duration:8s]" />
          )}
        </button>
      </nav>

      {/* Sober Cut-Paper Sheet Overlay with List of Reels */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mapa de bobinas do filme"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-[#0E0C0A]/80 backdrop-blur-[2px] flex justify-end p-4 md:p-8 animate-in fade-in duration-100"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md h-full bg-[#EFE6D2] text-[#0E0C0A] border-4 border-[#0E0C0A] paper-cut shadow-hard-black p-6 md:p-8 overflow-y-auto no-scrollbar flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#0E0C0A]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF4A1C] paper-cut" />
                  <span className="font-title text-xl font-black uppercase tracking-tight">
                    BOBINAS DO FILME
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-[#0E0C0A] hover:text-[#EFE6D2] transition-colors cursor-pointer"
                  aria-label="Fechar índice"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Station links */}
              <div className="mt-6 space-y-1">
                {REELS.map((reel) => (
                  <button
                    key={reel.id}
                    onClick={() => {
                      onNavigate(reel.id);
                      setIsOpen(false);
                    }}
                    className="w-full text-left py-2.5 px-3 flex items-center justify-between hover:bg-[#0E0C0A] hover:text-[#EFE6D2] group transition-colors cursor-pointer border-b border-[#0E0C0A]/10"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-[#FF4A1C] group-hover:text-[#E8B83A] w-16">
                        {reel.reelNumber}
                      </span>
                      <div>
                        <div className="font-title text-base font-extrabold uppercase tracking-tight">
                          {reel.title}
                        </div>
                        <div className="font-mono text-[10px] opacity-70">
                          {reel.genre}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ➔
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom slate */}
            <div className="pt-6 border-t-2 border-[#0E0C0A] font-mono text-[11px] flex justify-between items-center opacity-70">
              <span>Acariquara Tech</span>
              <span>Manaus, AM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
