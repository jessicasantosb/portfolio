type ProjectsProps = {
  id: number;
  title: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl?: string;
  stacks: string[];
  color: string;
};

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Trabalhos Artesanais",
    imageUrl: "/assets/trabalhos-artesanais.png",
    repositoryUrl: "https://github.com/jessicasantosb/trabalhos-artesanais",
    liveUrl: "https://trabalhos-artesanais.vercel.app/",
    stacks: ["react", "typescript", "firebase", "tailwind", "jest", "eslint"],
    color:
      "linear-gradient(135deg, rgba(240,240,240,1) 0%, rgba(216,216,216,1) 35%)",
  },
  {
    id: 2,
    title: "Booking Room",
    imageUrl: "/assets/booking-room.png",
    repositoryUrl: "https://github.com/jessicasantosb/booking-room",
    liveUrl: "https://booking-room-jessicasantosb.vercel.app/",
    stacks: ["react", "javascript", "sass", "stripe", "nodejs"],
    color:
      "linear-gradient(135deg, rgba(240,240,240,1) 0%, rgba(194,194,194,1) 30%)",
  },
  {
    id: 3,
    title: "Entregas e Fretes",
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
    color:
      "linear-gradient(135deg, rgba(240,240,240,1) 0%, rgba(216,216,216,1) 35%)",
  },
  {
    id: 4,
    title: "E-commerce",
    imageUrl: "/assets/e-commerce.png",
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
    color:
      "linear-gradient(135deg, rgba(240,240,240,1) 0%, rgba(194,194,194,1) 30%)",
  },
];
