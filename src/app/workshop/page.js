import Image from "next/image";
import IMG_KXIE from "@/../public/profile/kxie.jpg"
import IMG_ANAT from "@/../public/profile/anat.jpg"

export default function WorkshopPage() {
    return (
  <div className="flex flex-col justify-center text-white fill-white sm:text-base text-sm">
            <div className="flex flex-row w-full items-center space-x-2 ">
                <h1 className=" text-lg font-semibold ">
                    Workshop Information
                </h1>
            </div>
            <p className="pt-2">Send us a message/email if you're interested in collaborating!</p>
            <div className="flex flex-row space-x-2 items-center">
                <svg  className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none"/><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
                <p className="">Workshop Do-It-Yourself: <a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.canva.com/design/DAGLBugAo08/agVoSioKPwtxXDrG2YloYA/view?utm_content=DAGLBugAo08&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h805b2c19e3">Link</a></p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
               <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>  
                {/* <svg className="w-3 h-3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg> */}
                <p className="">Cable Map: <a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://drive.google.com/file/d/1zGXOJlG_TFKnUq387PnHKJwu591RFSOA/view?usp=sharing">Link</a></p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
                {/* <svg className="w-3 h-3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg> */}
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>  
                <p className="">Screw Map: <a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://drive.google.com/file/d/1XV6Ljz91bFPV8PJMLyVWi_VY2CSZGk39/view?usp=sharing">Link</a></p>
            </div>


        </div>
    )
}
