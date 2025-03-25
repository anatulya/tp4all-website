import Link from "next/link";
import { inconsolata } from "../layout";
import screwmap from '../../../public/screwmap.png'
import cablemap from '../../../public/cablemap.png'
import Image from "next/image";
export default function WorkshopPage()
{
    return (
        <div className="flex flex-col mt-8">
            <div className={`flex flex-row items-center text-lg ${inconsolata.className}`}>
                <Link href="/home"><h1 className="hover:text-white">ThinkPads4All</h1></Link>
                <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                <Link href="/home"><h1 className="text-neutral-300 hover:text-white">Workshops</h1></Link>
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-semibold">Intro to Laptop Servicing</h1>
                    <Link href="/contact">
                    <div className="flex flex-row items-center hover:text-red-500 hover:fill-red-500 fill-white">
                                    <h1 className=" text-lg">Schedule Workshop</h1>
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
                                </div>
                    </Link>

                </div>
                
                <p className="mt-4">This workshop basically encompasses the entire procedure of dissassembling and assembling a laptop—each participant is provided with a ThinkPad T480, a screwdriver, as well as the maps detailed below in order to successfully identify the parts to remove. </p>
                {/* <Image src="" /> */}
                <div className="grid grid-cols-2">
                    <Image src={screwmap} alt='' />
                    <Image src={cablemap} alt='' />
                </div>
                <p className="mt-4">In terms of hands-on servicing skills, the participant usually goes through taking out the keyboard, opening up the backplate, removing all sorts of cables (ribbon, pin, etc.) and screws, taking out the motherboard, hard drive, RAM, screen, hinges, battery, heatsink, and much more. However, we also provide a theoretical explanation to the parts which are worked on, as well as a fundamental understanding of how computers work, and why people commonly recommend upgrading certain components over others for performance. </p>
                <p className="mt-4">If you're interested in booking a workshop with us, check out our <Link href="/contact"><span  className={`${inconsolata.className} text-red-500 hover:text-red-400`}>contact</span></Link> page, and send us a message!</p>

                <h1 className={`${inconsolata.className} text-lg mt-4 font-semibold pb-1`}>Links (to do it yourself): </h1>
                <div className={`${inconsolata.className} flex flex-col pl-3 ml-1.5 border-l border-neutral-500`}>
                <h1>Screw Map: <Link target="_blank"  href="https://drive.google.com/file/d/1XV6Ljz91bFPV8PJMLyVWi_VY2CSZGk39/view?usp=sharing"  className={`text-red-500 hover:text-red-400`} >Link</Link></h1>
                <h1>Cable Map: <Link target="_blank" href="https://drive.google.com/file/d/1zGXOJlG_TFKnUq387PnHKJwu591RFSOA/view?usp=sharing"  className={`text-red-500 hover:text-red-400`}>Link</Link></h1>
                <h1>Step-By-Step Slides: <Link target="_blank"  className={`text-red-500 hover:text-red-400`} href="https://www.canva.com/design/DAGLBugAo08/agVoSioKPwtxXDrG2YloYA/view?utm_content=DAGLBugAo08&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h805b2c19e3" >Link</Link></h1>
                <h1>Repair Manual (from IBM): <Link target="_blank"  className={`text-red-500 hover:text-red-400`} href="https://download.lenovo.com/pccbbs/mobiles_pdf/t480_hmm_en.pdf" >Link</Link></h1>

                </div>
            </div>
        </div>


    );
} 