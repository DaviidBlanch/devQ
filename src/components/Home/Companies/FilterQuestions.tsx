import { FilesIcon } from "../../../assets/Icons";

export default function FilterQuestions() {
    return (
        <nav className="relative text-lg text-center text-white">
            <ul className="lg:flex md:flex border-b border-white lg:w-2/4 md:w-3/4 sm:w-4/5">
                <li className="mr-6 mb-1">
                    <a href="#" className="hover:bg-[#5757578f] rounded-lg inline-block p-1">
                        Junior
                    </a>
                </li>
                <li className="mr-6">
                    <a href="#" className="hover:bg-[#5757578f] rounded-lg inline-block p-1">
                        Semi
                    </a>
                </li>
                <li className="mr-6">
                    <a href="#" className="hover:bg-[#5757578f] rounded-lg inline-block p-1">
                        Senior
                    </a>
                </li>
                <li className="lg:flex md:flex items-center sm:mr-6 min-[500px]:mr-6">
                    <a href="#" className="hover:bg-[#5757578f] rounded-lg inline-block p-1">
                        <FilesIcon />
                    </a>
                </li>
            </ul>
        </nav>
    )
} 