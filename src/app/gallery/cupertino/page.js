
import IMG_1 from '../../../../public/cupertino/1.jpg'
import IMG_2 from '../../../../public/cupertino/2.jpg'
import IMG_3 from '../../../../public/cupertino/3.jpg'
import IMG_4 from '../../../../public/cupertino/4.jpg'
import IMG_5 from '../../../../public/cupertino/5.jpg'
import IMG_6 from '../../../../public/cupertino/6.jpg'
import IMG_7 from '../../../../public/cupertino/7.jpg'
import IMG_8 from '../../../../public/cupertino/8.jpg'
import IMG_9 from '../../../../public/cupertino/9.jpg'
import IMG_10 from '../../../../public/cupertino/10.jpg'
import IMG_11 from '../../../../public/cupertino/11.jpg'
import IMG_12 from '../../../../public/cupertino/12.jpg'
import IMG_13 from '../../../../public/cupertino/13.jpg'
import IMG_14 from '../../../../public/cupertino/14.jpg'
import IMG_15 from '../../../../public/cupertino/15.jpg'
import IMG_16 from '../../../../public/cupertino/16.jpg'
import IMG_17 from '../../../../public/cupertino/17.jpg'
import IMG_18 from '../../../../public/cupertino/18.jpg'
import IMG_19 from '../../../../public/cupertino/19.jpg'
import IMG_20 from '../../../../public/cupertino/20.jpg'
import IMG_21 from '../../../../public/cupertino/21.jpg'
import IMG_22 from '../../../../public/cupertino/22.jpg'
import IMG_23 from '../../../../public/cupertino/23.jpg'
import IMG_24 from '../../../../public/cupertino/24.jpg'
import IMG_25 from '../../../../public/cupertino/25.jpg'
import { GalleryListing } from '@/app/components/GalleryListing'

export default function CupertinoGallery() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_20, IMG_21, IMG_22, IMG_23, IMG_24, IMG_25]
    return (
        <GalleryListing name={"Cupertino Library"} images={images} />

    )
}