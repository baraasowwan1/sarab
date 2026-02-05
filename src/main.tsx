import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// استدعاء إعدادات اللغات
import "./i18n";

createRoot(document.getElementById("root")!).render(<App />);
