import { ReactNode, createContext, useContext, useState } from "react";

interface PanelProviderProp {
    children: ReactNode;
}

interface PanelContextType {
    isPanel: boolean;
    togglePanel: () => void;
}

const PanelContext = createContext<PanelContextType | undefined>(undefined);

export function usePanel() {
    const panel = useContext(PanelContext);
    if (!panel) throw new Error('useAuth debe usarse dentro de un AuthProvider');
    return panel
}

export function PanelProvider({ children }: PanelProviderProp) {
    const [isPanel, setIsPanel] = useState<boolean>(false);

    const togglePanel = () => {
        setIsPanel(!isPanel);
    };

    return (
        <PanelContext.Provider value={{ isPanel, togglePanel }}>
            {children}
        </PanelContext.Provider>
    )
}
