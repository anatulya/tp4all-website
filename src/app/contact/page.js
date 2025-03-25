import Link from "next/link";
import { inconsolata } from "../layout";
import US_IMG from '../../../public/01img.JPG'
import IMG_ANAT from '../../../public/profile/anat.jpg'
import IMG_KXIE from '../../../public/profile/kxie.jpg'
import Image from "next/image";
export default function ContactPage() {

    const avatars = [
      { src: IMG_ANAT, name: "Anatulya", url: 'https://www.linkedin.com/in/anatulya/' },
      { src: IMG_KXIE, name: "Kevin", url: 'https://www.linkedin.com/in/kevin-xie-267700231/' },
    ];
    
    return (
        <div className="flex flex-col mt-8 space-y-4">
            <div className={`flex flex-row items-center text-lg pb-2 ${inconsolata.className}`}>
                <Link href="/home"><h1 className="hover:text-white">ThinkPads4All</h1></Link>
                <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                <Link href="/contact"><h1 className="text-neutral-300 hover:text-white">Contact</h1></Link>
            </div>
            <div className="flex flex-col">
                <div className="text-2xl font-semibold">Contact Links</div>
                <div className={`${inconsolata.className} flex flex-col pl-3 ml-1.5 border-l border-neutral-500`}>
                <h1>Email: <Link target="_blank"  href="https://drive.google.com/file/d/1XV6Ljz91bFPV8PJMLyVWi_VY2CSZGk39/view?usp=sharing"  className={`text-red-500 hover:text-red-400`} >thinkpads4all@gmail.com</Link></h1>
                <h1>Instagram: <Link target="_blank" href="https://drive.google.com/file/d/1zGXOJlG_TFKnUq387PnHKJwu591RFSOA/view?usp=sharing"  className={`text-red-500 hover:text-red-400`}>@thinkpads4all</Link></h1>
                <h1>LinkedIn: <Link target="_blank"  className={`text-red-500 hover:text-red-400`} href="https://www.canva.com/design/DAGLBugAo08/agVoSioKPwtxXDrG2YloYA/view?utm_content=DAGLBugAo08&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h805b2c19e3" >linkedin.com/company/thinkpads4all/</Link></h1>

                </div>

                <h1 className="text-2xl font-semibold mt-4">People</h1>
                <h1 className={`${inconsolata.className} pb-4`}>Ben — Kevin — Iris — Vivian L. — Vivian Z. — Anatulya — Lucas (not in image)</h1>
                <Image src={US_IMG} alt="" />
                <p className="mt-4" >This is us at Los Altos Library, repping the iconic red dot in ThinkPad keyboards! If you want to talk to us personally, here are some contacts below:</p>
                
                <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex flex-row items-center space-x-4">
                    <Image width={128} height={128} src={IMG_ANAT} alt="" />
                    <div className={`${inconsolata.className} flex flex-col`}>
                        <h1 className="font-semibold">Anatulya Nandi</h1>
                        <h1 className="">Co-Founder</h1>
                        <div className="flex flex-row space-x-2  items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="mailto:anatulya.nandi@gmail.com">anatulya.nandi@gmail.com</a></p>

                        </div>
                        <div className="flex flex-row  space-x-2 items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.linkedin.com/in/anatulya-nandi-4520a6329/">LinkedIn</a></p>
                        </div>
                    </div>
                    </div>
       
                    <div className="flex flex-row items-center space-x-4">
                    <Image width={128} height={128} src={IMG_KXIE} alt="" />
                    <div className={`${inconsolata.className} flex flex-col`}>
                        <h1 className="font-semibold">Kevin Xie</h1>
                        <h1 className="">Co-Founder</h1>
                        <div className="flex flex-row space-x-2  items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="mailto:anatulya.nandi@gmail.com">anatulya.nandi@gmail.com</a></p>

                        </div>
                        <div className="flex flex-row  space-x-2 items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.linkedin.com/in/anatulya-nandi-4520a6329/">LinkedIn</a></p>
                        </div>
                    </div>
                    </div>
                 
                </div>
            </div>
        </div>
    );
}