import Company from "./Company";
import { Link } from "react-router-dom";
import { useFetchCompany } from "../../../hooks/posts";

export default function Companies() {
    const { isLoading, isError, posts, fetchNextPage, hasNextPage } = useFetchCompany()

    return (
        <>
            {posts.length > 0 &&
                <article className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 min-[500px]:grid-cols-2 gap-4 mb-4">
                    {posts.map((post) => (
                        <Link key={post.id} to={`/company/${post.id}`}>
                            <Company posts={post} />
                        </Link>
                    ))}
                </article >
            }

            {isLoading && <strong>Cargando...</strong>}

            {isError && <strong>Ha habido un error</strong>}

            {posts.length === 0 && !isLoading && !isError && <strong>No hay resultados</strong>}

            {!isLoading && !isError && hasNextPage === true && (
                <div className="flex flex-col items-center">
                    <div className="flex space-x-3 md:mt-3">
                        <button
                            onClick={() => { void fetchNextPage() }}
                            className="inline-flex items-center px-3 py-2 lg:text-sm sm:text-sm font-medium text-center text-white bg-[#252525] rounded-lg hover:bg-[#484848]"
                        >
                            Mostrar mas
                        </button>
                    </div>
                </div >
            )}

            {!isLoading && !isError && hasNextPage === false && (
                <div className="flex flex-col items-center">
                    <div className="flex space-x-3 md:mt-3">
                        <button className="mx-auto px-3 py-2 lg:text-sm sm:text-sm font-medium text-center text-[#4343437e] bg-[#43434315] rounded-lg" disabled>
                            Mostrar mas
                        </button>
                    </div>
                </div >
            )}
        </>
    )
}