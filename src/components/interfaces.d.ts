export interface NavCompaniesTitle {
    title: string;
}

export interface BackgroundProps {
    children: React.ReactNode;
    handleScroll: (event: React.UIEvent<HTMLDivElement>) => void;
}

export interface Scroll {
    scroll: boolean;
}