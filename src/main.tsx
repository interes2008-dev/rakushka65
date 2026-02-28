// Force rebuild v2
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

try {
  createRoot(root).render(<App />);
} catch (error) {
  console.error("Root render error:", error);
  root.innerHTML = `<div style="color:white;padding:20px;font-family:sans-serif">
    <h1>Ошибка загрузки</h1>
    <pre>${error}</pre>
  </div>`;
}
