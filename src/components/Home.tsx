import NavHome from "./NavHome";
import Questions from "./Questions";

export default function Home() {
    return (
        <div className="relative overflow-y-scroll h-[calc(100vh-20px)] p-4 pb-0">
            <NavHome />
            <main>
                <Questions />
            </main>
        </div>
    )
}