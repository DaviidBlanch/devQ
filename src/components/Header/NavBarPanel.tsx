import { CloseIcon } from "../../assets/Icons";
import { useAuth } from "../../useContext/AuthProvider";
import { usePanel } from "../../useContext/PanelProvider";

const NavBarPanel = () => {

    const { isPanel, togglePanel } = usePanel()
    const { user } = useAuth()

    return (
        <header className="w-auto z-20 top-0 left-0 mb-6">
            <nav className="flex flex-wrap items-center justify-between">
                {user
                    ? <span className="text-lg font-semibold hover:underline">Crear Post</span>
                    : <span className="text-lg font-semibold hover:underline">Iniciar sesión</span>

                }
                {isPanel && (
                    <button onClick={togglePanel} className="p-2 rounded-full inline-flex items-center transform transition-transform hover:scale-125">
                        <CloseIcon />
                    </button>
                )}
            </nav>
        </header >
    )
}

export default NavBarPanel;