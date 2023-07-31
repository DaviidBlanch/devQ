import NavHome from "./NavHome";
import Questions from "./Questions";

export default function Home() {
    return (
        <div className="relative overflow-y-scroll h-[calc(100vh-20px)] p-0 pb-0">
            <NavHome />
            <main className="p-4">
                <Questions />
            </main>
        </div>
    )
}