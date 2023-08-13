import { useState } from "react";
import NavCompanies from "../Home/Companies/NavCompanies";
import NavBar from "../Home/NavBar";
import Background from "../Home/Background";

export default function SearchPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };
    return (
        <Background handleScroll={handleScroll}>
            <NavBar scroll={isScrolled} />
            <main className="p-4 px-6 pt-1">
                <NavCompanies title='Búsquedas recientes' />
            </main>
        </Background >
    )
}