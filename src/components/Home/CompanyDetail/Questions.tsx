import { RedirectIA } from "../../../assets/Icons";
import { Posts } from "../../interfaces";

export default function Questions(post: Posts) {
    return (
        <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
            <thead className="">
                <tr className="text-zinc-400 text-sm">
                    <th className="px-4 py-2 font-light">#</th>
                    <th className="px-4 py-2 font-light">Pregunta</th>
                    <th className="px-4 py-2 font-light">Experiencia</th>
                    <th className="px-4 py-2 font-light">IA</th>
                </tr>
            </thead>
            <tbody>
                <tr className="h-[16px]"></tr>
                {
                    post.questions.map((question, index) => (
                        <tr
                            key={post.id}
                            className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300"
                        >
                            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">{index + 1}</td>
                            <td className="px-4 py-2 flex gap-3">
                                <div className="flex flex-col">
                                    <h3 className="text-white text-base font-normal">{question}</h3>
                                </div>
                            </td>
                            <td className="px-4 py-2">{post.experience}</td>
                            <td className="px-4 py-2">
                                <RedirectIA />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
} 