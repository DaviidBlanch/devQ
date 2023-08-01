import { useState } from "react";
import NavHome from "./NavHome";
import Questions from "./Questions";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };

    return (
        <div
            className="relative overflow-y-scroll will-change-scroll h-[calc(100vh-20px)] p-0 pb-0 "
            onScroll={handleScroll}
        >
            <NavHome scroll={isScrolled} />
            <main className="p-4 pt-3">
                <Questions />
            </main>
        </div >
    )
}