// Force rebuild v3
import { createRoot } from "react-dom/client";
import "./index.css";

// Global error handlers to catch any uncaught errors
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
  showFallback(event.error?.message || event.message || "Unknown error");
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled rejection:", event.reason);
  event.preventDefault();
});

function showFallback(msg: string) {
  const root = document.getElementById("root");
  if (root && !root.hasChildNodes()) {
    root.innerHTML = `<div style="color:#e2e8f0;padding:40px;font-family:sans-serif;text-align:center;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a1628">
      <div>
        <h1 style="font-size:24px;margin-bottom:16px">Ошибка загрузки сайта</h1>
        <p style="color:#94a3b8;margin-bottom:16px">Попробуйте обновить страницу</p>
        <button onclick="location.reload()" style="padding:12px 24px;background:#2dd4a8;color:#0a1628;border:none;border-radius:8px;cursor:pointer;font-weight:600;font-size:16px">Обновить</button>
        <pre style="margin-top:24px;padding:16px;background:#1e293b;border-radius:8px;font-size:12px;color:#f87171;text-align:left;max-width:600px;overflow:auto">${msg}</pre>
      </div>
    </div>`;
  }
}

const root = document.getElementById("root")!;

async function init() {
  try {
    const { default: App } = await import("./App.tsx");
    createRoot(root).render(<App />);
  } catch (error: any) {
    console.error("Root render error:", error);
    showFallback(error?.message || String(error));
  }
}

init();
