import { HomeSolidIcon, SearchOutlineIcon } from "../assets/Icons";

export default function Navegation() {
    return (
        <nav className="fixed top-2 left-2 z-40 w-[75px]">
            <div className="h-full rounded overflow-y-auto bg-[#121212]">
                <ul className="space-y-2 font-medium py-2 px-3">
                    <li className="py-3 px-3">
                        <a href="#" className="flex items-center rounded-lg group">
                            <HomeSolidIcon />
                        </a>
                    </li>
                    <li className="py-3 px-3">
                        <a href="#" className="flex items-center rounded-lg group">
                            <SearchOutlineIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="h-full mt-3 rounded overflow-y-auto bg-[#121212]">
                <ul className="space-y-2 font-medium py-2 px-3">
                    <li className="py-2 pt-3 px-3">
                        <a href="#" className="flex items-center group">
                            <svg className="flex-shrink-0 text-white transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}