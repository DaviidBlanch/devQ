import { UserProfileIcon } from "../assets/Icons";

export default function NavHome() {
    return (
        <nav className="sticky w-auto z-20 top-0 left-0 p-4 pb-1 bg-transparent">
            <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">devQ</span>
                <UserProfileIcon />
            </div>
        </nav>
    )
}