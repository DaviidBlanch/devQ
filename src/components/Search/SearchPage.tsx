import Background from "../Home/Background";
import NavBar from "../Header/NavBar";
import NavCompanies from "../Home/Companies/NavCompanies";
import { useState } from "react";
import Companies from "../Home/Companies/Companies";

export default function SearchPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };
    return (
        <Background handleScroll={handleScroll}>
            <NavBar scroll={isScrolled} />
            <main className="p-4 px-6 pt-1">
                <NavCompanies title='Última búsqueda' />
                <Companies />
            </main>
        </Background >
    )
}