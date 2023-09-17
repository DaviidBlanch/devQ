import Company from "./Company";
import { Link, useParams } from "react-router-dom";
import { useFetchCompany } from "../../../hooks/posts";
import { usePanel } from "../../../useContext/PanelProvider";

export default function Companies() {
    const { search } = useParams();
    const searchQuery = search || "";

    const { isLoading, isError, posts, fetchNextPage, hasNextPage } = useFetchCompany(searchQuery)
    const { isPanel } = usePanel()

    return (
        <>
            {
                posts.length > 0 &&
                <article className={`grid ${isPanel ? 'lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 min-[500px]:grid-cols-1' : 'lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 min-[500px]:grid-cols-2'} md:grid-cols-4 sm:grid-cols-3 min-[500px]:grid-cols-2 gap-4 mb-4`}>
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

            {
                !isLoading && !isError && hasNextPage === true && (
                    <div className="flex flex-col items-center">
                        <div className="flex space-x-3 md:mt-3">
                            <button
                                onClick={() => { void fetchNextPage() }}
                                className="inline-flex items-center px-3 py-2 lg:text-sm sm:text-sm font-medium text-center text-white bg-zinc-500/5 rounded-lg hover:bg-zinc-500/20"
                            >
                                Mostrar más
                            </button>
                        </div>
                    </div >
                )
            }

            {!isLoading && !isError && hasNextPage === false && <></>}
        </>
    )
}