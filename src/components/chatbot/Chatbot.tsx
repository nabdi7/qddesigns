"use client";
import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpenguin.com/website-bot.js";
    script.defer = true;
    script.id = "messenger-widget-b";
    script.setAttribute(
      "data-key",
      "668220267da709ebda6e8827,66821ffbbe6ca632ba7a7d95"
    );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default Chatbot;
