/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import NavBar from "../../Header/NavBar";
import Background from "../Background";
import InfoCompany from "./InfoComapny";
import Questions from "./Questions";
import { useParams } from "react-router-dom";
import { useFetchCompanyDetail } from "../../../hooks/posts";

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
            <article className="p-4 px-6 pt-3">
                <div className="grid grid-cols-2 gap-4">

                    {post !== undefined && !isLoading && !isError && (
                        <>
                            <InfoCompany image={post.image} company={post.company} description={post.description} city={post.city} />
                            <Questions {...post} />
                        </>
                    )}

                    {isLoading && <strong>Cargando...</strong>}

                    {isError && <strong>Ha habido un error</strong>}

                    {(post.length === 0 || post === undefined) && !isLoading && !isError && <strong>No hay resultados</strong>}
                </div>
            </article>
        </Background >
    )
}