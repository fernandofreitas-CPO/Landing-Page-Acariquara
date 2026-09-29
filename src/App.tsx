import React, { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { FilmLeader } from './components/FilmLeader';
import { OpeningSequence } from './components/OpeningSequence';
import { FilmSynopsis } from './components/FilmSynopsis';
import { FilmCastScene, CastSceneData } from './components/FilmCastScene';
import { FilmCreditsStrip } from './components/FilmCreditsStrip';
import { FilmClosingCredits } from './components/FilmClosingCredits';
import { FilmFinalCard } from './components/FilmFinalCard';
import { ReelMenu } from './components/ReelMenu';
import { JaggedPaperCutDivider } from './components/JaggedPaperCutDivider';
import {
  QiMilitarScreen,
  AuroraCoffeeScreen,
  BarberProScreen,
  AlpenTreeScreen,
  AmniCodexScreen,
  EstacionamentoScreen,
  JordaoMetaltechScreen,
  HoralysScreen,
} from './components/systems/Screens';

export default function App() {
  const [showLeader, setShowLeader] = useState<boolean>(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let animId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    };
    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: 0, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  /* ------------------------------------------------------------------------ */
  /* ELENCO: OS 8 FILMES / SISTEMAS EM PAPEL RECORTADO                         */
  /* Cada um possui cor chapada própria, motivo temático recortado e telão.   */
  /* ------------------------------------------------------------------------ */
  const CAST_SCENES: CastSceneData[] = [
    {
      id: 'filme-1',
      number: '01/08',
      name: 'QI MILITAR',
      oneLineDesc:
        'Cursos, banco de questões e simulados para concursos militares como EPCAR, com planos, videoaulas e relatório de desempenho.',
      bgColor: '#E8B83A', // Mostarda
      textColor: '#0E0C0A',
      accentColor: '#FF4A1C',
      badgeBg: '#0E0C0A',
      badgeTextColor: '#EFE6D2',
      screenImg: <QiMilitarScreen />,
      motifType: 'military',
      screenRotation: -1.2,
    },
    {
      id: 'filme-2',
      number: '02/08',
      name: 'AURORA COFFEE',
      oneLineDesc:
        'Site cinematográfico de cafeteria com e-commerce e carrinho, focado em cafés especiais e experiência sensorial.',
      bgColor: '#0E0C0A', // Preto
      textColor: '#EFE6D2',
      accentColor: '#FF4A1C',
      badgeBg: '#FF4A1C',
      badgeTextColor: '#EFE6D2',
      screenImg: <AuroraCoffeeScreen />,
      motifType: 'coffee',
      screenRotation: 1.5,
    },
    {
      id: 'filme-3',
      number: '03/08',
      name: 'BARBER PRO',
      oneLineDesc:
        'Gestão de barbearia com agenda, caixa/PDV rápido, cadastro de clientes e painel administrativo para equipes.',
      bgColor: '#0E0C0A', // Preto
      textColor: '#E8B83A',
      accentColor: '#FF4A1C',
      badgeBg: '#E8B83A',
      badgeTextColor: '#0E0C0A',
      screenImg: <BarberProScreen />,
      motifType: 'barber',
      screenRotation: -0.8,
    },
    {
      id: 'filme-4',
      number: '04/08',
      name: 'ALPENTREE',
      oneLineDesc:
        'Plataforma de genealogia para documentar linhagens, catalogar manuscritos seculares e preservar a memória da família.',
      bgColor: '#EFE6D2', // Creme
      textColor: '#0E0C0A',
      accentColor: '#5B3DF5',
      badgeBg: '#5B3DF5',
      badgeTextColor: '#EFE6D2',
      screenImg: <AlpenTreeScreen />,
      motifType: 'tree',
      screenRotation: 1.1,
    },
    {
      id: 'filme-5',
      number: '05/08',
      name: 'AMNI CODEX',
      oneLineDesc:
        'Gestão jurídica para escritórios, centralizando clientes, processos, prazos, agenda, honorários e CRM conectado.',
      bgColor: '#5B3DF5', // Violeta
      textColor: '#EFE6D2',
      accentColor: '#E8B83A',
      badgeBg: '#0E0C0A',
      badgeTextColor: '#EFE6D2',
      screenImg: <AmniCodexScreen />,
      motifType: 'scale',
      screenRotation: -1.4,
    },
    {
      id: 'filme-6',
      number: '06/08',
      name: 'ESTACIONAMENTO',
      oneLineDesc:
        'PDV de pátio com controle veloz de entrada e saída por placa, mensalistas, faturamento, auditoria e atalhos de teclado.',
      bgColor: '#FF4A1C', // Laranja-brasa
      textColor: '#0E0C0A',
      accentColor: '#EFE6D2',
      badgeBg: '#EFE6D2',
      badgeTextColor: '#0E0C0A',
      screenImg: <EstacionamentoScreen />,
      motifType: 'parking',
      screenRotation: 0.9,
    },
    {
      id: 'filme-7',
      number: '07/08',
      name: 'JORDÃO METALTECH',
      oneLineDesc:
        'PCP industrial para metalúrgica, com ordens de produção, roteiro por setor, kanban, cálculo automático de chapas e tempo de corte a laser.',
      bgColor: '#0E0C0A', // Preto
      textColor: '#E8B83A',
      accentColor: '#FF4A1C',
      badgeBg: '#FF4A1C',
      badgeTextColor: '#EFE6D2',
      screenImg: <JordaoMetaltechScreen />,
      secondaryImg: <JordaoMetaltechScreen />, // Duas telas sobrepostas
      motifType: 'gear',
      screenRotation: -1.0,
    },
    {
      id: 'filme-8',
      number: '08/08',
      name: 'HORALYS',
      oneLineDesc:
        'Gestão de jornada e ponto eletrônico para RH, com importação de planilha biométrica, apuração de faltas, atrasos e folha.',
      bgColor: '#5B3DF5', // Violeta
      textColor: '#EFE6D2',
      accentColor: '#E8B83A',
      badgeBg: '#E8B83A',
      badgeTextColor: '#0E0C0A',
      screenImg: <HoralysScreen />,
      motifType: 'clock',
      screenRotation: 1.3,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0E0C0A] text-[#0E0C0A] selection:bg-[#FF4A1C] selection:text-[#EFE6D2]">
      {/* Static paper noise texture */}
      <div className="fixed inset-0 pointer-events-none paper-grain z-30" />

      {/* 0) LEADER: 35mm Countdown leader */}
      {showLeader && (
        <FilmLeader onComplete={() => setShowLeader(false)} />
      )}

      {/* Floating Reel Menu & Projector Mechanical Sound Toggle */}
      <ReelMenu onNavigate={handleNavigate} />

      {/* Main Projector Film Roll Container */}
      <main className="relative z-10">
        {/* 1 & 2) MONTAGEM DO SÍMBOLO & CARD DE TÍTULO */}
        <OpeningSequence onScrollDown={() => handleNavigate('sinopse')} />

        {/* Corte seco com folha de papel recortada */}
        <JaggedPaperCutDivider
          topColor="#0E0C0A"
          bottomColor="#EFE6D2"
          shadowColor="#0E0C0A"
        />

        {/* 3) SINOPSE (O que fazemos) */}
        <FilmSynopsis />

        {/* Jagged transition to the 8 film scenes */}
        <JaggedPaperCutDivider
          topColor="#EFE6D2"
          bottomColor={CAST_SCENES[0].bgColor}
          shadowColor="#0E0C0A"
        />

        {/* 4) ELENCO: OS 8 FILMES / SISTEMAS */}
        <div>
          {CAST_SCENES.map((scene, idx) => {
            const nextScene = CAST_SCENES[idx + 1];
            return (
              <React.Fragment key={scene.id}>
                <FilmCastScene scene={scene} index={idx} />
                {nextScene && (
                  <JaggedPaperCutDivider
                    topColor={scene.bgColor}
                    bottomColor={nextScene.bgColor}
                    shadowColor="#0E0C0A"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Jagged transition to numbers strip */}
        <JaggedPaperCutDivider
          topColor={CAST_SCENES[CAST_SCENES.length - 1].bgColor}
          bottomColor="#0E0C0A"
          shadowColor="#0E0C0A"
        />

        {/* 5) NÚMEROS / FAIXA DE CRÉDITOS */}
        <FilmCreditsStrip />

        {/* 6) PROCESSO = CRÉDITOS FINAIS */}
        <FilmClosingCredits />

        {/* Jagged transition to final card */}
        <JaggedPaperCutDivider
          topColor="#0E0C0A"
          bottomColor="#FF4A1C"
          shadowColor="#0E0C0A"
        />

        {/* 7) FINAL: TELA LARANJA-BRASA (FIM? -> COMEÇO.) */}
        <FilmFinalCard />
      </main>
    </div>
  );
}
