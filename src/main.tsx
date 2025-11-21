import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";

// css
import "./styles/resets.css";
import "./styles/footer.css";
import "./styles/nav.css";
import "./styles/home/header.css";
import "./styles/home/sobre.css";
import "./styles/home/slider.css";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
