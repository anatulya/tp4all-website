import { GalleryListing } from "@/app/components/GalleryListing";

import IMG_1 from '../../../../public/morgan_hill/1.jpg'
import IMG_2 from '../../../../public/morgan_hill/2.jpg'
import IMG_3 from '../../../../public/morgan_hill/3.jpg'
import IMG_4 from '../../../../public/morgan_hill/4.jpg'
import IMG_5 from '../../../../public/morgan_hill/5.jpg'
import IMG_6 from '../../../../public/morgan_hill/6.jpg'
import IMG_7 from '../../../../public/morgan_hill/7.jpg'
import IMG_8 from '../../../../public/morgan_hill/8.jpg'
import IMG_9 from '../../../../public/morgan_hill/9.jpg'
import IMG_10 from '../../../../public/morgan_hill/10.jpg'
import IMG_11 from '../../../../public/morgan_hill/11.jpg'

export default function MorganHillLibrary() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11]
    return (
        
        <GalleryListing name={"Morgan Hill Library"} images={images} />

    )
}