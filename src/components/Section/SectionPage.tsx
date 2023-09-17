import Background from "../Home/Background";
import Companies from "../Home/Companies/Companies";
import NavBar from "../Header/NavBar";
import { useState } from "react";

export default function SectionPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };
    return (
        <Background handleScroll={handleScroll}>
            <NavBar scroll={isScrolled} />
            <Companies/>
        </Background >
    )
}