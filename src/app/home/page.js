import { inconsolata, inter } from "../layout";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { ImageGallery } from "@/components/ImageGallery";
import Avatars from "@/components/Avatars";
import THINKLAB from '../../../public/t4-removebg-preview.png'
import SWIVEL from '../../../public/t480swivel-removebg-preview.png'

export default function HomePage() {
    return (
        <div>
            <div className="flex flex-col mt-8 space-y-4">
                {/* <div className="flex flex-row items-center">
                 <svg className="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"/></g></svg>
                  <h1 className={`${inconsolata.className} font-semibold text-2xl`}>home</h1>
                </div> */}
                {/* <div className={`flex flex-row items-center text-lg ${inconsolata.className}`}>
                    <h1 className="">ThinkPads4All</h1>
                    <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    <h1 className="text-neutral-300">Home</h1>
                </div> */}
                <div className={`flex flex-row items-center text-lg pb-2 ${inconsolata.className}`}>
                    <Link href="/home"><h1 className="hover:text-white">ThinkPads4All</h1></Link>
                    <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    <Link href="/home"><h1 className="text-neutral-300 hover:text-white">Home</h1></Link>
                </div>

                    <div className="grid grid-cols-5 gap-8 mt-2">
                    <div className="col-span-3">
                        <ImageGallery font={inconsolata.className} />
                    </div>
                    <div className="col-span-2 flex flex-col  text-neutral-100">
                        <div className=" flex flex-row justify-between text-white">
                            <h1 className="font-semibold text-2xl">Events</h1>
                            <Link href="/events" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">See All</h1>
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
                                </div>
                            </Link>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>Cupertino Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">3/22</h1>
                                </div>
                            </a>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>Mountain View Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">3/28</h1>
                                </div>
                            </a>
                        </div>


                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>Fremont Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">4/25</h1>
                                </div>
                            </a>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>Oakland Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">5/21</h1>
                                </div>
                            </a>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>Berkeley Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">5/28</h1>
                                </div>
                            </a>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>San Jose Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">7/12</h1>
                                </div>
                            </a>
                        </div>

                        
                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>San Jose Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">7/19</h1>
                                </div>
                            </a>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>Fremont Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">7/20</h1>
                                </div>
                            </a>
                        </div>

                        <div className={`${inconsolata.className}  flex flex-row justify-between`}>
                            <h1 className={`text-xl`}>San Jose Library</h1>
                            <a href="#" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">8/9</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col ${inconsolata.className}`}>
                    {/* <h1 className={`font-semibold text-2xl ${inter.className}`}>ThinkLab</h1>
                    <div className="mt-4 bg-gradient-to-r from-stone-900 to-stone-700 p-16 rounded flex justify-between">
                        <h1 className="text-neutral-300 font-bold text-2xl">Coming Soon</h1>
                        <h1 className="text-neutral-300 font-bold text-2xl">Research & Projects</h1>
                        <h1 className="text-neutral-300 font-bold text-2xl">Blogs & Videos</h1>
                        <h1 className="text-neutral-300 font-bold text-2xl">Beyond ThinkPads</h1>
                    </div> */}
                </div>
                <div className={`flex flex-col border-b border-gray-500 pb-10 ${inter.className}`}>
                    <p className="text-lg">We hate seeing old laptops go to waste—so, we rescue them, repurpose them in hands-on workshops, and teach real tech skills to avoid it from happening altogether. If you want to learn more about our workshops, or join us in our journey, take a look at our <Link href="/workshops"><span className={`text-red-500 hover:text-red-400 ${inconsolata.className}`}>workshops</span></Link> page.</p>
                </div>
            </div>

            <div className={` flex flex-col mt-10 ${inter.className}`}>
                    {/* <h1>hi</h1> */}
                <h1 className="font-semibold text-sm">ThinkLab</h1>
                <div className="flex flex-row justify-between">
                <h1 className="font-semibold text-2xl">Upcoming Projects</h1>
                <Link href="" className="">
                                <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">See All</h1>
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
                                </div>
                            </Link>
                </div>
                <div className="flex-col">
                    <div className="grid grid-cols-3 mt-8">
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-neutral-100 text-lg">Hot-Swappable Port Sockets</h1>
                            <h1 className="text-neutral-200 text-md">Redesigning the ThinkPad T480 with hot-swappable port sockets to streamline repairs and improve durability.</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                         <Image className="w-80" src={THINKLAB} alt={""}></Image>
                        </div>
                            <Avatars />
                        <div>

                        </div>
                    </div>
                    <div className="grid grid-cols-3 mt-8">
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-neutral-100 text-lg">180 Degree Screen Swivel</h1>
                            <h1 className="text-neutral-200 text-md">Taking inspiration from the x220, we are removing the hinges and implementing a twistable screen on the ThinkPad T480.</h1>
                        </div>
                        <div className="flex flex-row justify-end">
                         <Image className="w-80" src={SWIVEL} alt={""}></Image>
                        </div>
                            <Avatars />
                        <div>
                                
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}