import { GalleryListing } from "@/app/components/GalleryListing";

import IMG_1 from '../../../../public/los_altos/1.jpg'
import IMG_2 from '../../../../public/los_altos/2.jpg'
import IMG_3 from '../../../../public/los_altos/3.jpg'
import IMG_4 from '../../../../public/los_altos/4.jpg'
import IMG_5 from '../../../../public/los_altos/5.jpg'
import IMG_6 from '../../../../public/los_altos/6.jpg'
import IMG_7 from '../../../../public/los_altos/7.jpg'
import IMG_8 from '../../../../public/los_altos/8.jpg'
import IMG_9 from '../../../../public/los_altos/9.jpg'
import IMG_10 from '../../../../public/los_altos/10.jpg'
import IMG_11 from '../../../../public/los_altos/11.jpg'
import IMG_12 from '../../../../public/los_altos/12.jpg'


export default function LosAltosGallery() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11, IMG_12]

    return (
        <GalleryListing name={"Los Altos Library"} images={images} />

    )
}