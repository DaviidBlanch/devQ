/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Posts } from "../../interfaces";
import FilterQuestions from "./FilterQuestions";

export default function Questions(post: Posts) {

    return (
        <section>
            <FilterQuestions />
            <ul className="list-decimal lg:text-base md:text-base min-[500px]:text-xs min-[500px]:ml-3 pt-3">
                {post.questions.map((question, index) => (
                    <li key={index} className="mb-3 mt-3 font-semibold">{question}</li>
                ))}
            </ul>
        </section>
    )
}