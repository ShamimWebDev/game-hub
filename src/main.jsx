import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import { GameProvider } from "./context/GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <RouterProvider router={router}></RouterProvider>
    </GameProvider>
  </StrictMode>
);
