"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Nav = (font) => {
    const pathName = usePathname()

    return (
        // <div className="flex flex-row w-full justify-between text-white border-b border-white">
        //     <h1>ThinkPads4All 501(c)(3)</h1>
        //     <a href="#" className="fill-white">
        //         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        //     </a>
        // </div>
        <div className={`flex flex-row w-full pb-2 border-white justify-between ${font.font}`}>
            <Link href="/home">
            <div className="flex flex-row items-center">
            <svg className="fill-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                <h1 className={`text-white font-bold text-xl ${font.font}`}>ThinkPads4All</h1>
            </div>
            </Link>

            <div className="flex flex-row space-x-8 text-lg">
                <Link href="/home" className={`${pathName === "/home" ? "text-red-500" : "hover:text-red-500"}`}>Home</Link>
                <Link href="/events" className={`${pathName === "/events" ? "text-red-500" : "hover:text-red-500"}`}>Events</Link>
                <Link href="/workshops" className={`${pathName === "/workshops" ? "text-red-500" : "hover:text-red-500"}`}>Workshops</Link>
                <Link href="/gallery" className={`${pathName === "/gallery" ? "text-red-500" : "hover:text-red-500"}`}>Gallery</Link>
                <Link href="/contact" className={`${pathName === "/contact" ? "text-red-500" : "hover:text-red-500"}`}>Contact</Link>
            </div>

        </div>
    )
}