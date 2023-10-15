/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import NavBar from "../../Header/NavBar";
import Background from "../Background";
import { useParams } from "react-router-dom";
import { useFetchCompanyDetail } from "../../../hooks/posts";
import Questions from "./Questions";

export default function CompanyDetails() {

    const { id } = useParams();

    const { isLoading, isError, post } = useFetchCompanyDetail(id as unknown as number)

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setIsScrolled(event.currentTarget.scrollTop > 0);
    };

    return (
        <Background handleScroll={handleScroll}>
            <NavBar scroll={isScrolled} />
            {post !== undefined && !isLoading && !isError && (
                <article>
                    <div
                        className="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden"
                    >
                        <header className="flex flex-row gap-8 px-6 mt-6">
                            <picture className="aspect-square w-52 h-52 flex-none">
                                <img
                                    src={post.image}
                                    alt={`Logo de ${post.image}`}
                                    className="object-contain w-full h-full shadow-lg"
                                />
                            </picture>
                            <div className="flex flex-col justify-between">
                                <h2 className="flex flex-1 items-end">{post.city}</h2>
                                <div>
                                    <h1 className="text-5xl font-bold block text-white">
                                        {post.company}
                                    </h1>
                                </div>

                                <div className="flex-1 flex items-end">
                                    <div className="text-sm text-gray-300 font-normal">
                                        <div>
                                            <span>{post.description}</span>
                                        </div>
                                        <p className="mt-1">
                                            <span className="text-white">{post.create_date} - {post.questions.length === 1 ? `${post.questions.length} pregunta` : `${post.questions.length} preguntas`}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="relative z-10 px-6 pt-10"></div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"
                        >
                        </div>
                        <section className="p-6">
                            <Questions {...post} />
                        </section>
                    </div >
                </article >
            )}

            {isLoading && <strong>Cargando...</strong>}

            {isError && <strong>Ha habido un error</strong>}

            {(post.length === 0 || post === undefined) && !isLoading && !isError && <strong>No hay resultados</strong>}
        </Background >
    )
}