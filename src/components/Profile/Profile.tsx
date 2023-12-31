import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../useContext/AuthProvider";
import { AddPostIcon, CloseIcon, UserRemoveProfileIcon } from "../../assets/Icons";
import { usePanel } from "../../useContext/PanelProvider";

const Profile = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth()
    const dropdownRef = useRef<HTMLDivElement>(null);
    const {togglePanel} = usePanel()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleLogOut = () => {
        logout()
        window.localStorage.removeItem('user')
    }

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-block rounded-lg p-1.5 transform transition-transform hover:scale-105"
                type="button"
            >
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
            </button>
            {isOpen && (
                <div className="z-10 absolute right-0 mt-2 text-base list-none bg-[#282828] rounded-lg shadow-md w-44">
                    <ul className="py-3">
                        <li className="flex justify-between">
                            <span className="px-3 text-white text-sm">{user?.username}</span>
                            <button
                                className="px-3 inline-flex items-center transform transition-transform hover:scale-105"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <CloseIcon />
                            </button>
                        </li>
                        <li>
                            <button
                            onClick={   togglePanel}
                                className="px-3 mr-3 inline-flex items-center transform transition-transform hover:scale-105"
                            >
                                <AddPostIcon />
                                <span className="ml-1 text-[14px] text-white font-semibold">Añadir posts</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleLogOut}
                                className="px-3 mr-3 inline-flex items-center transform transition-transform hover:scale-105"
                            >
                                <UserRemoveProfileIcon />
                                <span className="ml-1 text-[14px] text-red-700 font-semibold">Cerrar sesión</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div >
    )
}
export default Profile;