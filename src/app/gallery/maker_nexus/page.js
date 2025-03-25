import { GalleryListing } from '@/components/GalleryListing'
import IMG_1 from '../../../../public/mk_nexus/1.jpg'
import IMG_2 from '../../../../public/mk_nexus/2.jpg'
import IMG_3 from '../../../../public/mk_nexus/3.jpg'
import IMG_4 from '../../../../public/mk_nexus/4.jpg'
import IMG_5 from '../../../../public/mk_nexus/5.jpg'
import IMG_6 from '../../../../public/mk_nexus/6.jpg'
import IMG_7 from '../../../../public/mk_nexus/7.jpg'
import IMG_8 from '../../../../public/mk_nexus/8.jpg'
import IMG_9 from '../../../../public/mk_nexus/9.jpg'
import IMG_10 from '../../../../public/mk_nexus/10.jpg'
import IMG_11 from '../../../../public/mk_nexus/11.jpg'
import IMG_12 from '../../../../public/mk_nexus/12.jpg'
import IMG_13 from '../../../../public/mk_nexus/13.jpg'
import IMG_14 from '../../../../public/mk_nexus/14.jpg'
import IMG_15 from '../../../../public/mk_nexus/15.jpg'
import IMG_16 from '../../../../public/mk_nexus/16.jpg'
import IMG_17 from '../../../../public/mk_nexus/17.jpg'
import IMG_18 from '../../../../public/mk_nexus/18.jpg'
import IMG_19 from '../../../../public/mk_nexus/19.jpg'
import IMG_20 from '../../../../public/mk_nexus/20.jpg'


export default function MakerSpaceNexus() {
    const images = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_20]

    return (
        <GalleryListing name={"Maker Space Nexus x FixitClinic"} images={images} />
    )   
}