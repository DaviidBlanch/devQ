export default function Company() {
    return (
        <div className="bg-[#181818] p-4 w-full rounded-lg hover:bg-[#252525] cursor-pointer">
            <div className="h-full">
                <div className="mb-4 relative">
                    <img src="https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb4293385d324db8558179afd9/es-ES" alt="company" className="object-cover rounded-lg w-full h-full l-0 top-0 shadow-lg shadow-black" />
                </div>
                <div className="min-h-full">
                    <a className="z-1 inline-block max-w-full align-middle lg:text-lg md:text-lg sm:text-lg  text-white font-bold">Capgemini</a>
                    <div className="lg:text-base sm:text-base text-[#6a6a6a]">Valencia</div>
                </div>
            </div>
        </div>
    )
}