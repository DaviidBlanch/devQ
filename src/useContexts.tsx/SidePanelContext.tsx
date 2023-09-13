import { createContext, useContext, useState, ReactNode } from 'react';

interface SidePanelContextType {
    isSidePanelOpen: boolean;
    toggleSidePanel: () => void;
}

const SidePanelContext = createContext<SidePanelContextType | undefined>(undefined);

interface SidePanelProviderProps {
    children: ReactNode;
}

export const SidePanelProvider: React.FC<SidePanelProviderProps> = ({ children }) => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    return (
        <SidePanelContext.Provider value={{ isSidePanelOpen, toggleSidePanel }}>
            {children}
        </SidePanelContext.Provider>
    );
};

export const useSidePanel = (): SidePanelContextType => {
    const openPanel = useContext(SidePanelContext);
    if (!openPanel) {
        throw new Error('useSidePanel must be used within a SidePanelProvider');
    }
    return openPanel;
};
