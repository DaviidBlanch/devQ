import { UserProfileIcon } from "../assets/Icons";

export default function NavHome() {
    return (
        <nav
            id="nav-home"
            className="sticky w-auto z-20 top-0 left-0 px-4 py-3 rounded-t-lg transition-colors duration-100"
        >
            <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap underline">devQ</span>
                <UserProfileIcon />
            </div>
        </nav >
    )
}