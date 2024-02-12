import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "./contexts/LanguageContext";

export function TitleTypewriter(str) {
  return (
    <Typewriter
      options={{
        strings: [str.str],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 7000,
        cursor: "_",
        cursorClassName: "title-underline",
      }}
    />
  );
}

export function HomeTitleTypewriter() {
  const { languageData } = useContext(LanguageContext);

  const str3 = languageData.homeTitle3;
  const str2 = languageData.homeTitle2;
  const str1 = languageData.homeTitle1;

  return (
    <Typewriter
      options={{
        strings: [str1, str2, str3],
        delay: 20,
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
        cursor: "_",
        cursorClassName: "title-underline",
      }}
    />
  );
}
