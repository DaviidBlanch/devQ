import { HomeSolidIcon, SearchOutlineIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../useContext/AuthProvider";

export default function SideBar() {

    const { user } = useAuth()

    return (
        <nav className="flex flex-col flex-1 gap-2">
            <div className="bg-zinc-900 rounded-lg">
                <ul>
                    <li >
                        <Link to="/" className="flex gap-4 text-zinc-400 items-center py-3 px-7">
                            <HomeSolidIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="search" className="flex gap-4 text-zinc-400 items-center py-3 px-7">
                            <SearchOutlineIcon />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg flex-1 p-2 overflow-y-auto">
                <ul>
                    {
                        user !== undefined && user?.posts?.map((post) => (
                            <Link key={post.id} to={`/company/${post.id}`}
                                className="flex relative p-2 items-center gap-5 rounded-md hover:bg-zinc-800 overflow-hidden"
                            >
                                <picture
                                    className="h-12 w-12 flex-none"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.company}
                                        className="object-contain w-full h-full rounded-md"
                                    />
                                </picture>
                            </Link>
                        ))
                    }
                    {user?.posts?.length === 0 && <span>Cargando...</span>}
                </ul>
            </div>
        </nav>
    )
}