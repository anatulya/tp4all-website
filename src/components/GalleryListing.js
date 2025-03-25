import Image from 'next/image'
import { inconsolata } from '@/app/layout'
import Link from 'next/link'

export const GalleryListing = ({ name, images }) => {
    return (
        <div className='flex flex-col mt-8'>
            <div className={`flex flex-row items-center text-lg pb-2 ${inconsolata.className}`}>
                    <Link href="/home"><h1 className="hover:text-white">ThinkPads4All</h1></Link>
                    <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    <Link href="/gallery"><h1 className="text-neutral-300 hover:text-white">Gallery</h1></Link>
                    <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    <Link href=""><h1 className="text-neutral-300 hover:text-white">{name}</h1></Link>
                </div>


            <div className="flex flex-col items-center">
                <section className="flex flex-wrap after:content-[''] after:flex-grow-[99999999] gap-2">
                    {images.map((img, i) => (
                        <div key={i} style={{ width: img.width * 275 / img.height, flexGrow: img.width * 275 / img.height }}>
                            <i style={{ paddingBottom: `${img.height / img.width * 100}%` }}></i>
                            <Image src={img} alt="" />
                        </div>
                    ))}


                </section>
            </div>
        </div>


    )
}