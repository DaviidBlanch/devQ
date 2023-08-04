export default function NavCompanies() {
    return (
        <nav className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-start">
                <h1 className="text-2xl font-bold p-0 mb-[6px] m-0 hover:underline"><a>Empresas</a></h1>
            </div>
            <div className="flex items-center">
                <div className="flex items-center ml-3">
                    <a className="hover:underline text-gray-400"><span>Mostrar todos</span></a>
                </div>
            </div>
        </nav>
    )
}