export default function ContactPage() {
    return (
        <div className="flex flex-col justify-center text-white fill-white sm:text-base text-sm">
            <div className="flex flex-row w-full items-center space-x-2 drop-shadow-glow">
                <h1 className=" text-lg font-semibold ">
                    Organization
                </h1>
                <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BusinessIcon"><path d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"></path></svg>
            </div>
            <p className="pt-2">Send us a message/email if you're interested in collaborating!</p>
            <div className="flex flex-row space-x-2 items-center">
                <svg className="w-3 h-3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path></svg>
                <p className="">Email: <a className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="mailto:thinkpads4all@gmail.com">thinkpads4all@gmail.com</a></p>

            </div>
            <div className="flex flex-row space-x-2 items-center">
                <svg className="w-3 h-3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                <p className="">Instagram: <a className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.instagram.com/thinkpads4all">@thinkpads4all</a></p>
            </div>
            <div className="pt-8 flex flex-row w-full items-center space-x-2 drop-shadow-glow">
                <h1 className=" text-lg font-semibold ">
                    Team
                </h1>
                <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GroupIcon"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"></path></svg>
                {/* <svg className="w-5 h-5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BusinessIcon"><path d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"></path></svg> */}
            </div>
            <p className="pt-2">Want to talk to us personally? Send us an email!</p>
            <div className="flex flex-col pt-8">
                <div className=" flex flex-col text-center sm:flex-row sm:text-left items-center space-x-4">
                    <img className="w-32 h-32 rounded-full" src="https://media.licdn.com/dms/image/v2/D5603AQGoS5m5ReTHYw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726352442404?e=1732147200&v=beta&t=wjNtlt78p1mJIl0TFadooG1CgCbcPf0atRCDoCrABP4" />
                    <div className="flex flex-col ">
                        <h1 className="pt-2 sm:pt-0 font-semibold">Kevin Xie</h1>
                        <h1 className="">Co-Founder</h1>
                        <div className="flex flex-row space-x-2  items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="mailto:kxie1416@gmail.com">kxie1416@gmail.com</a></p>

                        </div>
                        <div className="flex flex-row  space-x-2 items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.linkedin.com/in/kevin-xie-267700231/">LinkedIn</a></p>
                        </div>
                        {/* <p className=""><a className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.linkedin.com/in/kevin-xie-267700231/">LinkedIn</a></p> */}

                    </div>
                </div>
                <div className="pt-8 flex flex-col text-center sm:flex-row sm:text-left items-center space-x-4">
                    <img className="w-32 h-32 rounded-full" src="https://media.licdn.com/dms/image/v2/D4E03AQGwLnz_GrP6bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728764887284?e=1733961600&v=beta&t=1Vh2Xc2koqlLbUiMjAxb0h8VDxDC7_2TM8U0AS7laSA" />
                    <div className="flex flex-col ">
                        <h1 className="pt-2 sm:pt-0 font-semibold">Anatulya Nandi</h1>
                        <h1 className="">Co-Founder</h1>
                        <div className="flex flex-row space-x-2  items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="mailto:anatulya.nandi@gmail.com">anatulya.nandi@gmail.com</a></p>

                        </div>
                        <div className="flex flex-row  space-x-2 items-center justify-center sm:justify-normal">
                            <svg className="w-4 h-4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                            <p className=""><a target="_blank" className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.linkedin.com/in/anatulya-nandi-4520a6329/">LinkedIn</a></p>
                        </div>
                        {/* <p className=""><a className="underline underline-offset-4 hover:text-neutral-200 transition-opacity" href="https://www.linkedin.com/in/kevin-xie-267700231/">LinkedIn</a></p> */}

                    </div>
                </div>
            </div>


        </div>
    )
}
