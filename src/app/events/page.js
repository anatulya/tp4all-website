"use client"
import { useState } from "react";
import { EventListing } from "../components/EventListing";
import { EventListing2 } from "../components/EventListing2";

export default function EventPage() {
    const [openSCCLD, setOpenSCCLD] = useState(false)

    return (
        <div className="flex flex-col text-white">
            <h1 className="font-semibold">Upcoming Events</h1>
            <EventListing2 name={"Sunnyvale Library"} date={new Date(2024, 11, 15, 14)} link={""} fixit={true} city={"Sunnyvale, CA"} />
            <EventListing2 name={"Burlingame Library"} date={new Date(2025, 0, 5, 13, 30)} link={""} city={"Burlingame, CA"} />
            <EventListing2 name={"Scotts Valley Library"} date={new Date(2025, 0, 4, 13)} link={""} city={"Santa Cruz, CA"} />
            <EventListing2 name={"Cupertino Library"} date={new Date(2025, 2, 22, 14)} link={""} city={"Cupertino, CA"} />
            <EventListing2 name={"THP South Branch Library"} date={new Date(2025, 5, 28, 14, 30)} link={""} city={"Berkeley, CA"} />
            <EventListing2 name={"Fremont Main Library"} date={null} link={""} city={"Fremont, CA"} />
            <EventListing2 name={"Dublin Library"} date={null} link={""} city={"Dublin, CA"} />
            <EventListing2 name={"Union City Library"} date={null} link={""} city={"Union City, CA"} />
            <EventListing2 name={"Redwood City Library"} date={null} link={""} city={"Redwood City, CA"} />

            <h1 className="mt-8 font-semibold">Past Events <span className="font-normal">(click to view gallery)</span></h1>
            <EventListing2 name={"Sunnyvale Makerspace Nexus"} date={new Date(2024, 9, 5, 11)} link={"gallery/maker_nexus"} fixit={true} city={"Sunnyvale, CA"}/>
            <EventListing2 name={"Burlingame Library"} date={new Date(2024, 8, 7, 13, 30)} link={"gallery/burlingame"} city={"Burlingame, CA"} />
            <EventListing2 name={"Cupertino Library"} date={new Date(2024, 7, 17, 15)} link={"gallery/cupertino"} city={"Cupertino, CA"}  />
            <EventListing2 name={"Morgan Hill Library"} date={new Date(2024, 7, 14, 18)} link={"gallery/morgan_hill"} city={"Morgan Hill, CA"} />
            <EventListing2 name={"Gilroy Library"} date={new Date(2024, 6, 20, 13)} link={"gallery/gilroy"} city={"Gilroy, CA"} />
            <EventListing2 name={"Los Altos Library"} date={new Date(2024, 6, 13, 10, 30)} link={"gallery/los_altos"} city={"Los Altos, CA"} />
            <EventListing2 name={"Milpitas Library"} date={new Date(2024, 5, 22, 16)} link={"gallery/milpitas"}  city={"Milpitas, CA"} />
            <EventListing2 name={"Saratoga Library"} date={new Date(2024, 5, 9, 13)} link={"gallery/saratoga"} city={"Saratoga, CA"}  />


        </div>
    );
}

