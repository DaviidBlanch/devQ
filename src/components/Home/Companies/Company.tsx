import Capgemini from "../../../assets/images/NttDataLogo.webp"

export default function Company() {
    return (
        <div className="bg-[#181818] p-4 w-full rounded-lg hover:bg-[#252525] cursor-pointer">
            <div className="h-full">
                <div className="mb-4">
                    <img src={Capgemini} alt="company" className="object-cover rounded-lg w-full h-full l-0 top-0 shadow-lg shadow-black" />
                </div>
                <div className="min-h-full">
                    <span className="z-1 inline-block max-w-full align-middle lg:text-lg md:text-lg sm:text-lg text-white font-bold">Capgemini</span>
                    <div className="lg:text-base sm:text-base text-[#6a6a6a]">Valencia</div>
                </div>
            </div>
        </div>
    )
}