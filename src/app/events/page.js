"use client"
import { useState } from "react";
import { EventListing } from "../components/EventListing";

export default function EventPage() {
    const [openSCCLD, setOpenSCCLD] = useState(false)

    return (
        <div className="flex flex-col text-white">
            <h1 className="font-semibold">Upcoming Events</h1>
            <EventListing name={"Cupertino Library"} date={new Date(2025, 2, 22, 14)} link={"https://sccl.bibliocommons.com/events/67952e412a99913600cada63"} city={"Cupertino, CA"} />
            <EventListing name={"Mountain View Library"} date={new Date(2025, 2, 28, 15, 30)} link={"https://mountainview.libcal.com/event/13559713"} city={"Mountain View, CA"} />
            <EventListing name={"Fremont Main Library"} date={new Date(2025, 4, 25, 13, 30)} link={"https://aclibrary.bibliocommons.com/events/677ac911be9184c03ac425c1"} city={"Fremont, CA"} />
            <EventListing name={"81st Avenue Branch Library"} date={new Date(2025, 5, 21, 14, 30)} link={""} city={"Oakland, CA"} />
            <EventListing name={"THP South Branch Library"} date={new Date(2025, 5, 28, 14, 30)} link={""} city={"Berkeley, CA"} />
            <EventListing name={"Educational Park Branch Library"} date={new Date(2025, 6, 12, 13)} link={""} city={"San Jose, CA"} />
            <EventListing name={"Berryessa Branch Library"} date={new Date(2025, 6, 19, 10, 30)} link={""} city={"San Jose, CA"} />
            <EventListing name={"Fremont Main Library"} date={new Date(2025, 6, 20, 13, 30)} link={"https://aclibrary.bibliocommons.com/events/677ac911be9184c03ac425c2"} city={"Fremont, CA"} />
            <EventListing name={"Berryessa Branch Library"} date={new Date(2025, 7, 9, 10, 30)} link={""} city={"San Jose, CA"} />
            <EventListing name={"Dublin Library"} date={new Date(2025, 7, 16, 14, 30)} link={""} city={"Dublin, CA"} />
            <EventListing name={"81st Avenue Branch Library"} date={new Date(2025, 7, 23, 14, 30)} link={""} city={"Oakland, CA"} />

            <EventListing name={"Union City Library"} date={null} link={""} city={"Union City, CA"} />
            <EventListing name={"Redwood City Library"} date={null} link={""} city={"Redwood City, CA"} />
            <EventListing name={"San Bruno Public Library"} date={null} link={""} city={"San Bruno, CA"} />
            <EventListing name={"Hayward Public Library"} date={null} link={""} city={"Hayward, CA"} />
            {/* <EventListing name={"Mountain View Public Library"} date={null} link={""} city={"Mountain View, CA"} />
            <EventListing name={"81st Avenue Branch Library"} date={null} link={""} city={"Oakland, CA"} /> */}

            <h1 className="mt-8 font-semibold">Past Events <span className="font-normal">(click to view gallery)</span></h1>
            <EventListing name={"Sunnyvale Library"} date={new Date(2024, 11, 15, 14)} link={"https://sunnyvale.libcal.com/event/12928876"} city={"Sunnyvale, CA"} />
            <EventListing name={"Scotts Valley Library"} date={new Date(2025, 0, 4, 13)} link={"https://santacruzpl.libcal.com/event/13532908"} city={"Santa Cruz, CA"} />
            <EventListing name={"Burlingame Library"} date={new Date(2025, 0, 5, 13, 30)} link={"https://burlingame.libcal.com/event/13662880?hs=a"} city={"Burlingame, CA"} />
            <EventListing name={"Sunnyvale Makerspace Nexus"} date={new Date(2024, 9, 5, 11)} link={"gallery/maker_nexus"} fixit={true} city={"Sunnyvale, CA"} />
            <EventListing name={"Burlingame Library"} date={new Date(2024, 8, 7, 13, 30)} link={"gallery/burlingame"} city={"Burlingame, CA"} />
            <EventListing name={"Cupertino Library"} date={new Date(2024, 7, 17, 15)} link={"gallery/cupertino"} city={"Cupertino, CA"} />
            <EventListing name={"Morgan Hill Library"} date={new Date(2024, 7, 14, 18)} link={"gallery/morgan_hill"} city={"Morgan Hill, CA"} />
            <EventListing name={"Gilroy Library"} date={new Date(2024, 6, 20, 13)} link={"gallery/gilroy"} city={"Gilroy, CA"} />
            <EventListing name={"Los Altos Library"} date={new Date(2024, 6, 13, 10, 30)} link={"gallery/los_altos"} city={"Los Altos, CA"} />
            <EventListing name={"Milpitas Library"} date={new Date(2024, 5, 22, 16)} link={"gallery/milpitas"} city={"Milpitas, CA"} />
            <EventListing name={"Saratoga Library"} date={new Date(2024, 5, 9, 13)} link={"gallery/saratoga"} city={"Saratoga, CA"} />


        </div>
    );
}

