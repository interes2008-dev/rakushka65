import { createRoot } from "react-dom/client";
// Self-hosted шрифты (кириллица + латиница), без зависимости от Google Fonts
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
