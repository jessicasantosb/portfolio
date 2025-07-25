type ProjectsProps = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  repositoryUrl: string;
  liveUrl?: string;
  stacks: string[];
};

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Trabalhos Artesanais",
    description:
      "Criei o Trabalhos Artesanais com a finalidade de otimizar a gestão de vendas, funcionando como um caderno online. Os usuários podem cadastrar seus trabalhos de maneira intuitiva, permitindo um controle mais eficiente e um histórico completo das suas vendas.",
    imageUrl: "/assets/trabalhos-artesanais.png",
    repositoryUrl: "https://github.com/jessicasantosb/trabalhos-artesanais",
    liveUrl: "https://trabalhos-artesanais.vercel.app/",
    stacks: ["react", "typescript", "firebase", "tailwind", "jest", "eslint"],
  },
  {
    id: 2,
    title: "Valdir Eletricista",
    description:
      "Desenvolvi para destacar os serviços disponíveis, o sistema inclui um formulário integrado ao WhatsApp, agilizando o contato, aumentando a transparência e impulsionando a captação de clientes.",
    imageUrl: "/assets/eletricista.png",
    repositoryUrl: "https://github.com/jessicasantosb/freelance-eletricista",
    liveUrl: "https://valdir-eletricista.vercel.app/",
    stacks: [
      "nextjs",
      "typescript",
      "tailwind",
      "shadcn",
      "react-hook-form",
      "zod",
      "zustand",
    ],
  },
  {
    id: 3,
    title: "Barbosa Transportes",
    description:
      "Barbosa Transportes foi projetado para promover os serviços oferecidos, incluindo um formulário que conecta diretamente ao WhatsApp, facilitando a comunicação, ampliando a transparência e ajudando a atrair novos clientes.",
    imageUrl: "/assets/barbosa-transportes.png",
    repositoryUrl:
      "https://github.com/jessicasantosb/freelance-barbosa-transportes",
    liveUrl: "https://barbosa-transportes.vercel.app/",
    stacks: [
      "nextjs",
      "typescript",
      "tailwind",
      "shadcn",
      "react-hook-form",
      "zod",
      "zustand",
    ],
  },
  {
    id: 4,
    title: "E-commerce Admin Dashboard",
    description:
      "Com o CMS E-commerce Admin aprendi a implementar as funcionalidades essenciais para gerenciar conteúdos e operações de um e-commerce de forma eficiente.",
    imageUrl: "/assets/e-commerce-admin.png",
    repositoryUrl: "https://github.com/jessicasantosb/ecommerce-admin",
    liveUrl: "https://ecommerce-admin-jessicasantosb.vercel.app/",
    stacks: [
      "nextjs",
      "typescript",
      "shadcn",
      "tailwind",
      "react-hook-form",
      "zod",
      "zustand",
      "prisma",
      "cloudinary",
      "stripe",
    ],
  },
  {
    id: 5,
    title: "E-commerce",
    description:
      "O projeto E-commerce serviu para integrar com a API desenvolvida no CMS E-commerce Admin, proporcionando uma conexão eficiente entre a administração e a loja online.",
    imageUrl: "/assets/e-commerce.png",
    repositoryUrl: "https://github.com/jessicasantosb/ecommerce-store",
    liveUrl: "https://ecommerce-store-jessicasantosb.vercel.app/",
    stacks: ["nextjs", "typescript", "zustand"],
  },
  {
    id: 6,
    title: "Zarpou Viagens e Turismo",
    description:
      "Projeto desenvolvido para suprir a necessidade de centralizar a divulgação de serviços da Zarpou Viagens e Turismo. O app organiza informações de pacotes e conecta clientes diretamente à operadora online, eliminando atritos no primeiro contato.",
    imageUrl: "/assets/zarpou.png",
    repositoryUrl: "https://github.com/jessicasantosb/freelance-zarpou",
    liveUrl: "https://freelance-zarpou.vercel.app/",
    stacks: [
      "nextjs",
      "typescript",
      "tailwind",
      "shadcn",
      "react-hook-form",
      "zod",
      "zustand",
    ],
  },
];
