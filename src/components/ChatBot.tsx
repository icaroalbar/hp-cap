import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.type = "text/javascript";
    script.src = "https://cdn.leadster.com.br/neurolead/neurolead.min.js";
    document.head.appendChild(script);
    window.neuroleadId = 56078;
  }, []);

  return null;
};

export default ChatBot;
