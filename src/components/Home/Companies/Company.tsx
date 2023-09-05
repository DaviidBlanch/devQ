import { type Posts } from '../../interfaces'

interface Props {
    posts: Posts
}

export default function Company({ posts }: Props) {
    return (
        < div className="bg-[#181818] p-4 w-full h-[290px] rounded-lg hover:bg-[#252525] cursor-pointer flex flex-col" >
            <div className="mb-3 flex justify-center">
                <img src={posts.image} alt={posts.company} className="object-contain w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg" />
            </div>
            <div className="pl-2">
                <span className="z-1 block max-w-full lg:text-lg md:text-lg sm:text-lg text-white font-bold">{posts.company}</span>
                <div className="lg:text-base sm:text-base text-[#6a6a6a]">{posts.city}</div>
            </div>
        </div >
    )
}