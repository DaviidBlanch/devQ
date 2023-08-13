import CapgeminiLogo from "../assets/images/CapgeminiLogo.webp";
import { HomeSolidIcon, SearchOutlineIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
import NttDataLogo from "../assets/images/NttDataLogo.webp";

export default function SideBar() {
    return (
        <nav className="fixed top-2 left-2 z-40 w-[75px]">
            <div className="h-full rounded-lg overflow-y-auto bg-[#121212]">
                <ul className="space-y-2 font-medium py-2 px-3">
                    <li className="py-2 px-3 rounded-lg hover:bg-[#2323238c]">
                        <Link to="/" className="flex items-center rounded-lg group">
                            <HomeSolidIcon />
                        </Link>
                    </li>
                    <li className="py-2 px-3 rounded-lg hover:bg-[#2323238c]">
                        <Link to="search" className="flex items-center rounded-lg group">
                            <SearchOutlineIcon />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="h-full mt-3 rounded-lg overflow-y-auto bg-[#121212]">
                <ul className="space-y-2 font-medium py-2 px-3">
                    <li className="py-2 pt-3 px-1 hover:bg-[#2323238c] rounded-lg">
                        <img src={CapgeminiLogo} className="flex items-center group rounded" alt="Capgemini" />
                    </li>
                    <li className="py-1 px-1 hover:bg-[#2323238c] rounded-lg">
                        <img src={NttDataLogo} className="flex items-center group rounded" alt="Ntt Data" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}