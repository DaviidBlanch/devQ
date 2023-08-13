import { useState } from "react";
import NavBar from "./NavBar";
import NavCompanies from "./Companies/NavCompanies";
import Companies from "./Companies/Companies";
import Background from "./Background";

export default function HomePage() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };

    return (
        <Background handleScroll={handleScroll}>
            <NavBar scroll={isScrolled} />
            <main className="p-4 px-6 pt-1">
                <NavCompanies title='Empresas' />
                <Companies />
            </main>
        </Background >
    )
}