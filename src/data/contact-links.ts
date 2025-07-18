import { ContactLinkItem } from "@/types/contact-links";

export const contactLinks: ContactLinkItem[] = [
  {
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
    name: "Whatsapp",
  },
  {
    href: `https://discordapp.com/users/${process.env.NEXT_PUBLIC_DISCORD_USER}`,
    name: "Discord",
  },
  {
    href: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`,
    name: "Github",
  },
  {
    href: `https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`,
    name: "Linkedin",
  },
  { href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`, name: "Email" },
];
