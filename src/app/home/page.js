import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import gsap from "gsap";


export default function Home() {
  return (
    <div className="flex flex-col justify-center text-white ">
      <div className="flex flex-row w-full items-center space-x-2 drop-shadow-glow">
        <h1 className=" text-lg font-semibold ">
          Hey there!<span></span>
        </h1>
        <svg className="w-5 h-5 fill-white" aria-hidden="true" viewBox="0 0 24 24" data-testid="WavingHandIcon"><path d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7zm7.01-2.68-4.6 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.07c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-4.42 4.42-.71-.71 6.54-6.54c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-5.83 5.83-.71-.71 6.89-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89-.69-.7 5.48-5.48c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62c1.22 1.57 1.11 3.84-.33 5.28l-.71-.71c1.17-1.17 1.17-3.07 0-4.24l-.35-.35 4.07-4.07c.49-.49.49-1.28 0-1.77-.5-.48-1.29-.48-1.78.01"></path></svg>
      </div>

      <p className="pt-4 sm:text-base text-sm">We're ThinkPads4all, a non-profit based in Cupertino, CA. <span className="">We <span className="text-red-400">improve tech literacy</span> and <span className="text-red-400">repurpose used devices</span> as materials within our <Link href="/gallery" className="underline underline-offset-4 hover:text-neutral-200 transition-colors ">hands-on workshops</Link>. </span> We also post a lot of cool tutorials on how to hack/mod computers on our <Link className="hover:text-neutral-200 transition-colors underline underline-offset-4" href="/blog">blog</Link> page!</p>
      <img className="pt-8 w-full" src="./gg.png" />

      <div className="pt-8 flex flex-row items-center space-x-2  drop-shadow-glow">
        <h1 className="text-lg font-semibold">
          The workshops
        </h1>
        <svg  className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path clipRule="evenodd" d="M0 0h24v24H0z" fill="none" /><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" /></svg>
      </div>


      <p className="pt-4 sm:text-base text-sm">
        Each participant in our workshops operates on a provided ThinkPad T480 where they learn assembly, dissassembly, and essential repairs. We hope that these self-paced workshops will impart in our participants the confidence to open up & repair their used devices instead of throwing them out!
        {/* <br />Visit the <Link className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="/blog">blog</Link> section to learn more about our workshop, and check out pictures in the <Link className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="/gallery">gallery</Link>. */}
        <br />Check out our workshop pictures in the <Link className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="/gallery">gallery</Link> page!
      </p>

      <div className="pt-8 flex flex-row items-center space-x-2 drop-shadow-glow">
        <h1 className="text-lg font-semibold">
          The team
        </h1>
        {/* <svg  className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none" /><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" /></svg> */}
        {/* <svg className="w-4 h-4 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="Diversity3Icon"><path d="M6.32 13.01c.96.02 1.85.5 2.45 1.34C9.5 15.38 10.71 16 12 16s2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"></path><path d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2"></path></svg> */}
        <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z"/></g></svg>
      </div>

      <div className="pt-4 flex flex-col space-x-2">
        <img src="/01img.JPG" className="w-full" />
        {/* <div className="flex flex-row">
            <h1>Ben</h1>
            <h1>Kevin</h1>
            <h1>Iris</h1>
            <h1>Vivian L.</h1>
            <h1>Vivian Z.</h1>
            <h1>Anatulya</h1>
        </div> */}
        <p className="sm:text-base text-sm">Ben <span className="text-red-400">—</span> Kevin <span className="text-red-400">—</span> Iris <span className="text-red-400">—</span> Vivian L. <span className="text-red-400">—</span> Vivian Z. <span className="text-red-400">—</span> Anatulya (respective to the image)</p>
        <p className="sm:text-base text-sm">This is us at Los Altos Library, repping the iconic red dot in ThinkPad keyboards!</p>
        
        <p>Connect with us through our <Link className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="/contact">contact page</Link>!</p>
        
      </div>


    </div>
  );
} 

