import React, { useState, useRef } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { CutoutText } from './CutoutText';

export const FilmFinalCard: React.FC = () => {
  /* ======================================================================== */
  /* CONFIGURAÇÃO DE CONTATO - ACARIQUARA TECH (EDITÁVEL)                      */
  /* Modifique o número do WhatsApp e o e-mail de contato abaixo:              */
  /* ======================================================================== */

  // PLACEHOLDER EDITÁVEL: Telefone de WhatsApp (DDI + DDD + Número)
  // Exemplo: '5592984501234' para Manaus (DDD 92)
  const WHATSAPP_PHONE_NUMBER = '5592984501234';

  // PLACEHOLDER EDITÁVEL: Mensagem inicial que o cliente enviará
  const WHATSAPP_INITIAL_MESSAGE = 'Olá! Vi o site da Acariquara Tech e quero conversar sobre um sistema sob medida.';

  // PLACEHOLDER EDITÁVEL: E-mail comercial direto
  const CONTACT_EMAIL = 'breno.santos@acariquaratech.com';

  /* ======================================================================== */

  const [isFlipped, setIsFlipped] = useState(false);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_INITIAL_MESSAGE
  )}`;

  // Magnetic button offset
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
    setBtnPos({ x, y });
  };

  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <footer
      id="final"
      className="relative min-h-screen bg-[#FF4A1C] text-[#0E0C0A] py-28 md:py-36 px-6 md:px-12 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Top Slate */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between font-mono text-xs text-[#0E0C0A]/70 pb-6 border-b-2 border-[#0E0C0A]/30">
        <span className="font-bold tracking-widest uppercase">
          ROLO FINAL · TELA DE ENCERRAMENTO
        </span>
        <span className="tracking-widest uppercase text-[11px]">
          Acariquara Tech
        </span>
      </div>

      {/* Center Interactive Title: FIM? -> COMEÇO. */}
      <div className="max-w-5xl mx-auto w-full my-auto text-center space-y-8 py-12">
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={() => setIsFlipped(!isFlipped)}
          className="inline-block cursor-pointer p-4 group"
          title="Passe o cursor ou toque para transformar"
        >
          <div
            style={{
              transform: isFlipped ? 'rotate(-3deg) scale(1.04)' : 'rotate(1deg) scale(1)',
              transition: 'transform 0.12s steps(3)',
            }}
            className="font-title text-[clamp(4.5rem,14vw,12rem)] font-black text-[#0E0C0A] tracking-tighter uppercase leading-none paper-cut select-none"
          >
            {isFlipped ? (
              <span className="text-[#EFE6D2]">
                <CutoutText text="COMEÇO." />
              </span>
            ) : (
              <CutoutText text="FIM?" />
            )}
          </div>
          <div className="font-hand text-xl text-[#0E0C0A]/80 mt-2">
            {isFlipped ? 'o próximo rolo é o seu ↑' : 'toque ou passe o mouse ↑'}
          </div>
        </div>

        {/* Closing Question & CTA */}
        <div className="space-y-4 max-w-xl mx-auto">
          <h3 className="font-title text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0E0C0A] tracking-tight">
            Qual é o seu próximo filme?
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#0E0C0A]/85 leading-relaxed font-medium">
            Seja um PDV de alta velocidade, um ERP industrial ou uma plataforma inteira: construímos com a dureza da acariquara para ficar no ar por anos.
          </p>
        </div>

        {/* Buttons: WhatsApp & Direct Email */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* WhatsApp Paper Button with Hard Black Shadow (No glow, authentic heavy tactile feel) */}
          <a
            ref={buttonRef}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translate(${btnPos.x}px, ${btnPos.y}px)`,
              transition: 'transform 0.1s steps(2)',
            }}
            className="px-8 py-5 bg-[#0E0C0A] text-[#EFE6D2] hover:bg-[#EFE6D2] hover:text-[#0E0C0A] transition-colors paper-cut shadow-hard-black font-title text-lg md:text-xl font-black uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          {/* Email Direct Link */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-xs sm:text-sm text-[#0E0C0A] hover:underline font-semibold flex items-center gap-2 py-2"
          >
            <Mail className="w-4 h-4" />
            <span>{CONTACT_EMAIL}</span>
          </a>
        </div>
      </div>

      {/* Footer info */}
      <div className="max-w-5xl mx-auto w-full pt-8 border-t-2 border-[#0E0C0A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#0E0C0A]/80 text-center sm:text-left">
        <div>
          <span>Acariquara Tech © 2026 · Manaus, Amazonas, Brasil</span>
        </div>
        <div className="tracking-widest uppercase text-[11px] font-bold">
          Feito pra durar como a acariquara
        </div>
      </div>
    </footer>
  );
};
