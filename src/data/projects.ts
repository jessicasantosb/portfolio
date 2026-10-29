import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Trabalhos Artesanais",
    description:
      "Criei o Trabalhos Artesanais com a finalidade de otimizar a gestão de vendas, funcionando como um caderno online. Os usuários podem cadastrar seus trabalhos de maneira intuitiva, permitindo um controle mais eficiente e um histórico completo das suas vendas.",
    descriptionEn:
      "I built Trabalhos Artesanais as an online sales notebook. Users can easily register their handmade products, track sales more effectively, and keep a complete sales history.",
    stacks: ["React", "TypeScript", "Firebase", "Tailwind", "Jest", "ESLint"],
    imageUrl: "/assets/trabalhos-artesanais.png",
    repositoryUrl: "https://github.com/jessicasantosb/trabalhos-artesanais",
    liveUrl: "https://trabalhos-artesanais.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Admin Dashboard",
    description:
      "Com o CMS E-commerce Admin aprendi a implementar as funcionalidades essenciais para gerenciar conteúdos e operações de um e-commerce de forma eficiente.",
    descriptionEn:
      "Building this e-commerce CMS helped me implement the essential features for managing an online store’s content and operations efficiently.",
    stacks: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Prisma",
      "Cloudinary",
      "Stripe",
    ],
    imageUrl: "/assets/e-commerce-admin.png",
    repositoryUrl: "https://github.com/jessicasantosb/ecommerce-admin",
    liveUrl: "https://ecommerce-admin-jessicasantosb.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "O projeto E-commerce serviu para integrar com a API desenvolvida no CMS E-commerce Admin, proporcionando uma conexão eficiente entre a administração e a loja online.",
    descriptionEn:
      "This e-commerce storefront connects to the API built for the E-commerce Admin CMS, linking store management with the online shopping experience.",
    stacks: ["Next.js", "TypeScript", "Zustand"],
    imageUrl: "/assets/e-commerce.png",
    repositoryUrl: "https://github.com/jessicasantosb/ecommerce-store",
    liveUrl: "https://ecommerce-store-jessicasantosb.vercel.app/",
  },
  {
    id: 4,
    title: "Zarpou Viagens e Turismo",
    description:
      "Na Zarpou, desenvolvi a plataforma de divulgação de viagens e um backend em Python com FastAPI. Também criei a IA Concierge para organizar informações e apoiar o atendimento aos viajantes.",
    descriptionEn:
      "For Zarpou, I built a travel information platform and a Python backend with FastAPI. I also created the AI Concierge to organize information and support traveler inquiries.",
    stacks: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "IA Concierge",
      "Tailwind",
      "shadcn/ui",
    ],
    imageUrl: "/assets/zarpou.png",
    repositoryUrl: "https://github.com/jessicasantosb/freelance-zarpou",
    backendRepositoryUrl: "https://github.com/jessicasantosb/zarpou-backend",
    liveUrl: "https://freelance-zarpou.vercel.app/",
  },
];
