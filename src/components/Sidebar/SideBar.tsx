import CapgeminiLogo from "../../assets/images/CapgeminiLogo.webp";
import { HomeSolidIcon, SearchOutlineIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import NttDataLogo from "../../assets/images/NttDataLogo.webp";

export default function SideBar() {
    return (
        <nav className="flex flex-col flex-1 gap-2">
            <div className="bg-zinc-900 rounded-lg">
                <ul>
                    <li className="flex gap-4 text-zinc-400 py-3.5 px-6">
                        <Link to="/">
                            <HomeSolidIcon />
                        </Link>
                    </li>
                    <li className="flex gap-4 text-zinc-400 py-3.5 px-6">
                        <Link to="search">
                            <SearchOutlineIcon />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg flex-1 p-2">
                <ul>
                    <li className="py-2 pt-3 px-1 gap-4 hover:bg-[#2323238c] rounded-lg">
                        <img src={CapgeminiLogo} className="flex items-center group rounded" alt="Capgemini" />
                    </li>
                    <li className="py-1 px-1 flex gap-4 hover:bg-[#2323238c] rounded-lg">
                        <img src={NttDataLogo} className="flex items-center group rounded" alt="Ntt Data" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}