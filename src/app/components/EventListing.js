"use client"
import Link from "next/link";

export const EventListing = ({ name, date, link }) => {

    const nthNumber = (number) => {
        if (number > 3 && number < 21) return "th";
        switch (number % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    const getFormattedDate = () => {
        const day = date.getDate()
        const ord = nthNumber(day)
        const hour = date.getHours()
        const ante = date.getHours() >= 12 ? "PM" : "AM"
        const minutes = date.getMinutes()

        return date.toLocaleString('default', { month: 'short' }) + " " + day.toString() + ord + " @" + (hour % 12).toString() + (minutes > 0 ? ":" + minutes.toString() : "") + ante
    }

    const dateHasPassed = () => {
        return Date.now() - date > 0
    }

    return (
        <Link target="_blank" href={ link }>
            <div className="flex flex-row hover:bg-stone-700 border-stone-400  border-l px-5 py-2.5 justify-between text-xs sm:text-base">
                <h1 className=" text-white">{name}</h1>
                <div className="flex flex-row items-center space-x-8">
                    <div className="flex flex-row items-center  space-x-1">
                        <svg className="w-3 h-3 fill-white" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccessTimeIcon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                        <h1 className="text-white flex-0-">{date ? getFormattedDate() : "---"}</h1>
                    </div>
                    <div className="flex flex-row items-center  space-x-1 ">
                        <div className={`rounded-full w-2.5 h-2.5  flex-shrink-0 ${dateHasPassed() && date ? "bg-red-500" : "bg-green-500"}`}></div>
                        <h1 className="text-white">{dateHasPassed() && date ? "Event Passed" : "Event Coming"}</h1>
                    </div>

                </div>

            </div>
        </Link>

    )
}