import { notFound } from "next/navigation";

export const dictionaries = {
  pt: {
    siteTitle: "Jéssica Bandeira — Desenvolvimento de software",
    siteDescription:
      "Jéssica Bandeira — desenvolvedora de software estudando arquitetura de software e inteligência artificial aplicada ao trabalho.",
    header: {
      homeLabel: "Jéssica Bandeira — início",
      tagline: "DESENVOLVEDORA DE SOFTWARE",
      projects: "Projetos",
      contact: "Contato",
      availability: "Disponível para conversar",
      navLabel: "Navegação principal",
    },
    footer: { madeWith: "Feito com carinho por Jessica.", country: "Brasil" },
    home: {
      heroLabel: "Desenvolvedora de software",
      titleStart: "Construindo produtos digitais com",
      titleAccent: "intenção.",
      description:
        "Sou Jéssica Bandeira. Desenvolvo interfaces e estou aprofundando meus estudos em arquitetura de software e no uso de inteligência artificial para trabalhar melhor, com mais clareza e qualidade.",
      projectsCta: "Explorar projetos",
      contactCta: "Vamos conversar",
      metaLeft: "01 / SOBRE MEU TRABALHO",
      metaRight: "DESIGN · CÓDIGO · APRENDIZADO",
      artLabel: "Composição abstrata representando sistemas conectados",
      artTags: ["produto", "sistemas", "inteligência"],
      introLabel: "O que me move",
      introStart:
        "Tecnologia boa não é só uma interface bonita. É uma experiência que resolve problemas e uma estrutura que pode",
      introAccent: "crescer com confiança.",
      directionEyebrow: "02 / DIREÇÃO",
      directionTitle: "Aprender para",
      directionAccent: "construir melhor.",
      directionDescription:
        "Meu próximo passo é ampliar a visão do frontend para o sistema inteiro: decisões, limites e colaboração.",
      focus: [
        {
          title: "Arquitetura de software",
          description:
            "Estudando como organizar sistemas, definir responsabilidades e tomar decisões que tornam o software mais simples de manter e evoluir.",
          foot: "ESTUDO CONTÍNUO",
        },
        {
          title: "IA como parceira de trabalho",
          description:
            "Explorando como aplicar IA para acelerar pesquisa, prototipação e tarefas repetitivas — mantendo contexto, revisão e julgamento humanos.",
          foot: "IA APLICADA",
        },
        {
          title: "Experiências frontend",
          description:
            "Transformando necessidades em interfaces acessíveis, responsivas e cuidadosas, com atenção à performance e aos detalhes.",
          foot: "FOCO EM PRODUTO",
        },
      ],
      workEyebrow: "03 / SELEÇÃO",
      workTitle: "Projetos em",
      workAccent: "que coloquei a mão.",
      allProjects: "Ver todos os projetos",
      closingEyebrow: "04 / PRÓXIMO PASSO",
      closingTitle: "Boas ideias começam",
      closingAccent: "com uma conversa.",
      closingCta: "Entre em contato",
      screenshotAlt: "Captura de tela do projeto",
      missingImage: "Imagem indisponível para",
    },
    projects: {
      pageTitle: "Projetos",
      pageDescription:
        "Conheça os projetos digitais desenvolvidos por Jéssica Bandeira.",
      title: "Projetos com",
      titleAccent: "propósito e prática.",
      intro:
        "Uma seleção de experiências que construí para resolver problemas reais, aprender novas ferramentas e transformar ideias em produtos digitais.",
      frontendRepo: "Repositório frontend",
      backendRepo: "Repositório backend",
      liveProject: "Projeto online",
      ctaQuestion: "Tem um desafio interessante?",
      cta: "Vamos conversar",
      screenshotAlt: "Captura de tela do projeto",
      missingImage: "Imagem indisponível para",
    },
    contact: {
      title: "Vamos fazer",
      titleAccent: "bem pensado.",
      intro:
        "Estou aberta a conversas sobre oportunidades, projetos e ideias que merecem sair do papel. Me encontre por aqui:",
      configure: "Aguardando configuração",
      artTop: "IDEIAS EM",
      artBottom: "MOVIMENTO",
      pageTitle: "Contato",
      pageDescription:
        "Entre em contato com Jéssica Bandeira para conversar sobre oportunidades, projetos e ideias.",
    },
  },
  en: {
    siteTitle: "Jessica Bandeira — Software Developer",
    siteDescription:
      "Jessica Bandeira — software developer studying software architecture and practical applications of artificial intelligence.",
    header: {
      homeLabel: "Jessica Bandeira — home",
      tagline: "SOFTWARE DEVELOPER",
      projects: "Projects",
      contact: "Contact",
      availability: "Open to a conversation",
      navLabel: "Main navigation",
    },
    footer: { madeWith: "Made with heart by Jessica.", country: "Brazil" },
    home: {
      heroLabel: "Software developer",
      titleStart: "Building digital products with",
      titleAccent: "intention.",
      description:
        "I’m Jessica Bandeira. I build interfaces and am deepening my studies in software architecture and using artificial intelligence to work with greater clarity, quality, and efficiency.",
      projectsCta: "Explore projects",
      contactCta: "Let’s talk",
      metaLeft: "01 / ABOUT MY WORK",
      metaRight: "DESIGN · CODE · LEARNING",
      artLabel: "Abstract artwork representing connected systems",
      artTags: ["product", "systems", "intelligence"],
      introLabel: "What drives me",
      introStart:
        "Good technology is more than a beautiful interface. It is an experience that solves problems and a structure that can",
      introAccent: "grow with confidence.",
      directionEyebrow: "02 / DIRECTION",
      directionTitle: "Learning to",
      directionAccent: "build better.",
      directionDescription:
        "My next step is to look beyond the frontend and understand the whole system: its decisions, boundaries, and collaboration.",
      focus: [
        {
          title: "Software architecture",
          description:
            "Studying how to organize systems, define responsibilities, and make decisions that keep software easier to maintain and evolve.",
          foot: "CONTINUOUS LEARNING",
        },
        {
          title: "AI as a work partner",
          description:
            "Exploring how AI can speed up research, prototyping, and repetitive tasks while keeping human context, review, and judgment in the loop.",
          foot: "APPLIED AI",
        },
        {
          title: "Frontend experiences",
          description:
            "Turning needs into accessible, responsive, and thoughtful interfaces, with care for performance and detail.",
          foot: "PRODUCT FOCUS",
        },
      ],
      workEyebrow: "03 / SELECTED WORK",
      workTitle: "Projects I’ve",
      workAccent: "helped bring to life.",
      allProjects: "View all projects",
      closingEyebrow: "04 / WHAT’S NEXT",
      closingTitle: "Good ideas start",
      closingAccent: "with a conversation.",
      closingCta: "Get in touch",
      screenshotAlt: "Screenshot of the project",
      missingImage: "Image unavailable for",
    },
    projects: {
      pageTitle: "Projects",
      pageDescription:
        "Explore digital products and projects built by Jessica Bandeira.",
      title: "Projects with",
      titleAccent: "purpose and practice.",
      intro:
        "A selection of work built to solve real problems, explore new tools, and turn ideas into digital products.",
      frontendRepo: "Frontend repository",
      backendRepo: "Backend repository",
      liveProject: "Live project",
      ctaQuestion: "Have an interesting challenge?",
      cta: "Let’s talk",
      screenshotAlt: "Screenshot of the project",
      missingImage: "Image unavailable for",
    },
    contact: {
      title: "Let’s make",
      titleAccent: "something thoughtful.",
      intro:
        "I’m open to conversations about opportunities, projects, and ideas ready to take shape. Find me here:",
      configure: "Waiting for configuration",
      artTop: "IDEAS IN",
      artBottom: "MOTION",
      pageTitle: "Contact",
      pageDescription:
        "Get in touch with Jessica Bandeira to talk about opportunities, projects, and ideas.",
    },
  },
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)[Locale];

export const isLocale = (value: string): value is Locale => value in dictionaries;

export async function resolveLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export function localizePath(locale: Locale, path: string) {
  if (locale === "pt") return path;
  return `/en${path === "/" ? "" : path}`;
}
