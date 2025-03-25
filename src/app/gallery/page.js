import Link from "next/link";
import { inconsolata } from "../layout";
export default function GalleryPage()
{
    return (
        <div className={`${inconsolata.className} mt-8`}>
                <div className={`flex flex-row items-center text-lg pb-2 ${inconsolata.className}`}>
                    <Link href="/home"><h1 className="hover:text-white">ThinkPads4All</h1></Link>
                    <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    <Link href="/gallery"><h1 className="text-neutral-300 hover:text-white">Gallery</h1></Link>
                </div>

            
        <div className="flex flex-row gap-8 flex-wrap justify-center mt-8">
            <div className="">
                <a href="/gallery/cupertino" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64  rounded-lg group-hover:outline outline-2 outline-neutral-300 " style={{ backgroundImage: "url(/cupertino/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Cupertino Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">40+ attendees</div>
                    </div>
                </a>
            </div>
            <div className="">
                <a href="/gallery/milpitas" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64 rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/milpitas/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Milpitas Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">35+ attendees</div>

                    </div>
                </a>
            </div>
            <div className="">
                <a href="/gallery/burlingame" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64 rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/burlingame/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Burlingame Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">30 attendees</div>

                    </div>
                </a>
            </div>
            <div className="">
                <a href="/gallery/maker_nexus" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64 rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/mk_nexus/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">MakerSpace Nexus x FixitClinic</div>
                        <div className="text-neutral-300 font-semibold text-sm">25-30 attendees</div>

                    </div>
                </a>
            </div>
            <div className="">
                <a href="/gallery/saratoga" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64  rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/saratoga/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Saratoga Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">25 attendees</div>

                    </div>
                </a>
            </div>

            <div className="">
                <a href="/gallery/gilroy" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64  rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/gilroy/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Gilroy Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">15 attendees</div>
                    </div>
                </a>
            </div>

            <div className="">
                <a href="/gallery/los_altos" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64  rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/los_altos/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Los Altos Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">10 attendees</div>
                    </div>
                </a>
            </div>

            <div className="">
                <a href="/gallery/morgan_hill" className="group">
                    <div className="flex flex-col ">
                        {/* <img src="/milpitas/thumbnail.jpg" className="rounded-lg" /> */}
                        <div className="w-64 h-64  rounded-lg group-hover:outline outline-2 outline-neutral-300" style={{ backgroundImage: "url(/morgan_hill/thumbnail.jpg)", backgroundSize: "cover" }} />
                        <div className="pt-2 text-white font-semibold">Morgan Hill Library</div>
                        <div className="text-neutral-300 font-semibold text-sm">10 attendees</div>
                    </div>
                </a>
            </div>



        </div>
        </div>
        
    );
}