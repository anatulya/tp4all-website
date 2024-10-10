import { GalleryListing } from "@/app/components/GalleryListing";
import IMG_1 from '../../../../public/saratoga/1.jpg'
import IMG_2 from '../../../../public/saratoga/2.jpg'
import IMG_3 from '../../../../public/saratoga/3.jpg'
import IMG_4 from '../../../../public/saratoga/4.jpg'
import IMG_5 from '../../../../public/saratoga/5.jpg'
import IMG_6 from '../../../../public/saratoga/6.jpg'
import IMG_7 from '../../../../public/saratoga/7.jpg'
import IMG_8 from '../../../../public/saratoga/8.jpg'
import IMG_9 from '../../../../public/saratoga/9.jpg'
import IMG_10 from '../../../../public/saratoga/10.jpg'
import IMG_11 from '../../../../public/saratoga/11.jpg'
import IMG_12 from '../../../../public/saratoga/12.jpg'
import IMG_13 from '../../../../public/saratoga/13.jpg'
import IMG_14 from '../../../../public/saratoga/14.jpg'
import IMG_15 from '../../../../public/saratoga/15.jpg'
import IMG_16 from '../../../../public/saratoga/16.jpg'
import IMG_17 from '../../../../public/saratoga/17.jpg'
import IMG_18 from '../../../../public/saratoga/18.jpg'
import IMG_19 from '../../../../public/saratoga/19.jpg'
import IMG_20 from '../../../../public/saratoga/20.jpg'


export default function SaratogaLibrary() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_20]

    return (
        <GalleryListing name={"Saratoga Library"} images={images} />

    )   
}