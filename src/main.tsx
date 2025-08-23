import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/system/theme/theme-provider";
import { SidebarContextProvider } from "./context/closeSidebar";
import { AsistantContextProvider } from "./context/assistant-context";
import ShortcutHandler from "./components/system/shortcuts/ShortcutHandler";
import { AuthContextProvider } from "./Auth/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <AuthContextProvider>
                <SidebarContextProvider>
                    <AsistantContextProvider>
                        <ShortcutHandler />
                        <App />
                    </AsistantContextProvider>
                </SidebarContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
