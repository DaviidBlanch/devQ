import { ArrowLeft, SearchSolidIcon, UserProfileIcon } from "../../assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Scroll } from "../interfaces";
import { useEffect, useState } from "react";
import { usePanel } from "../../useContext/PanelProvider";
import { useAuth } from "../../useContext/AuthProvider";
import Profile from "../Profile/Profile";

const NavBar: React.FC<Scroll> = ({ scroll }) => {

    const history = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const { isPanel, togglePanel } = usePanel()
    const { user } = useAuth()

    useEffect(() => {
        if (location.pathname.startsWith('/search')) {
            const search = location.pathname.split('/')[2];
            setSearchTerm(search);
        }
    }, [location]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        history(`/search/${newSearchTerm}`);
    };

    const handleButtonBack = () => {
        history(-1);
    }

    const renderNavbarContent = () => {
        if (location.pathname === '/') {
            return (
                <span className="self-center text-2xl font-semibold whitespace-nowrap underline">devQ</span>
            );
        } else if (location.pathname.startsWith('/search')) {
            return (
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none" >
                        <SearchSolidIcon />
                    </div >
                    <input type="text" value={searchTerm || ''} onChange={handleSearch} autoFocus className=" block p-2 pl-10 text-sm text-white border border-[#121212] rounded-xl w-80 bg-[#121212] focus:outline-none focus:border-transparent" placeholder="Buscar empresa" maxLength={30} />
                </div>
            )
        } else if (location.pathname.startsWith('/company/')) {
            return (
                <button onClick={handleButtonBack} className="hover:bg-[#121212] rounded-full p-1"><ArrowLeft /></button>
            )
        }
    }

    console.log(user);

    return (
        <header className={`sticky w-auto z-20 top-0 left-0 px-6 py-3 rounded-t-lg transition-colors: duration-1000 ${scroll ? "bg-[#0d363f]" : "bg-transparent"}`}>
            <nav className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-0">
                {renderNavbarContent()}
                {user && <>{isPanel ? <Profile /> : <Profile />}</>}
                {!isPanel && !user && (
                    <button onClick={togglePanel} className="bg-[#121212e4] p-1 rounded-full px-3 mr-3 inline-flex items-center transform transition-transform hover:scale-105">
                        <UserProfileIcon />
                        <span className="ml-1 text-[14px]">Iniciar sesión</span>
                    </button>
                )}
            </nav>
        </header >
    )
}
export default NavBar;