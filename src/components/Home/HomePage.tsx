import { useState } from "react";
import NavBar from "./NavBar";
import NavCompanies from "./Companies/NavCompanies";
import Companies from "./Companies/Companies";

export default function HomePage() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };

    return (
        <div
            className="relative overflow-y-scroll will-change-scroll h-[calc(100vh-20px)] p-0 pb-0 "
            onScroll={handleScroll}
        >
            <NavBar scroll={isScrolled} />
            <main className="p-4 px-6 pt-1">
                <NavCompanies title='Empresas' />
                <Companies />
            </main>
        </div >
    )
}