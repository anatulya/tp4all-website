import IMG_1 from '../../../../public/burlingame/1.jpg'
import IMG_2 from '../../../../public/burlingame/2.jpg'
import IMG_3 from '../../../../public/burlingame/3.jpg'
import IMG_4 from '../../../../public/burlingame/4.jpg'
import IMG_5 from '../../../../public/burlingame/5.jpg'
import IMG_6 from '../../../../public/burlingame/6.jpg'
import IMG_7 from '../../../../public/burlingame/7.jpg'
import IMG_8 from '../../../../public/burlingame/8.jpg'
import IMG_9 from '../../../../public/burlingame/9.jpg'
import IMG_10 from '../../../../public/burlingame/10.jpg'
import IMG_11 from '../../../../public/burlingame/11.jpg'
import IMG_12 from '../../../../public/burlingame/12.jpg'
import IMG_13 from '../../../../public/burlingame/13.jpg'
import IMG_14 from '../../../../public/burlingame/14.jpg'
import IMG_15 from '../../../../public/burlingame/15.jpg'
import IMG_16 from '../../../../public/burlingame/16.jpg'
import IMG_17 from '../../../../public/burlingame/17.jpg'
import IMG_18 from '../../../../public/burlingame/18.jpg'
import IMG_19 from '../../../../public/burlingame/19.jpg'
import IMG_20 from '../../../../public/burlingame/20.jpg'
import IMG_21 from '../../../../public/burlingame/21.jpg'
import IMG_22 from '../../../../public/burlingame/22.jpg'
import IMG_23 from '../../../../public/burlingame/23.jpg'
import IMG_24 from '../../../../public/burlingame/24.jpg'
import IMG_25 from '../../../../public/burlingame/25.jpg'
import { GalleryListing } from '@/components/GalleryListing'

export default function BurlingameGallery() {
	    const images = [IMG_1, IMG_2, IMG_3, IMG_22, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10, IMG_20, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15, IMG_16, IMG_17, IMG_18, IMG_19, IMG_21, IMG_23, IMG_24, IMG_25]
	    return (
		            <GalleryListing name={"Burlingame Library"} images={images} />

		        )
}
