"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const Nav = ({font}) => {
    const pathName = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        // <div className="flex flex-row w-full justify-between text-white border-b border-white">
        //     <h1>ThinkPads4All 501(c)(3)</h1>
        //     <a href="#" className="fill-white">
        //         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        //     </a>
        // </div>
        <div className="">
        <div className={`flex flex-row w-full pb-2 border-white items-center justify-between ${font}`}>
            <Link href="/home">
            <div className="flex flex-row items-center">
            <svg className="fill-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                <h1 className={`text-white font-bold text-xl ${font}`}>ThinkPads4All</h1>
            </div>
            </Link>

            <div className="hidden sm:flex flex-row space-x-8 text-lg sm:visible">
                <Link href="/home" className={`${pathName === "/home" ? "text-red-500" : "hover:text-red-500"}`}>Home</Link>
                <Link href="/events" className={`${pathName === "/events" ? "text-red-500" : "hover:text-red-500"}`}>Events</Link>
                <Link href="/workshops" className={`${pathName === "/workshops" ? "text-red-500" : "hover:text-red-500"}`}>Workshops</Link>
                <Link href="/gallery" className={`${pathName === "/gallery" ? "text-red-500" : "hover:text-red-500"}`}>Gallery</Link>
                <Link href="/contact" className={`${pathName === "/contact" ? "text-red-500" : "hover:text-red-500"}`}>Contact</Link>
            </div>
            
            <div className="visible sm:hidden" onClick={() => { setMobileOpen(!mobileOpen) }}>
                {
                   !mobileOpen ? (<svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                     )  : (<svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                )}

            </div>
        </div>

            {/* Full-Screen Mobile Menu */}
            {mobileOpen && (
              <div className={`h-[100vh] w-full fixed  flex flex-col z-40 bg-stone-900 text-white px-0`}>
                    {/* Close Button */}
             

                    {/* Mobile Links */}
                    <h1 className="text-2xl font-semibold">Pages</h1>
                    <div  className={`${font} flex flex-col pl-3 text-xl space-y-8 pt-2 mt-4 ml-1.5 border-l border-neutral-500`}>
                        <Link href="/home" className="hover:text-red-500" onClick={() => setMobileOpen(false)}>Go to <span className="text-red-500">Home</span></Link>
                        <Link href="/events" className="hover:text-red-500" onClick={() => setMobileOpen(false)}>Go to <span className="text-red-500">Events</span></Link>
                        <Link href="/workshops" className="hover:text-red-500" onClick={() => setMobileOpen(false)}>Go to <span className="text-red-500">Workshops</span></Link>
                        <Link href="/gallery" className="hover:text-red-500" onClick={() => setMobileOpen(false)}>Go to <span className="text-red-500">Gallery</span></Link>
                        <Link href="/contact" className="hover:text-red-500" onClick={() => setMobileOpen(false)}>Go to <span className="text-red-500">Contact</span></Link>
                    </div>
                </div>
            )}
        </div>
       
    )
}