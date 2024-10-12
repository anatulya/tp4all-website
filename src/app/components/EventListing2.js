"use client"
import Link from "next/link";

export const EventListing2 = ({ name, date, link, city, fixit }) => {

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
        // const day = date.getDate()
        // const ord = nthNumber(day)
        // const hour = date.getHours()
        // const ante = date.getHours() >= 12 ? "PM" : "AM"
        // const minutes = date.getMinutes()

        // return date.toLocaleString('default', { month: 'short' }) + " " + day.toString() + ord + " @" + (hour % 12).toString() + (minutes > 0 ? ":" + minutes.toString() : "") + ante

        return date.toLocaleString('default', { dateStyle: "short", timeStyle: "short" });
    }

    const dateHasPassed = () => {
        return Date.now() - date > 0
    }

    return (
        // <Link target="_blank" href={link}>

        <div className="flex flex-col sm:px-1 py-2.5 ">
            <div className="flex flex-row  sm:px-4 justify-between items-center sm:items-start text-base">
                <div className="flex flex-col ">
                    <h1 className=" text-white">{name}</h1>

                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2  ">
                            {/* <svg className="w-3 h-3 fill-white" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccessTimeIcon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg> */}
                            {/* <h1 className="text-neutral-300 flex-0-"><span className="text-neutral-200">{date ? getFormattedDate() : "---"}</span> <span className="text-red-300">•︎</span> {city} <span className="text-red-300">•︎</span> Workshop{fixit && " + FixitClinic"}</h1> */}
                            <h1 className="text-neutral-200"><span className="sm:hidden text-red-300"> • </span>{date ? getFormattedDate() : "TBD"}</h1>
                            <div>
                            <h1 className="text-neutral-300"><span className="text-red-300"> • </span>{city}</h1>

                            </div>
                            <h1 className="text-neutral-300"><span className="text-red-300"> • </span>Workshop{fixit && " + FixitClinic"}</h1>
                        </div>
                        <div className="flex flex-row items-center  space-x-1">
                            {/* <svg className="w-3 h-3 fill-white" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccessTimeIcon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg> */}
                            <h1 className="text-white flex-0-"></h1>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col">

                    <div className="flex flex-row items-center sm:space-x-8">
                        <div className="flex flex-row items-center  space-x-1 ">
                            <div className={`rounded-full w-2.5 h-2.5  flex-shrink-0 ${dateHasPassed() && date ? "bg-red-500" : "bg-green-500"}`}></div>
                            <h1 className="text-white">{dateHasPassed() && date ? "Event Passed" : "Event Coming"}</h1>
                        </div>
                    </div>
                    {/* {link && <a href={link} className="text-neutral-300 underline underline-offset-4 hover:text-neutral-200 transition-opacity" >Register</a>} */}
                    <Link href={link}><button disabled={link === ""} className="text-neutral-200 w-full px-1 py-0.5 bg-neutral-500 disabled:opacity-40 disabled:hover:cursor-not-allowed" >{ dateHasPassed() ? "View Gallery" : "Register" }</button></Link>
                </div>




            </div>

        </div>

        // </Link>

    )
}