import React from 'react';
import { 
  Play, CheckCircle2, Clock, Calendar, Search, 
  Settings, User, Bell, ChevronRight, FileText, 
  ArrowUpRight, AlertCircle, Printer, Download,
  Layers, HardDrive, Cpu, Scissors, Check, Database
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 01. QI MILITAR SCREEN                                                      */
/* -------------------------------------------------------------------------- */
export const QiMilitarScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#030d0a] text-[#d6ede4] font-sans text-[11px] overflow-hidden flex flex-col select-none border border-emerald-950/60 shadow-2xl">
      {/* Top Bar */}
      <div className="h-10 bg-[#061713] border-b border-emerald-900/40 px-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#00E599] flex items-center justify-center font-bold text-black text-xs">
            M
          </div>
          <span className="font-bold tracking-wider text-xs text-[#00E599]">QI<span className="text-white text-[10px] ml-0.5">MILITAR</span></span>
          <div className="hidden sm:flex items-center gap-2 bg-[#020b08] px-2 py-1 rounded border border-emerald-950 text-[#7a9e91] text-[10px]">
            <Search className="w-3 h-3 text-[#00E599]" />
            <span>pesquisar missão...</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-[#8ab8a7]">
          <span className="text-white font-medium">DASHBOARD</span>
          <span>CURSOS</span>
          <span>COMUNIDADE</span>
          <Bell className="w-3 h-3 text-amber-400" />
          <div className="flex items-center gap-1.5 pl-2 border-l border-emerald-900/50">
            <span className="text-white">Fernando Freitas</span>
            <span className="w-4 h-4 rounded bg-[#00E599] text-black font-bold text-[9px] flex items-center justify-center">FF</span>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-36 bg-[#04120e] border-r border-emerald-900/30 p-2.5 space-y-3 hidden sm:block">
          <div className="space-y-1">
            <div className="bg-[#00E599]/15 text-[#00E599] px-2 py-1 rounded border border-[#00E599]/30 text-[9px] font-semibold">
              BANCO DE QUESTOES
            </div>
            <div className="text-[#8ab8a7] px-2 py-1 text-[9px] hover:text-white">
              LISTAS E SIMULADOS
            </div>
            <div className="text-[#8ab8a7] px-2 py-1 text-[9px] hover:text-white">
              PLANOS POR INSTITUICAO
            </div>
          </div>
          <div className="pt-2 border-t border-emerald-900/30">
            <div className="text-[8px] uppercase tracking-wider text-emerald-500 font-semibold mb-1">DISCIPLINAS</div>
            <div className="space-y-0.5 text-[9px] text-[#6b8c80]">
              <div>Matemática</div>
              <div>Física</div>
              <div>Língua Portuguesa</div>
              <div>Redação</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-radial from-[#041611] to-[#020907]">
          <div className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-2">
              <span className="text-[#8ab8a7]">INSTITUICAO</span>
              <span className="bg-[#082019] px-2 py-0.5 rounded border border-emerald-800/40 text-white font-medium">EPCAr ▼</span>
            </div>
            <span className="text-[#59786d] text-[9px]">Todas as instituicoes disponíveis</span>
          </div>

          {/* 2 Plan Cards */}
          <div className="grid grid-cols-2 gap-3">
            {/* EPCAR PRO */}
            <div className="bg-[#061813]/90 border border-emerald-700/40 rounded p-3 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-bold text-[10px] tracking-wide">■ EPCAR PRO</span>
                <span className="text-[8px] text-[#6e998a]">Validade: 30 dias</span>
              </div>
              <div className="text-[#00E599] font-bold text-sm">
                R$ 89,90<span className="text-[9px] text-[#6e998a] font-normal">/mes</span>
              </div>
              <div className="text-[9px] text-white font-medium border-t border-emerald-900/40 pt-1.5">
                PREPARACAO AVANCADA EPCAR
              </div>
              <p className="text-[8px] text-[#7da395] leading-tight">
                Curso avancado focado em aprovacao com revisao intensiva. Total de aulas: 24. Player: SmartPlayer (ready).
              </p>
              <div className="bg-[#030e0b] p-1.5 rounded space-y-1 text-[8px] text-[#8db3a5]">
                <div className="flex justify-between"><span>Modulo 1 - Revisao</span><span>42 min</span></div>
                <div className="flex justify-between"><span>Modulo 2 - Questoes</span><span>37 min</span></div>
              </div>
              <div className="pt-1 text-center">
                <button className="w-full bg-[#00E599]/20 hover:bg-[#00E599]/30 text-[#00E599] border border-[#00E599]/40 py-1 rounded text-[9px] font-semibold">
                  Escolher plano
                </button>
              </div>
            </div>

            {/* EPCAR START */}
            <div className="bg-[#061813]/90 border border-emerald-700/40 rounded p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-bold text-[10px] tracking-wide">■ EPCAR START</span>
                <span className="text-[8px] text-[#6e998a]">Validade: 30 dias</span>
              </div>
              <div className="text-[#00E599] font-bold text-sm">
                R$ 52,90<span className="text-[9px] text-[#6e998a] font-normal">/mes</span>
              </div>
              <div className="text-[9px] text-white font-medium border-t border-emerald-900/40 pt-1.5">
                PREPARACAO BASE EPCAR
              </div>
              <p className="text-[8px] text-[#7da395] leading-tight">
                Curso completo com modulos progressivos e acompanhamento. Total de aulas: 12. Player: SmartPlayer.
              </p>
              <div className="bg-[#030e0b] p-1.5 rounded space-y-1 text-[8px] text-[#8db3a5]">
                <div className="flex justify-between"><span>Modulo 1 - Base</span><span>42 min</span></div>
                <div className="flex justify-between"><span>Modulo 2 - Treino</span><span>37 min</span></div>
              </div>
              <div className="pt-1 text-center">
                <button className="w-full bg-[#00E599]/20 hover:bg-[#00E599]/30 text-[#00E599] border border-[#00E599]/40 py-1 rounded text-[9px] font-semibold">
                  Escolher plano
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 02. AURORA COFFEE SCREEN                                                   */
/* -------------------------------------------------------------------------- */
export const AuroraCoffeeScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#040404] text-[#E0D8D0] font-sans overflow-hidden flex flex-col justify-between p-6 relative select-none">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-[0.25em] font-medium border-b border-white/10 pb-3">
        <span className="text-white font-bold tracking-[0.35em]">AURORA</span>
        <div className="flex items-center gap-6 text-[10px] text-white/70">
          <span>CARRINHO 00</span>
          <span>MENU —</span>
        </div>
      </div>

      {/* Atmospheric Glass Visual with Layered Cold Brew */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none">
        <div className="relative w-44 h-72 rounded-b-3xl border-2 border-white/15 bg-gradient-to-t from-[#1a0e08] via-[#331c10] to-transparent p-2 shadow-2xl flex flex-col justify-end">
          {/* Foam & Cacao */}
          <div className="absolute top-8 left-1 right-1 h-12 bg-[#efe7da] rounded-t-lg shadow-inner flex items-center justify-center">
            <div className="w-full h-1 bg-amber-900/30 blur-[1px]" />
          </div>
          {/* Coffee ice cubes */}
          <div className="space-y-1 mb-2">
            <div className="w-12 h-8 bg-amber-900/60 rounded border border-amber-800/40 ml-4 rotate-12" />
            <div className="w-14 h-9 bg-amber-950/70 rounded border border-amber-800/40 ml-8 -rotate-6" />
          </div>
          {/* Cardboard straw with clip */}
          <div className="absolute -top-12 right-6 w-3 h-48 bg-[#d1be9c] rounded-full rotate-6 shadow-md border-r border-[#a69273]">
            <div className="w-4 h-3 bg-[#a8874d] absolute top-14 -left-0.5 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Text typography */}
      <div className="relative z-10 max-w-sm mt-12 space-y-2">
        <div className="text-[10px] font-mono tracking-[0.3em] text-[#C2A378] uppercase">
          BEAT A — BLEND AURORA
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">
          AURORA COFFEE.
        </h2>
        <p className="text-xs text-white/75 font-normal leading-relaxed max-w-xs">
          Blend da casa com cacau cremoso, caramelo tostado e final macio para abrir a manhã com presença.
        </p>
      </div>

      {/* Bottom prompt */}
      <div className="relative z-10 text-center font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase pt-2">
        DESLIZE PARA EXPLORAR
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 03. BARBER PRO SCREEN                                                      */
/* -------------------------------------------------------------------------- */
export const BarberProScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080808] text-[#e0ded8] font-sans overflow-hidden flex select-none border border-amber-900/30">
      {/* Sidebar */}
      <div className="w-32 bg-[#050505] border-r border-amber-500/15 p-3 flex flex-col justify-between text-[10px]">
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold tracking-wider text-[11px]">
            <Scissors className="w-3.5 h-3.5" />
            <span>BARBER PRO</span>
          </div>

          <div className="space-y-1">
            <div className="bg-amber-500 text-black font-semibold px-2 py-1.5 rounded flex items-center gap-1.5 text-[9px]">
              <span>Início</span>
            </div>
            <div className="text-[#888] px-2 py-1 hover:text-white">Agenda</div>
            <div className="text-[#888] px-2 py-1 hover:text-white">$ Caixa / Vendas</div>
            <div className="text-[#888] px-2 py-1 hover:text-white">Clientes</div>
            <div className="text-[#888] px-2 py-1 hover:text-white">Gestão ADM</div>
          </div>
        </div>

        <div className="space-y-1 text-[#666] text-[9px] pt-4 border-t border-white/5">
          <div className="text-rose-400/80">Fechar Caixa</div>
          <div>Configurações</div>
          <div>Sair</div>
        </div>
      </div>

      {/* Main View */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4 bg-radial from-[#1a1508]/80 to-[#080808]">
        <div className="inline-block border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-[9px] tracking-widest px-2.5 py-0.5 rounded uppercase">
          SISTEMA DE GESTÃO PROFISSIONAL
        </div>

        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#DFBA73] to-[#8F6C2C]">
          BARBER PRO
        </h3>

        <p className="text-xs text-[#999] max-w-sm leading-relaxed">
          Controle sua barbearia com a precisão de uma navalha. Agendamentos inteligentes e financeiro em tempo real para todo o time.
        </p>

        {/* 4 Big Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 w-full max-w-md">
          <div className="bg-[#E5B54F] text-black font-bold py-2 px-2 rounded text-[10px] flex items-center justify-center gap-1 shadow-md">
            <Calendar className="w-3 h-3" />
            <span>ABRIR AGENDA</span>
          </div>
          <div className="bg-[#141414] border border-white/10 hover:border-amber-500/40 text-white font-medium py-2 px-2 rounded text-[10px] flex items-center justify-center gap-1">
            <span>$ CAIXA / PDV</span>
          </div>
          <div className="bg-[#141414] border border-white/10 hover:border-amber-500/40 text-white font-medium py-2 px-2 rounded text-[10px] flex items-center justify-center gap-1">
            <span>DASHBOARD</span>
          </div>
          <div className="bg-[#240e0e] border border-rose-900/50 text-rose-300 font-medium py-2 px-2 rounded text-[10px] flex items-center justify-center gap-1">
            <span>FECHAR DIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 04. ALPENTREE SCREEN                                                       */
/* -------------------------------------------------------------------------- */
export const AlpenTreeScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#f6f2e9] text-[#2c2621] font-sans overflow-hidden flex flex-col justify-between p-5 relative select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#e2d8c7] text-xs">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌳</span>
          <span className="font-serif font-bold text-base text-[#1b261d]">AlpenTree</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#6d6459]">
          <span>Recursos</span>
          <span>Como funciona</span>
          <span>Privacidade</span>
          <span>Entrar</span>
          <button className="bg-[#1b2b20] text-white px-2.5 py-1 rounded text-[10px] font-medium">
            Criar minha árvore
          </button>
        </div>
      </div>

      {/* Hero & Interactive Lineage Tree */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-auto py-2">
        <div className="space-y-3">
          <div className="text-[10px] font-medium tracking-widest text-[#8a7a68] uppercase">
            ✦ GENEALOGIA FEITA PARA DURAR GERAÇÕES
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1b261d] font-normal leading-tight">
            Sua história não começa em você.
          </h2>
          <p className="text-xs text-[#5c544a] leading-relaxed">
            ✦ Descubra, organize e preserve a trajetória da sua família com rigor histórico e salvaguarda permanente.
          </p>
          <button className="bg-[#1b2b20] text-white px-3.5 py-1.5 rounded text-[11px] font-medium flex items-center gap-1">
            <span>Começar minha árvore</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Vintage Manuscript & Pedigree Board */}
        <div className="relative bg-[#ebe3d3] border border-[#d6cbb6] p-3 rounded shadow-inner">
          <div className="text-[10px] font-semibold text-[#1b261d] mb-2 flex items-center justify-between">
            <span>LINHAGEM DE JOAQUIM FERREIRA LIMA</span>
            <span className="text-[8px] text-[#7a6e5f]">13 pessoas</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-[9px]">
            <div className="bg-white/80 p-1.5 rounded border border-[#d6cbb6]">
              <div className="font-semibold text-[#1b261d]">Joaquim Ferreira Lima</div>
              <div className="text-[8px] text-[#8c8273]">Datas não comprovadas</div>
            </div>
            <div className="bg-white/80 p-1.5 rounded border border-[#d6cbb6]">
              <div className="font-semibold text-[#1b261d]">Rita de Cássia Gomes</div>
              <div className="text-[8px] text-[#8c8273]">Datas não comprovadas</div>
            </div>
            <div className="bg-white/80 p-1.5 rounded border border-[#d6cbb6]">
              <div className="font-semibold text-[#1b261d]">Maria das Dores Ferreira</div>
              <div className="text-[8px] text-[#8c8273]">1884–Vivo</div>
            </div>
            <div className="bg-white/80 p-1.5 rounded border border-[#d6cbb6]">
              <div className="font-semibold text-[#1b261d]">Antônio José da Costa</div>
              <div className="text-[8px] text-[#8c8273]">Datas não comprovadas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 05. AMNI CODEX SCREEN                                                      */
/* -------------------------------------------------------------------------- */
export const AmniCodexScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#fbfcfd] text-[#1e293b] font-sans overflow-hidden flex flex-col justify-between p-5 select-none relative border border-slate-200">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0f172a] text-cyan-400 font-bold text-[10px] flex items-center justify-center">
            AC
          </div>
          <div>
            <span className="font-bold tracking-wider text-xs text-[#0f172a]">AMNI CODEX</span>
            <span className="text-[8px] block text-slate-500 uppercase tracking-widest">Inteligência e Gestão Jurídica</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-600">
          <span>EFICIÊNCIA</span>
          <span>MÓDULOS</span>
          <span>RECURSOS</span>
          <span>PLANOS</span>
          <button className="bg-[#0f172a] text-white px-2.5 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
            <span>PLATAFORMA</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Main Content & Interactive Node Network */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-auto">
        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-cyan-600 uppercase font-semibold">
            — GESTÃO JURÍDICA CONECTADA
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-slate-900 font-normal leading-tight">
            O fluxo jurídico, codificado em inteligência.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Centralize clientes, processos, prazos, documentos e finanças em uma plataforma conectada para gerir o escritório com mais clareza.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button className="bg-[#0f172a] text-white px-3 py-1.5 rounded text-[10px] font-semibold flex items-center gap-1">
              <span>CONHECER A PLATAFORMA</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <button className="border border-slate-300 text-slate-700 px-3 py-1.5 rounded text-[10px] font-medium">
              EXPLORAR OS MÓDULOS ↓
            </button>
          </div>
        </div>

        {/* Neural Circuit Diagram */}
        <div className="relative bg-slate-50/80 border border-slate-200 p-4 rounded-lg flex items-center justify-center min-h-[160px]">
          <div className="absolute w-12 h-12 rounded-xl bg-[#0f172a] text-cyan-400 flex items-center justify-center shadow-lg border border-cyan-500/30">
            <Database className="w-6 h-6 text-cyan-400" />
          </div>

          <div className="w-full grid grid-cols-3 gap-2 text-[8px] font-medium text-slate-700 text-center">
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">01 Clientes</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">02 Processos</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">03 Agenda</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">07 Documentos</div>
            <div className="opacity-0">Central</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">04 CRM</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">08 Gestão</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">06 Previsão</div>
            <div className="bg-white p-1 rounded shadow-sm border border-slate-200">05 Financeiro</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 06. ESTACIONAMENTO SCREEN (PDV PÁTIO)                                       */
/* -------------------------------------------------------------------------- */
export const EstacionamentoScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0a1128] text-white font-mono text-[10px] overflow-hidden flex flex-col select-none border border-blue-900">
      {/* Top Status Bar */}
      <div className="h-10 bg-[#060b1c] border-b border-blue-900/60 px-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white text-black font-bold px-1.5 py-0.5 rounded text-[9px]">
            LOGO
          </div>
          <span className="font-semibold text-xs tracking-wider text-blue-200">ACARIQUARA TECH</span>
          <span className="text-amber-300 font-bold text-xs ml-4">21:47:00</span>
          <span className="text-slate-400 text-[9px]">14/05/2026</span>
          <span className="bg-amber-400 text-black px-1.5 py-0.2 rounded font-bold text-[9px]">ADMIN : admin</span>
        </div>
        <div className="flex items-center gap-1 text-[9px]">
          <button className="bg-amber-500 text-black px-2 py-0.5 rounded font-bold">AUDITORIA (F3)</button>
          <button className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold">DASHBOARD (F4)</button>
          <button className="bg-rose-600 text-white px-2 py-0.5 rounded font-bold">SAIR (LOGOUT)</button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left PDV Hotkeys & Input */}
        <div className="w-44 bg-[#0a1435] border-r border-blue-900/50 p-2 space-y-1.5 overflow-y-auto">
          <div className="bg-blue-600/30 p-1.5 rounded border border-blue-500">
            <div className="text-[9px] font-bold text-blue-200 uppercase">DIGITE PLACA OU ID:</div>
            <div className="h-7 bg-white text-black font-bold text-sm flex items-center px-2 rounded mt-1">
              ABC-4K20
            </div>
            <button className="w-full mt-1 bg-black text-white font-bold py-1 rounded text-[10px] tracking-wider">
              CONFIRMAR (ENTER)
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1 text-[8px] font-bold">
            <button className="bg-slate-200 text-black p-1 rounded">CONVÊNIO (F5)</button>
            <button className="bg-white text-rose-600 border border-rose-600 p-1 rounded">CANCELAR (F6)</button>
            <button className="bg-amber-500 text-black p-1 rounded">MENSALISTAS (F7)</button>
            <button className="bg-blue-700 text-white p-1 rounded">IMPRIMIR (F11)</button>
            <button className="bg-cyan-500 text-black p-1 rounded">PREÇOS (F8)</button>
            <button className="bg-slate-700 text-white p-1 rounded">NOTAS (F9)</button>
            <button className="bg-slate-900 text-white p-1 rounded">FATURA (F10)</button>
            <button className="bg-indigo-600 text-white p-1 rounded">EMPRESAS</button>
            <button className="bg-orange-600 text-white p-1 rounded col-span-2 py-1">PERMISSÕES OPERADOR</button>
            <button className="bg-rose-700 text-white p-1 rounded col-span-2 py-1">FECHAR CAIXA (F2)</button>
          </div>
        </div>

        {/* Right Yard Summary Table */}
        <div className="flex-1 flex flex-col bg-white text-slate-800">
          {/* 3 Metric Headers */}
          <div className="grid grid-cols-3 text-center font-bold text-xs py-1.5 border-b border-slate-200">
            <div className="text-blue-700 border-r border-slate-200">NO PÁTIO: 18</div>
            <div className="text-emerald-700 border-r border-slate-200">SAÍDAS HOJE: 64</div>
            <div className="text-amber-700">PAGANTES HOJE: 58</div>
          </div>

          <div className="flex-1 p-2">
            <table className="w-full text-left text-[9px]">
              <thead>
                <tr className="border-b border-slate-300 text-slate-500">
                  <th className="py-1">ID</th>
                  <th>PLACA</th>
                  <th>ENTRADA</th>
                  <th>TEMPO</th>
                  <th>TIPO</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-1 font-bold">#1042</td>
                  <td>PHA-9821</td>
                  <td>20:14</td>
                  <td>01h 33m</td>
                  <td>Rotativo</td>
                  <td className="font-bold text-emerald-600">R$ 25,00</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold">#1041</td>
                  <td>NOX-3312</td>
                  <td>20:45</td>
                  <td>01h 02m</td>
                  <td>Rotativo</td>
                  <td className="font-bold text-emerald-600">R$ 15,00</td>
                </tr>
                <tr>
                  <td className="py-1 font-bold">#1040</td>
                  <td>JWZ-4019</td>
                  <td>21:10</td>
                  <td>00h 37m</td>
                  <td>Mensalista</td>
                  <td className="font-bold text-blue-600">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 07. JORDÃO METALTECH SCREEN (PCP INDUSTRIAL)                               */
/* -------------------------------------------------------------------------- */
export const JordaoMetaltechScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#051119] text-[#CFE4EE] font-sans text-[10px] overflow-hidden flex flex-col select-none border border-cyan-900/60 shadow-2xl relative">
      {/* Top Banner Ribbon */}
      <div className="bg-[#020b10] border-b border-cyan-950 px-3 py-1 flex items-center justify-between text-[8px] font-mono text-cyan-300/80">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-bold">CÉLULA CNC ATIVA — TRUMPF & BYSTRONIC</span>
          <span>|</span>
          <span>TURNO 1 (07:00 - 16:48)</span>
          <span>|</span>
          <span>SISTEMA DE PCP INDUSTRIAL</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400">● Banco de Dados: Sincronizado</span>
          <span>28 itens no plano</span>
          <span>29 de setembro de 2026</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="p-3 bg-[#081824] border-b border-cyan-900/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-cyan-600 text-black font-extrabold flex items-center justify-center rounded text-xs">
            JM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">Plano de Produção & Estoque</span>
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-1 py-0.2 rounded text-[8px] font-mono">PCP LASER</span>
            </div>
            <div className="text-[8px] text-cyan-300/60">Cálculo automático de demanda, rendimento por chapa e ordens fabris</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[9px] font-medium">
          <span className="bg-amber-500 text-black px-2 py-0.5 rounded font-bold">Planilha</span>
          <span className="bg-cyan-950 border border-cyan-800 text-cyan-200 px-2 py-0.5 rounded">Kanban</span>
          <span className="bg-cyan-950 border border-cyan-800 text-cyan-200 px-2 py-0.5 rounded">Chapas</span>
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold">Calculadora de Chapas</span>
          <span className="bg-amber-400 text-black px-2 py-0.5 rounded font-bold">+ Novo Item / Cliente</span>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-4 gap-2 p-2.5 bg-[#030e16]">
        <div className="bg-[#092030] border border-cyan-700/40 p-2 rounded">
          <div className="text-[8px] text-cyan-400 font-mono">PEÇAS PLANEJADAS</div>
          <div className="text-lg font-bold text-amber-300 leading-none my-1">87.502 <span className="text-[9px] font-normal text-slate-300">un</span></div>
          <div className="text-[8px] text-emerald-400">Estoque: 6.955 un</div>
        </div>

        <div className="bg-[#092030] border border-cyan-700/40 p-2 rounded">
          <div className="text-[8px] text-cyan-400 font-mono">CHAPAS NECESSÁRIAS</div>
          <div className="text-lg font-bold text-cyan-300 leading-none my-1">168 <span className="text-[9px] font-normal text-slate-300">chapas</span></div>
          <div className="text-[8px] text-rose-400 font-medium">▲ Comprar: 107 un</div>
        </div>

        <div className="bg-[#092030] border border-cyan-700/40 p-2 rounded">
          <div className="text-[8px] text-cyan-400 font-mono">TEMPO TOTAL LASER</div>
          <div className="text-lg font-bold text-amber-300 leading-none my-1">~258 <span className="text-[9px] font-normal text-slate-300">horas</span></div>
          <div className="text-[8px] text-slate-300">Equivale a: ~32.2 dias (8h)</div>
        </div>

        <div className="bg-[#092030] border border-cyan-700/40 p-2 rounded">
          <div className="text-[8px] text-cyan-400 font-mono">FILA OPERACIONAL</div>
          <div className="text-lg font-bold text-emerald-400 leading-none my-1">0 <span className="text-[9px] font-normal text-slate-300">em corte</span></div>
          <div className="text-[8px] text-emerald-400">✓ 100% OK</div>
        </div>
      </div>

      {/* Production Queue Table Layer */}
      <div className="flex-1 p-2.5 overflow-hidden flex flex-col bg-[#051119]">
        <div className="flex items-center justify-between pb-1.5 border-b border-cyan-900/40">
          <span className="font-bold text-xs text-amber-300">● FILA DE PRODUÇÃO — PENDENTE</span>
          <span className="text-[8px] text-cyan-300/60 font-mono">Aba PENDENTE · 28 itens cadastrados</span>
        </div>

        <table className="w-full text-left text-[8px] mt-1 text-slate-200">
          <thead className="text-cyan-400/80 border-b border-cyan-900/30">
            <tr>
              <th className="py-1">CÓDIGO</th>
              <th>CLIENTE</th>
              <th>PREVISÃO</th>
              <th>DEMANDA</th>
              <th>ESTOQUE</th>
              <th>PROD. PLAN.</th>
              <th>CHAPA / MAT.</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-950 font-mono">
            <tr>
              <td className="py-1 text-cyan-200 font-bold">01.072 Travamento Lateral</td>
              <td className="text-amber-200">POLIAMAZON / BRUDDEN</td>
              <td><span className="bg-emerald-800/60 text-emerald-200 px-1 py-0.2 rounded">SET</span></td>
              <td>800</td>
              <td className="text-emerald-400">384</td>
              <td className="font-bold text-amber-300">450</td>
              <td>#3mm</td>
              <td><span className="text-emerald-400">Concluído</span></td>
            </tr>
            <tr>
              <td className="py-1 text-cyan-200 font-bold">01.075 Base inversor freq.</td>
              <td className="text-amber-200">POLIAMAZON / BRUDDEN</td>
              <td><span className="bg-emerald-800/60 text-emerald-200 px-1 py-0.2 rounded">SET</span></td>
              <td>400</td>
              <td className="text-emerald-400">51</td>
              <td className="font-bold text-amber-300">400</td>
              <td>#1,5mm</td>
              <td><span className="text-emerald-400">Concluído</span></td>
            </tr>
            <tr>
              <td className="py-1 text-cyan-200 font-bold">01.084 Suporte Placa Licença</td>
              <td className="text-cyan-300">Poliamazon / Jabil</td>
              <td><span className="bg-emerald-800/60 text-emerald-200 px-1 py-0.2 rounded">SET</span></td>
              <td>2000</td>
              <td className="text-emerald-400">83</td>
              <td className="font-bold text-amber-300">2.120</td>
              <td>#0.9 mm</td>
              <td><span className="text-emerald-400">Concluído</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 08. HORALYS SCREEN (GESTÃO DE JORNADA & PONTO)                             */
/* -------------------------------------------------------------------------- */
export const HoralysScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#f8faf9] text-slate-800 font-sans text-[10px] overflow-hidden flex flex-col select-none border border-emerald-900/20 shadow-xl">
      {/* Top Header */}
      <div className="h-11 bg-white border-b border-slate-200 px-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#103b2b] text-white flex items-center justify-center font-bold text-xs">
            H
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs text-[#103b2b]">Horalys</span>
              <span className="bg-slate-100 text-slate-600 px-1 py-0.2 rounded text-[8px] font-semibold">RH & GESTÃO</span>
            </div>
            <div className="text-[8px] text-slate-500">Sistema de Gestão & Tratamento de Ponto Eletrônico</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-slate-100 px-2 py-1 rounded text-[9px] text-slate-700">Empresa Principal ▼</span>
          <button className="bg-[#1b4332] text-white px-2.5 py-1 rounded text-[9px] font-semibold flex items-center gap-1 shadow-sm">
            <span>Importar Ponto</span>
          </button>
          <div className="text-slate-600 text-[9px] pl-2 border-l border-slate-200">
            Administrador
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-32 bg-[#fafbfa] border-r border-slate-200 p-2 space-y-1 text-[9px] text-slate-600 hidden sm:block">
          <div className="bg-[#1b4332] text-white font-medium px-2 py-1 rounded">
            Visão Geral (RH)
          </div>
          <div className="px-2 py-1 hover:bg-slate-100 rounded">Fila de Pendências</div>
          <div className="px-2 py-1 hover:bg-slate-100 rounded">Importar Ponto</div>
          <div className="px-2 py-1 hover:bg-slate-100 rounded">Espelho de Ponto</div>
          <div className="px-2 py-1 hover:bg-slate-100 rounded">Financeiro / Folha</div>
          <div className="px-2 py-1 hover:bg-slate-100 rounded">Funcionários</div>
          <div className="px-2 py-1 hover:bg-slate-100 rounded">Aprovação de Extras</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-xs text-slate-900">Painel de Apuração & Exceções (RH)</span>
              <span className="ml-2 bg-emerald-100 text-emerald-800 text-[8px] font-semibold px-1 py-0.2 rounded">VIGÊNCIA ATIVA</span>
            </div>
            <span className="text-[9px] text-slate-500">Departamento: Todos os Setores ▼</span>
          </div>

          {/* 5 KPI Metric Cards */}
          <div className="grid grid-cols-5 gap-1.5">
            <div className="bg-white border border-rose-200 p-2 rounded shadow-sm">
              <div className="text-[8px] text-slate-500">FALTAS NÃO ABONADAS</div>
              <div className="text-sm font-bold text-rose-700 my-0.5">0 <span className="text-[8px] font-normal">dias</span></div>
              <div className="text-[8px] text-slate-400">Dias sem registro</div>
            </div>

            <div className="bg-white border border-amber-200 p-2 rounded shadow-sm">
              <div className="text-[8px] text-slate-500">ATRASOS & SAÍDAS</div>
              <div className="text-sm font-bold text-amber-700 my-0.5">00h 00m</div>
              <div className="text-[8px] text-slate-400">Tol. 5m</div>
            </div>

            <div className="bg-white border border-emerald-200 p-2 rounded shadow-sm">
              <div className="text-[8px] text-slate-500">EXTRAS APROVADAS</div>
              <div className="text-sm font-bold text-emerald-700 my-0.5">+00h 00m</div>
              <div className="text-[8px] text-slate-400">Aprovadas pelo RH</div>
            </div>

            <div className="bg-white border border-slate-200 p-2 rounded shadow-sm">
              <div className="text-[8px] text-slate-500">BATIDAS ÍMPARES</div>
              <div className="text-sm font-bold text-slate-700 my-0.5">0 <span className="text-[8px] font-normal">ocor.</span></div>
              <div className="text-[8px] text-slate-400">Incompletas</div>
            </div>

            <div className="bg-white border border-slate-200 p-2 rounded shadow-sm">
              <div className="text-[8px] text-slate-500">TOTAL TRABALHADO</div>
              <div className="text-sm font-bold text-slate-700 my-0.5">00h 00m</div>
              <div className="text-[8px] text-slate-400">0 colaboradores</div>
            </div>
          </div>

          {/* Import Biometric Sheet Callout */}
          <div className="bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between shadow-sm">
            <div className="space-y-0.5">
              <div className="font-semibold text-xs text-slate-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>IMPORTAR NOVA PLANILHA BIOMÉTRICA</span>
              </div>
              <p className="text-[9px] text-slate-500 max-w-sm">
                Ao importar um novo arquivo Excel, o sistema processa automaticamente a apuração diária e aplica a jornada contratual em cada data.
              </p>
            </div>
            <button className="bg-[#1b4332] text-white px-3 py-1.5 rounded text-[10px] font-medium shadow">
              Fazer Upload de Planilha Biométrica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
