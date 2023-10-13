/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const fetchCompany = async ({ pageParam = 1, searchParam }: { pageParam?: number, searchParam: string }) => {

    return await fetch(`https://devq-backend.onrender.com/devq/posts?search=${searchParam}&currentPage=${pageParam}`)
        .then(async res => {
            if (!res.ok) throw new Error('Error en la petición')
            return await res.json()
        })
        .then(res => {
            const currentPage = Number(res.currentPage)
            const nextPage = currentPage > (res.totalPosts / 5) ? undefined : currentPage + 1
            return {
                posts: res.posts,
                nextPage,
                totalPosts: res.totalPosts,
                currentPosts: res.currentPosts
            }
        })
}

export const fetchCompanyDetail = async (idParam: number) => {

    return await fetch(`https://devq-backend.onrender.com/devq/post/${idParam}`)
        .then(async res => {
            if (!res.ok) throw new Error('Error en la petición')
            return await res.json()
        })
}