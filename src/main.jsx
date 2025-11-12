import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from "./content/PlayerContent.jsx";

// Automatically set basename for GitHub Pages only
const basename =
  import.meta.env.PROD && location.hostname.includes("github.io")
    ? "/Spotify-Clone"
    : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
