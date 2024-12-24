type ProjectsProps = {
  id: number;
  title: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl?: string;
  stacks: string;
  color: string;
};

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Trabalhos Artesanais",
    imageUrl: "/assets/trabalhos-artesanais.png",
    repositoryUrl: "https://github.com/jessicasantosb/trabalhos-artesanais",
    liveUrl: "https://trabalhos-artesanais.vercel.app/",
    stacks: "react, typescript, firebase, tailwind, jest, eslint",
    color: "#d8d8d8",
  },
  {
    id: 2,
    title: "Booking Room",
    imageUrl: "/assets/booking-room.png",
    repositoryUrl: "https://github.com/jessicasantosb/booking-room",
    liveUrl: "https://booking-room-jessicasantosb.vercel.app/",
    stacks: "react, javascript, sass, stripe, nodejs",
    color: "#a8a8a8",
  },
  {
    id: 3,
    title: "Entregas e Fretes",
    imageUrl: "/assets/entregas-e-fretes.png",
    repositoryUrl:
      "https://github.com/jessicasantosb/freelance-entregas-e-fretes",
    liveUrl: "https://barbosa-fretes.vercel.app/",
    stacks:
      "nextjs, typescript, tailwind, shadcn, react-hook-form, zod, zustand, motion",
    color: "#d8d8d8",
  },
  {
    id: 4,
    title: "E-commerce",
    imageUrl: "/assets/e-commerce.png",
    repositoryUrl: "https://github.com/jessicasantosb/e-commerce",
    stacks:
      "nextjs, typescript, shadcn, tailwind, prisma, react-hook-form, zod, zustand, prisma, cloudinary",
    color: "#a8a8a8",
  },
];
