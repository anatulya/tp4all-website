import Link from "next/link";
import { inconsolata, inter } from "../layout";
import { EventPageClient } from "@/components/EventPageClient";
export default function EventPage() {


    
    return (
        <div className="flex flex-col sm:mt-8 space-y-4">
                <div className={`flex flex-row items-center text-lg pb-2 ${inconsolata.className}`}>
                    <Link href="/home"><h1 className="hover:text-white">ThinkPads4All</h1></Link>
                    <svg className="w-4 h-4 fill-neutral-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    <Link href="/events"><h1 className="text-neutral-300 hover:text-white">Events</h1></Link>
                </div>

            <div className="mt-4">
                <EventPageClient inconsolata={inconsolata.className} inter={inter.className} />
            </div>
        </div>
    );
}