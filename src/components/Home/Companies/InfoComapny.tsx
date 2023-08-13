import CompanyLogo from "../../../assets/images/NttDataLogo.webp";
import { RedirectIA } from "../../../assets/Icons";

export default function InfoCompany() {
    return (
        <section className="flex justify-center">
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
        </section>
    )
}