import Link from "next/link";

export const EventListing = ({ name, date, link, city, fixit }) => {
    const getFormattedDate = () => {
        return date.toLocaleString('default', { dateStyle: "short", timeStyle: "short" });
    }

    const dateHasPassed = () => {
        return Date.now() - date > 0
    }

    return (
        <div className="flex flex-col sm:px-1 py-2.5 ">
            <div className="flex flex-row  sm:px-4 justify-between items-center sm:items-start text-base">
                <div className="flex flex-col ">
                    <h1 className=" text-white">{name}</h1>
                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2  ">
                            <h1 className="text-neutral-200"><span className="sm:hidden text-red-300"> • </span>{date ? getFormattedDate() : "TBD"}</h1>
                            <div>
                                <h1 className="text-neutral-300"><span className="text-red-300"> • </span>{city}</h1>

                            </div>
                            <h1 className="text-neutral-300"><span className="text-red-300"> • </span>Workshop{fixit && " + FixitClinic"}</h1>
                        </div>
                        <div className="flex flex-row items-center  space-x-1">
                            <h1 className="text-white flex-0-"></h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center sm:space-x-8">
                        <div className="flex flex-row items-center  space-x-1 ">
                            <div className={`rounded-full w-2.5 h-2.5  flex-shrink-0 ${date && dateHasPassed() ? "bg-red-500" : "bg-green-500"}`}></div>
                            <h1 className="text-white">{date && dateHasPassed() ? "Event Passed" : "Event Coming"}</h1>
                        </div>
                    </div>
                    <Link href={link}><button disabled={link === ""} className="text-neutral-200 w-full px-1 py-0.5 bg-neutral-500 disabled:opacity-40 disabled:hover:cursor-not-allowed" >{dateHasPassed() && date ? "View Gallery" : "Register"}</button></Link>
                </div>
            </div>
        </div>

    )
}