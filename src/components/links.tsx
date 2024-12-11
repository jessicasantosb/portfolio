import { contactLinks } from "@/data/contact-links";
import { FlipLink } from "./flip-link";
import { flipLinkVariants } from "./shared/animation-variants";
import { MotionDiv } from "./shared/motion";

export const RevealLinks = () => {
  return (
    <section className="w-full grid place-content-center gap-4 sm:gap-2">
      {contactLinks.map(({ href, name }, index) => (
        <MotionDiv
          key={name}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={flipLinkVariants}
        >
          <FlipLink href={href}>{name}</FlipLink>
        </MotionDiv>
      ))}
    </section>
  );
};
