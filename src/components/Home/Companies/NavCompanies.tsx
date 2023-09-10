interface NavCompaniesTitle {
    title: string;
}

export default function NavCompanies({ title }: NavCompaniesTitle) {
    return (
        <header className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-start">
                <h1 className="text-2xl font-bold p-0 mb-[6px] m-0 hover:underline"><a>{title}</a></h1>
            </div>
        </header>
    )
}