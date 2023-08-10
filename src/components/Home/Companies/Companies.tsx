import { Link } from "react-router-dom";
import Company from "./Company";

export default function Companies() {
    return (
        <main className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 min-[500px]:grid-cols-2 gap-4 mb-4">
            <Link to="/company/1"><Company /></Link>
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
        </main>
    )
}