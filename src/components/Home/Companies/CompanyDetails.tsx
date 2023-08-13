import { useState } from "react";
import NavBar from "../NavBar";
import CompanyLogo from "../../../assets/images/NttDataLogo.webp";
import { RedirectIA, FilesIcon } from "../../../assets/Icons";

export default function CompanyDetails() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };

    return (
        <div
            className="relative overflow-y-scroll will-change-scroll h-[calc(100vh-20px)] p-0 pb-0 "
            onScroll={handleScroll}
        >
            <NavBar scroll={isScrolled} />
            <main className="p-4 px-6 pt-3">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                        <div className="max-w-xs rounded-lg text-center">
                            <div className="flex items-center justify-center">
                                <img className="object-cover shadow-lg shadow-black rounded-lg h-auto max-w-full m-0 p-0" src={CompanyLogo} alt="CapeminiLogo" />
                            </div>
                            <div className="p-5">
                                <h5 className="mb-6 z-1 inline-block max-w-full align-middle lg:text-2xl md:text-lg sm:text-lg text-white font-bold">NttData - vlc</h5>
                                <p className="mb-6 lg:text-base sm:text-base text-[#6a6a6a]">Impulsa la excelencia tecnológica a nivel mundial con soluciones innovadoras y servicios de consultoría de primer nivel.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 lg:text-sm sm:text-sm font-medium text-center text-white bg-[#252525] rounded-lg hover:bg-[#484848]">
                                    IA respuestas
                                    <RedirectIA />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg text-center text-white">
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
                        </div>
                        <ul className="list-decimal lg:text-base md:text-base min-[500px]:text-xs min-[500px]:ml-3 pt-3">
                            <li className="mb-3 mt-3 font-semibold">¿Expectativas salariales?</li>
                            <li className="mb-3 font-semibold">¿Por qué has decidido estudiar ingeniería telemática?</li>
                            <li className="mb-3 font-semibold">¿Qué te falta para acabar la carrera?</li>
                            <li className="mb-3 font-semibold">¿Qué haces en tu tiempo libre?</li>
                            <li className="mb-3 font-semibold">¿Qué puedes aportar a la empresa?</li>
                            <li className="mb-3 font-semibold">¿En qué proyecto has trabajado?</li>
                            <li className="mb-3 font-semibold">Háblanos un poco de tu antigua empresa y por qué ya no continuas en ella.</li>
                            <li className="mb-3 font-semibold">¿Estás en más procesos de selección?</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div >
    )
}