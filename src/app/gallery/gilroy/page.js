import { GalleryListing } from "@/app/components/GalleryListing";
import IMG_1 from '../../../../public/gilroy/1.jpg'
import IMG_2 from '../../../../public/gilroy/2.jpg'
import IMG_3 from '../../../../public/gilroy/3.jpg'
import IMG_4 from '../../../../public/gilroy/4.jpg'
import IMG_5 from '../../../../public/gilroy/5.jpg'
import IMG_6 from '../../../../public/gilroy/6.jpg'
import IMG_7 from '../../../../public/gilroy/7.jpg'
import IMG_8 from '../../../../public/gilroy/8.jpg'
import IMG_9 from '../../../../public/gilroy/9.jpg'
import IMG_10 from '../../../../public/gilroy/10.jpg'
import IMG_11 from '../../../../public/gilroy/11.jpg'
import IMG_12 from '../../../../public/gilroy/12.jpg'
import IMG_13 from '../../../../public/gilroy/13.jpg'
import IMG_14 from '../../../../public/gilroy/14.jpg'
import IMG_15 from '../../../../public/gilroy/15.jpg'
import IMG_16 from '../../../../public/gilroy/16.jpg'
import IMG_17 from '../../../../public/gilroy/17.jpg'
import IMG_18 from '../../../../public/gilroy/18.jpg'
import IMG_19 from '../../../../public/gilroy/19.jpg'
import IMG_20 from '../../../../public/gilroy/20.jpg'
import IMG_21 from '../../../../public/gilroy/21.jpg'
import IMG_22 from '../../../../public/gilroy/22.jpg'
import IMG_23 from '../../../../public/gilroy/23.jpg'
import IMG_24 from '../../../../public/gilroy/24.jpg'
import IMG_25 from '../../../../public/gilroy/25.jpg'
import IMG_26 from '../../../../public/gilroy/26.jpg'
import IMG_27 from '../../../../public/gilroy/27.jpg'
import IMG_28 from '../../../../public/gilroy/28.jpg'
import IMG_29 from '../../../../public/gilroy/29.jpg'
import IMG_30 from '../../../../public/gilroy/30.jpg'
import IMG_31 from '../../../../public/gilroy/31.jpg'
import IMG_32 from '../../../../public/gilroy/32.jpg'
import IMG_33 from '../../../../public/gilroy/33.jpg'
import IMG_34 from '../../../../public/gilroy/34.jpg'
import IMG_35 from '../../../../public/gilroy/35.jpg'

export default function GilroyGallery() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_20, IMG_21, IMG_22, IMG_23, IMG_24, IMG_25, IMG_26, IMG_27, IMG_28, IMG_29, IMG_30, IMG_31, IMG_32, IMG_33, IMG_34, IMG_35]

    return (
        <GalleryListing name={"Gilroy Library"} images={images} />

    )
}