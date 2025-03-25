"use client"
import Image from 'next/image'
import IMG_7046 from '../../public/images/IMG_7046.jpg'
import { redirect } from 'next/navigation'

export const ImageGallery = (font) => {
    console.log(font)
    return (
        <div className='flex items-center justify-center group hover:cursor-pointer' onClick={() => { redirect('/gallery') }}>
            <h1 className={`${font.font} absolute z-10 group-hover:visible invisible text-xl font-bold text-black bg-neutral-300 px-2 pointer-events-none`}>View Gallery</h1>
            <div className="hover:opacity-75">
                <Image className="" src={IMG_7046} alt="" />
            </div>
        </div>
    )
}