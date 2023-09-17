import { ArrowUpRightIcon } from '../../../assets/Icons'
import { type Posts } from '../../interfaces'

interface Props {
    posts: Posts
}

export default function Company({ posts }: Props) {
    return (
        <div
            className="p-5 flex-col items-center group relative transition-all duration-300 overflow-hidden gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/5 hover:bg-zinc-500/20"
        >
            <div>
                <div className="relative group mx-auto h-40 w-full flex items-center justify-center shadow-lg">
                    <img
                        src={posts.image}
                        alt={posts.company}
                        className="object-contain h-full w-full rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                    />
                    <div
                        className="absolute right-2 bottom-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
                    >
                        <div
                            className="p-1.5 bg-[#121212b0] hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black"
                        >
                            <ArrowUpRightIcon />
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <div
                        className="font-bold block truncate"
                    >
                        {posts.company}
                    </div>
                    <div className="text-gray-400 text-xs">
                        {posts.city}
                    </div>
                </div >
            </div >
        </div >
    )
}