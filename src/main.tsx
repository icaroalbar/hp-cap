import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import Router from "./routers/router";
import React from "react";

import "./styles/index.css";
import "tw-elements";
import ChatBot from "./components/ChatBot";
//import { ScrollToTopButton } from "./styles/components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChatBot />
    {/* <ScrollToTopButton /> */}
    <Router />
  </React.StrictMode>
);
