import { ArrowLeft, SearchSolidIcon } from "../../assets/Icons";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Scroll } from "../interfaces";

const NavBar: React.FC<Scroll> = ({ scroll }) => {
    const location = useLocation();
    // const { id } = useParams();

    const renderNavbarContent = () => {
        if (location.pathname === '/') {
            return (
                <span className="self-center text-2xl font-semibold whitespace-nowrap underline">devQ</span>
            );
        } else if (location.pathname === '/search') {
            return (
                <div className="relative">
                    < div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none" >
                        <SearchSolidIcon />
                    </div >
                    <input type="text" autoFocus className=" block p-2 pl-10 text-sm text-white border border-[#121212] rounded-xl w-80 bg-[#121212] focus:outline-none focus:border-transparent" placeholder="Buscar empresa" maxLength={30} />
                </div>
            )
        } else if (location.pathname.startsWith('/company/')) {
            // if (id) {
            return (
                <>
                    <Link to="/" className="hover:bg-[#121212] rounded-xl p-1"><ArrowLeft /></Link>
                </>
            )
            // }
        }
    }

    return (
        <header className={`sticky w-auto z-20 top-0 left-0 px-6 py-3 rounded-t-lg transition-colors: duration-1000 ${scroll ? "bg-[#0d363f]" : "bg-transparent"}`}>
            <nav className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-0">
                {renderNavbarContent()}
                <div>
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                    </button>
                </div>
            </nav>
        </header >
    )
}

export default NavBar;