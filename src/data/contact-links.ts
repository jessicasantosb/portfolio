import type { ContactLinkItem } from "@/types/contact-links";

export const contactLinks: ContactLinkItem[] = [
  {
    href: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER || "jessicasantosb"}`,
    name: "GitHub",
  },
  {
    href: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
      : undefined,
    name: "WhatsApp",
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_USER
      ? `https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`
      : undefined,
    name: "LinkedIn",
  },
];
