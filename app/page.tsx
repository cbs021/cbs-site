"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Leaf,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const stats = [
  { value: "+120", label: "Projetos apoiados" },
  { value: "18", label: "Estados atingidos" },
  { value: "92%", label: "Parceiros recorrentes" },
  { value: "5.6k", label: "Pessoas impactadas" },
];

const pillars = [
  {
    icon: Leaf,
    title: "Sustentabilidade estratégica",
    description:
      "Apoiamo organizações e lideranças a transformar metas ambientais em ações concretas e mensuráveis.",
  },
  {
    icon: Users,
    title: "Educação e mobilização",
    description:
      "Promovemos conhecimento e engajamento para construir comunidades mais conscientes e resilientes.",
  },
  {
    icon: BarChart3,
    title: "Impacto mensurável",
    description:
      "Medimos resultados com indicadores claros para fortalecer decisões e gerar transformação real.",
  },
];

const initiatives = [
  "Consultoria ambiental e ESG",
  "Programas de educação sustentável",
  "Ações de engajamento comunitário",
  "Planejamento de impacto e relatórios",
  "Parcerias institucionais e projetos de inovação",
  "Capacitação de equipes e líderes",
];

const process = [
  { step: "01", title: "Diagnóstico", text: "Entendemos desafios, oportunidades e contexto local antes de propor caminhos." },
  { step: "02", title: "Estratégia", text: "Desenhamos soluções práticas alinhadas à realidade da sua organização ou comunidade." },
  { step: "03", title: "Implementação", text: "Acompanhamos a execução e validamos resultados com indicadores de progresso." },
  { step: "04", title: "Resultado", text: "Geramos aprendizado contínuo e impacto duradouro para todos os envolvidos." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cbs-green-400 to-cbs-green-700 shadow-glow">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">CBS</p>
                <p className="text-xs text-slate-300">Centro Brasileiro de Sustentabilidade</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
              <a href="#sobre" className="transition hover:text-white">Sobre</a>
              <a href="#solucoes" className="transition hover:text-white">Soluções</a>
              <a href="#impacto" className="transition hover:text-white">Impacto</a>
              <a href="#contato" className="transition hover:text-white">Contato</a>
            </nav>

            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cbs-green-100">
              Fale com a gente
            </button>
          </header>

          <div className="grid items-center gap-12 pb-20 pt-20 md:grid-cols-2 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cbs-green-400/30 bg-cbs-green-500/10 px-3 py-1 text-sm text-cbs-green-200">
                <Sparkles className="h-4 w-4" />
                Construindo um futuro com impacto
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Sustentabilidade que conecta <span className="text-cbs-green-400">propósito</span>, ação e resultado.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Somos o Centro Brasileiro de Sustentabilidade e auxiliamos organizações, comunidades e líderes a transformar desafios ambientais em soluções reais, escaláveis e sustentáveis.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-cbs-green-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cbs-green-400"
                >
                  Agendar conversa
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:border-cbs-green-400/40 hover:bg-white/10"
                >
                  Conhecer soluções
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cbs-green-500/25 to-blue-500/10 blur-3xl" />
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-cbs-green-400/20 bg-slate-900/80 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Impacto em ação</p>
                      <h2 className="mt-2 text-3xl font-bold">+26%</h2>
                    </div>
                    <div className="rounded-2xl bg-cbs-green-500/15 p-3 text-cbs-green-300">
                      <LineChart className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {[65, 82, 74, 91, 100].map((height, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="w-10 text-xs text-slate-400">Q{index + 1}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${height}%` }}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-cbs-green-400 to-emerald-300"
                          />
                        </div>
                        <span className="w-10 text-right text-xs text-slate-300">{height}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-5 border-t border-white/10 py-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-3xl font-black text-cbs-green-400">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cbs-green-400">Quem somos</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
              Uma abordagem integrada para transformar desafios em oportunidades de valor.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              O CBS atua no cruzamento entre sustentabilidade, educação e desenvolvimento. Nosso papel é apoiar organizações e comunidades a fortalecerem práticas mais responsáveis, inteligentes e alinhadas aos objetivos de longo prazo.
            </p>
          </div>

          <div className="grid gap-5">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 inline-flex rounded-2xl bg-cbs-green-500/10 p-3 text-cbs-green-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cbs-green-400">Soluções</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Estruturas pensadas para gerar impacto real.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {initiatives.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cbs-green-500/10 text-cbs-green-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-lg font-medium text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="impacto" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cbs-green-400">Como trabalhamos</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Cada etapa com clareza, foco e acompanhamento.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map(({ step, title, text }) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cbs-green-400">{step}</p>
              <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-cbs-green-500/5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cbs-green-500/20 bg-gradient-to-r from-cbs-green-500/10 to-blue-500/10 px-6 py-12 text-center lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cbs-green-300">Vamos conversar?</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Transforme sua agenda de sustentabilidade em ação com impacto.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Fale com nosso time e descubra como aplicar soluções consistentes para sua organização, comunidade ou projeto.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contato@cbs.org.br"
              className="inline-flex items-center gap-2 rounded-full bg-cbs-green-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cbs-green-400"
            >
              contato@cbs.org.br
            </a>
            <a
              href="tel:+551140000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cbs-green-400/40 hover:bg-white/10"
            >
              +55 (11) 4000-0000
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 lg:px-8">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cbs-green-400 to-cbs-green-700">
              <Leaf className="h-4 w-4" />
            </div>
            <span>Centro Brasileiro de Sustentabilidade</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#solucoes" className="hover:text-white">Soluções</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
