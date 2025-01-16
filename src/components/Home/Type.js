import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Wordpress CMS",
          "Desarrollador Web",
          "Freelancer",
          "Desarrollador MERN Stack",
          "HTML + CSS + JS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
