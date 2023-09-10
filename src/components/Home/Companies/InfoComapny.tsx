import { RedirectIA } from "../../../assets/Icons";

export default function InfoCompany({ image, company, description, city }: {
    image: string, company: string, description: string, city: string;
},) {
    return (
        <section className="flex justify-center">
            <div className="max-w-xs rounded-lg text-center">
                <div className="flex items-center justify-center">
                    <img className="object-contain rounded-lg w-52 h-52 m-0 p-0" src={image} alt={`${image}Logo`} />
                </div>
                <div className="p-5">
                    <h5 className="mb-6 z-1 inline-block max-w-full align-middle lg:text-2xl md:text-lg sm:text-lg text-white font-bold">{`${company} - ${city}`}</h5>
                    <p className="mb-6 lg:text-base sm:text-base text-[#6a6a6a]">{description}</p>
                    <button className="inline-flex items-center px-3 py-2 lg:text-sm sm:text-sm font-medium text-center text-white bg-[#252525] rounded-lg hover:bg-[#484848]">
                        IA respuestas
                        <RedirectIA />
                    </button>
                </div>
            </div>
        </section>
    )
}