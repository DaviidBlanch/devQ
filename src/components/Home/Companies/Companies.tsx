/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Company from "./Company";
import { Link } from "react-router-dom";
import { type Posts } from "../../interfaces"
import { useInfiniteQuery } from "@tanstack/react-query"

const fetchCompany = async ({ pageParam = 1 }: { pageParam?: number }) => {

    return await fetch(`https://devq-backend.onrender.com/devq/posts?currentPage=${pageParam}`)
        .then(async res => {
            if (!res.ok) throw new Error('Error en la petición')
            return await res.json()
        })
        .then(res => {
            const currentPage = Number(res.currentPage)
            const nextPage = currentPage > (res.totalPosts / 3) ? undefined : currentPage + 1
            return {
                posts: res.posts,
                nextPage,
                totalPosts: res.totalPosts
            }
        })

}

export default function Companies() {
    const { isLoading, isError, data, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextPage?: number, posts: Posts[] }>(
        ['companies'],
        fetchCompany,
        {
            getNextPageParam: (lastPage) => lastPage.nextPage
        }
    )

    const posts: Posts[] = data?.pages?.flatMap(page => page.posts) ?? []

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

            {posts.length === 0 && isLoading && !isError && <strong>No hay resultados</strong>}

            {!isLoading && !isError && hasNextPage === true && <button className="p-0" onClick={() => { void fetchNextPage() }}>Mostrar mas</button>}

            {!isLoading && !isError && hasNextPage === false && <button className="p-0 text-red-600" disabled>Mostrar mas</button>}
        </>
    )
}