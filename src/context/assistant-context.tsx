import { createContext, useContext, useState } from "react";

type AssistantContextType = {
    assistantExpanded: boolean;
    toggleAssistant: () => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

export function AsistantContextProvider({ children }: { children: React.ReactNode }) {
    const [assistantExpanded, setAssistantExpanded] = useState(true);
    const toggleAssistant = () => setAssistantExpanded(prev => !prev);

    return (
        <AssistantContext.Provider value={{ assistantExpanded, toggleAssistant }}>
            {children}
        </AssistantContext.Provider>
    );
}

export function useAssistantContext() {
    const context = useContext(AssistantContext);
    if (!context) {
        throw new Error("useAsistanContext must be used within an AsistanProvider");
    }
    return context;
}