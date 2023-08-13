import FilterQuestions from "./FilterQuestions";

export default function Questions() {
    return (
        <section>
            <FilterQuestions />
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
        </section>
    )
}