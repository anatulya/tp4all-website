import IMG_1 from '../../../../public/milpitas/1.jpg'
import IMG_2 from '../../../../public/milpitas/2.jpg'
import IMG_3 from '../../../../public/milpitas/3.jpg'
import IMG_4 from '../../../../public/milpitas/4.jpg'
import IMG_5 from '../../../../public/milpitas/5.jpg'
import IMG_6 from '../../../../public/milpitas/6.jpg'
import IMG_7 from '../../../../public/milpitas/7.jpg'
import IMG_8 from '../../../../public/milpitas/8.jpg'
import IMG_9 from '../../../../public/milpitas/9.jpg'
import IMG_10 from '../../../../public/milpitas/10.jpg'
import IMG_11 from '../../../../public/milpitas/11.jpg'
import IMG_12 from '../../../../public/milpitas/12.jpg'
import IMG_13 from '../../../../public/milpitas/13.jpg'
import IMG_14 from '../../../../public/milpitas/14.jpg'
import IMG_15 from '../../../../public/milpitas/15.jpg'
import IMG_16 from '../../../../public/milpitas/16.jpg'
import IMG_17 from '../../../../public/milpitas/17.jpg'
import IMG_18 from '../../../../public/milpitas/18.jpg'
import IMG_19 from '../../../../public/milpitas/19.jpg'
import IMG_20 from '../../../../public/milpitas/20.jpg'
import IMG_21 from '../../../../public/milpitas/21.jpg'
import IMG_22 from '../../../../public/milpitas/22.jpg'
import IMG_23 from '../../../../public/milpitas/23.jpg'
import IMG_24 from '../../../../public/milpitas/24.jpg'
import IMG_25 from '../../../../public/milpitas/25.jpg'
import IMG_26 from '../../../../public/milpitas/26.jpg'
import IMG_27 from '../../../../public/milpitas/27.jpg'
import { GalleryListing } from '@/app/components/GalleryListing'

export default function MilpitasGallery() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_20, IMG_21, IMG_22, IMG_23, IMG_24, IMG_25, IMG_26, IMG_27]
    return (
        <GalleryListing name={"Milpitas Library"} images={images} />

    )
}