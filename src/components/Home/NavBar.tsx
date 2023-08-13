import React from "react";

interface Scroll {
    scroll: boolean;
}

const NavBar: React.FC<Scroll> = ({ scroll }) => {
    return (
        <nav
            className={`sticky w-auto z-20 top-0 left-0 px-6 py-3 rounded-t-lg transition-colors: duration-1000 ${scroll ? "bg-[#0d363f]" : "bg-transparent"}`}
        >
            <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap underline">devQ</span>
                <div>
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;