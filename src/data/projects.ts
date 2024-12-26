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
    title: "Booking Room",
    description:
      "Desenvolvi o Booking Room para gerenciar o aluguel de quartos. O sistema é projetado para oferecer uma experiência simples e eficiente tanto para administradores quanto para usuários.",
    imageUrl: "/assets/booking-room.png",
    repositoryUrl: "https://github.com/jessicasantosb/booking-room",
    liveUrl: "https://booking-room-jessicasantosb.vercel.app/",
    stacks: ["react", "javascript", "sass", "stripe", "nodejs"],
  },
  {
    id: 3,
    title: "Entregas e Fretes",
    description:
      "Entregas e Fretes é um projeto freelance criado para promover serviços de entregas, esclarecer dúvidas e facilitar o contato com os clientes, oferecendo uma comunicação simples e eficiente.",
    imageUrl: "/assets/entregas-e-fretes.png",
    repositoryUrl:
      "https://github.com/jessicasantosb/freelance-entregas-e-fretes",
    liveUrl: "https://barbosa-fretes.vercel.app/",
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
    title: "E-commerce",
    description:
      "Estou desenvolvendo este e-commerce fullstack com o objetivo de aprimorar minhas habilidades na criação de aplicações robustas e completas.",
    repositoryUrl: "https://github.com/jessicasantosb/e-commerce",
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
    ],
  },
];
