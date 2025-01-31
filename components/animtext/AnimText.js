"use client";

import React from "react";

let lastText = "";

export default function AnimText({ text }) {
  const [linesOfChars, setLinesOfChars] = React.useState([]);

  React.useEffect(() => {
    if (text === lastText) return;

    setLinesOfChars(text.split("\n").map((line) => line.split("")));

    lastText = text;
  }, [text]);

  return (
    <>
      <div className="w-container  aos-init aos-animate  prismax  overflow-x-hidden m-auto mo:w-full mo:px-[30px]   mx-auto md:w-full md:px-[70px]   text-[#FFFFFF]">
        {linesOfChars.map((chars, indexl) => (
          <p className="animp" key={Math.random()}>
            {chars.map((char, index) => (
              <span
                className="animspan"
                key={Math.random()}
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}
