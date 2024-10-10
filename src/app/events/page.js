"use client"
import { useState } from "react";
import { EventListing } from "../components/EventListing";

export default function EventPage() {
    const [openSCCLD, setOpenSCCLD] = useState(false)

    return (
        <div className="flex flex-col">
            {/* <div className="text-white text-xl"><span className="font-semibold text-stone-400">1</span> Santa Clara County Lib. District</div>
                <div className="border-stone-400  pl-4">
                    <div className="text-white  border-l-2 pl-2 text-lg ">Saratoga Library</div>
                </div> */}
            <a href="#">
                <div className="flex flex-row items-center text-lg justify-between hover:bg-stone-700 py-2.5 " onClick={() => { setOpenSCCLD(!openSCCLD) }}>
                    <div className="flex flex-row items-center">
                    <h1 className="font-semibold text-stone-400">1</h1>
                    <h1 className="font-semibold pl-4 text-white">Santa Clara County Library District</h1>
                    {
                        openSCCLD ?
                            <svg className="pl-2 w-6 h-6 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                            :
                            <svg className="pl-2 w-6 h-6 fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandLessIcon"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>

                    }
                    </div>
                    <div className="flex flex-row items-center  space-x-1 text-xs sm:text-base pr-5  ">
                        <div className={`rounded-full w-2.5 h-2.5  flex-shrink-0 bg-red-500`}></div>
                        <h1 className="text-white">Events Passed</h1>
                    </div>

                </div>
            </a>
            {
                openSCCLD &&
                <div className="flex flex-col pl-1 pt-2  ">
                    <EventListing name={"Saratoga Library"} date={new Date(2024, 5, 9, 13)} link={"https://sccl.bibliocommons.com/events/6632cd002038232f00853ed5   "} />
                    <EventListing name={"Milpitas Library"} date={new Date(2024, 5, 22, 16)} link={"https://sccl.bibliocommons.com/events/6632cc7913b83aeedf0b3af4"} />
                    <EventListing name={"Los Altos Library"} date={new Date(2024, 6, 13, 10, 30)} link={"https://sccl.bibliocommons.com/events/6632cc25b9c88bd23748471b"} />
                    <EventListing name={"Gilroy Library"} date={new Date(2024, 6, 20, 13)} link={"https://sccl.bibliocommons.com/events/6632cbc52038232f00853e7a"} />
                    <EventListing name={"Morgan Hill Library"} date={new Date(2024, 7, 14, 18)} link={"https://sccl.bibliocommons.com/events/6632ccb813b83aeedf0b3af9"} />
                    <EventListing name={"Cupertino Library"} date={new Date(2024, 7, 17, 15)} link={"https://sccl.bibliocommons.com/events/6632cb6005ea9f28006db81e"} />

                </div>
            }


            <div className="pt-4 flex flex-row items-center text-lg py-2.5 ">
                <h1 className="font-semibold text-stone-400">2</h1>
                <h1 className="font-semibold pl-4 text-white">Peninsula Library System</h1>
            </div>
            <div className="flex flex-col pl-1 pt-2  ">
                <EventListing name={"Burlingame Library"} date={new Date(2024, 8, 7, 13, 30)} link={"https://burlingame.libcal.com/event/12822400"} />
                <EventListing name={"Burlingame Library"} date={new Date(2025, 0, 5, 13, 30)} link={""} />
                {/* <EventListing name={"Redwood City Library"} date={new Date(2025, 0, 11, 13, 30)} link={""} /> */}
            </div>

            <div className="pt-4 flex flex-row items-center text-lg py-2.5">
                <h1 className="font-semibold text-stone-400">3</h1>
                <h1 className="font-semibold pl-4 text-white">Sunnyvale Public Library</h1>
            </div>
            <div className="flex flex-col pl-1 pt-2  ">
                <EventListing name={"Sunnyvale Library"} date={new Date(2024, 11, 15, 14)} link={""} />
            </div>

            <div className="pt-4 flex flex-row items-center text-lg py-2.5 ">
                <h1 className="font-semibold text-stone-400">3</h1>
                <h1 className="font-semibold pl-4 text-white">Santa Cruz Public Libraries</h1>
            </div>
            <div className="flex flex-col pl-1 pt-2  ">
                <EventListing name={"Scotts Valley Library"} date={new Date(2025, 0, 4, 13)} link={""} />
            </div>

            <div className="pt-4  flex flex-row items-center text-lg py-2.5">
                <h1 className="font-semibold text-stone-400">4</h1>
                <h1 className="font-semibold pl-4 text-white">Makerspace</h1>
            </div>
            <div className="flex flex-col pl-1 pt-2  ">
                <EventListing name={"Sunnyvale Makerspace Nexus"} date={new Date(2024, 9, 5, 11)} link={""} />
            </div>



        </div>
    );
}

