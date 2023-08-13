import { useState } from "react";
import NavBar from "../NavBar";
import Background from "../Background";
import InfoCompany from "./InfoComapny";
import Questions from "./Questions";

export default function CompanyDetails() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };

    return (
        <Background handleScroll={handleScroll}>
            <NavBar scroll={isScrolled} />
            <article className="p-4 px-6 pt-3">
                <div className="grid grid-cols-2 gap-4">
                    <InfoCompany/>
                    <Questions/>
                </div>
            </article>
        </Background >
    )
}