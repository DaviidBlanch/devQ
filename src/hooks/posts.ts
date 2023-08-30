/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchCompany, fetchCompanyDetail } from "../services/posts";
import { Posts } from "../components/interfaces";

export const useFetchCompany = () => {
    const { isLoading, isError, data, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextPage?: number, posts: Posts[] }>(
        ['companies'],
        fetchCompany,
        {
            getNextPageParam: (lastPage) => lastPage.nextPage
        }
    )

    return {
        isLoading,
        isError,
        posts: data?.pages.flatMap(page => page.posts) ?? [],
        fetchNextPage,
        hasNextPage
    }

}

export const useFetchCompanyDetail = (id: number) => {

    const { isLoading, isError, data: post = [] } = useQuery(
        ['companyDetail', id],
        async () => await fetchCompanyDetail(id)
    )

    return {
        isLoading,
        isError,
        post
    }

}