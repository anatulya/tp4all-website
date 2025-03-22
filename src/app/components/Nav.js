"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"


export const Nav = () => {
    const pathName = usePathname()

    return (
        <div className="">
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-red-400"><path d="M0 0h24v24H0z" fill="none" /><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
                    {/* <img src="YADIG.png" className="w-16 h-16"/> */}
                    <h1 className="text-red-400 xl:text-7xl text-5xl font-bold">ThinkPads4All</h1>
	   		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-red-400"><path d="M0 0h24v24H0z" fill="none" /><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <h1 className="text-white text-xl font-medium">E-waste & Educational Non-profit</h1>
                </div>
                <div className="pt-2 flex flex-row items-center justify-center space-x-1">
                    <a target="_blank" href="https://www.instagram.com/thinkpads4all">
                        <svg className="w-5 h-5 fill-white" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/@Thinkpads4all">
                        <svg className="w-5 h-5 fill-white" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg>
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@thinkpadsforall">
                        <svg className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-8 sm:space-x-16 pt-8">
                    <Link href="/home" className={`${pathName === "/home" && "underline"} hover:underline underline-offset-8 text-white font-medium`}>Home</Link>
                    <Link href="/events" className={`${pathName === "/events" && "underline"} hover:underline underline-offset-8 text-white font-medium`}>Events</Link>
                    <Link href="/gallery" className={`${pathName.startsWith("/gallery") && "underline"} hover:underline underline-offset-8 text-white font-medium`}>Gallery</Link>
                    <Link href="/workshop" className={`${pathName === "/workshop" && "underline"} hover:underline underline-offset-8 text-white font-medium`}>Workshop</Link>
                    <Link href="/contact" className={`${pathName === "/contact" && "underline"} hover:underline underline-offset-8 text-white font-medium`}>Contact</Link>
                </div>
            </div>
        </div>
    )
}
