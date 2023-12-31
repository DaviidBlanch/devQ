import Background from "./Background";
import Companies from "./Companies/Companies";
import NavBar from "../Header/NavBar";
import NavCompanies from "./Companies/NavCompanies";
import { useState } from "react";

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