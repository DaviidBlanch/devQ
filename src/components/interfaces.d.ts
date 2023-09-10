export interface BackgroundProps {
    children: React.ReactNode;
    handleScroll: (event: React.UIEvent<HTMLDivElement>) => void;
}

export interface Scroll {
    scroll: boolean;
}

export interface APIResults {
    posts: Posts[]
    totalPosts: number
    currentPage: number
}

export interface Posts {
    company: string
    description: string
    image: string
    country: string
    city: string
    experience: string
    questions: string[]
    create_date: Date
    user: string
    id: string
}