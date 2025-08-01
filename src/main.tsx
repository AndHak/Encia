import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/system/theme/theme-provider";
import { SidebarContextProvider } from "./context/closeSidebar";
import { AsistanContextProvider } from "./context/assistant-context";
import ShortcutHandler from "./components/system/shortcuts/ShortcutHandler";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarContextProvider>
        <AsistanContextProvider>
          <ShortcutHandler/>
          <App />
        </AsistanContextProvider>
      </SidebarContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
