import { HomeSolidIcon, SearchOutlineIcon } from "../assets/Icons";

export default function SideBar() {
    return (
        <nav className="fixed top-2 left-2 z-40 w-[75px]">
            <div className="h-full rounded-lg overflow-y-auto bg-[#121212]">
                <ul className="space-y-2 font-medium py-2 px-3">
                    <li className="py-2 px-3">
                        <a href="#" className="flex items-center rounded-lg group">
                            <HomeSolidIcon />
                        </a>
                    </li>
                    <li className="py-2 px-3">
                        <a href="#" className="flex items-center rounded-lg group">
                            <SearchOutlineIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="h-full mt-3 rounded-lg overflow-y-auto bg-[#121212]">
                <ul className="space-y-2 font-medium py-2 px-3">
                    <li className="py-2 pt-3 px-1 hover:bg-[#2323238c] rounded">
                        <img src="/images/CapgeminiLogo.webp" className="flex items-center group" alt="Capgemini" />
                    </li>
                    <li className="py-1 px-1 hover:bg-[#2323238c] rounded">
                        <img src="/images/NttDataLogo.webp" className="flex items-center group" alt="Ntt Data" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}