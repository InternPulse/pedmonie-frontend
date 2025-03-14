import { Provider as UIProvider } from "./components/ui/provider";
import { BrowserRouter as Router } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <UIProvider>
         <App/>
        </UIProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
