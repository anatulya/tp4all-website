import Image from "next/image";

export default function GalleryPage() {
    return (
        // <div className="flex flex-col">
        //     <div className="flex flex-row items-center text-lg ">
        //         <h1 className="font-semibold text-stone-400">1</h1>
        //         <h1 className="font-semibold pl-4 text-white">Milpitas Library <span className="text-stone-300">(30-35 attendees)</span></h1>
        //     </div>
        //     <div className="pt-2 grid grid-cols-3 gap-4">
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5197.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5194.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5204.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5207.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5208.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5199.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5192.png" />
        // </div>

        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5200.png" />
        // </div>
        // <div>
        //     <Image width={500} height={500} className="h-auto max-w-full" src="/milpitas/IMG_5210.png" />
        // </div>
        //     </div>
        //     <div className="pt-16 flex flex-row items-center text-lg ">
        //         <h1 className="font-semibold text-stone-400">2</h1>
        //         <h1 className="font-semibold pl-4 text-white">Saratoga Library <span className="text-stone-300">(~25 attendees)</span></h1>
        //     </div>
        //     <div className="pt-2 grid grid-cols-3 gap-4">
        //         <div>
        //             <Image width={500} height={500} className="h-auto max-w-full" src="/saratoga/IMG_5002-1.jpg" />
        //         </div>
        //         <div>
        //             <Image width={500} height={500} className="h-auto max-w-full" src="/saratoga/IMG_4990-1.jpg" />
        //         </div>
        //         <div>
        //             <Image width={500} height={500} className="h-auto max-w-full" src="/saratoga/IMG_5010-1.jpg" />
        //         </div>
        //         <div>
        //             <Image width={500} height={500} className="h-auto max-w-full" src="/saratoga/IMG_5007-1.jpg" />
        //         </div>
        //         <div>
        //             <Image width={500} height={500} className="h-auto max-w-full" src="/saratoga/IMG_5008-1.jpg" />
        //         </div>
        //         <div>
        //             <Image width={500} height={500} className="h-auto max-w-full" src="/saratoga/IMG_4995-1.jpg" />
        //         </div>
        //     </div>
        // </div>

        <div className="flex flex-row gap-8 flex-wrap justify-center">
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
    )
}
