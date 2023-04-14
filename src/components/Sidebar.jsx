import { useState } from "react"
import {AiFillCaretRight,AiFillCaretDown} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"
import {MdMessage} from "react-icons/md"
import {GiPriceTag} from "react-icons/gi"


export default function Sidebar ({flag,setflag}) {
    // const [flag,setflag]=useState(false)


    return (
        <div class="flex h-full absolute z-20 md:static top-0">
            <div className={`w-64 h-full bg-n-blue text-white ${flag==true?"block":"hidden"}`}>
                <div className="flex items-center justify-between py-3 px-6 border-b-2 border-gray-400">
                    <div className="flex gap-3 items-center">
                        <FaUserAlt className="text-2xl"/>
                        <p className="font-bold">Hello, User</p>
                    </div>
                    <IoMdNotifications className="text-3xl"/>
                </div>
                <div className="py-2 pl-4 pr-1 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <MdMessage className="text-2xl"/>
                            <p className="font-bold">Discussion Forum</p>
                        </div>
                        <AiFillCaretDown/>
                    </div>
                    <div className="flex gap-3">
                        <GiPriceTag className="text-2xl"/>
                        <p className="font-bold">Discussion Forum</p>
                    </div>
                    <div className="pl-9 font-bold flex flex-col gap-3">
                        <p>Sentiment</p>
                        <p>Market</p>
                        <p>Sector</p>
                        <p>Watchlist</p>
                        <p>Events</p>
                        <p>News/Interview</p>
                    </div>
                </div>
            </div>
            <div className="bg-n-blue h-24 w-5 flex items-center justify-center rounded-r-md mt-48" onClick={()=>setflag(!flag)}>
                <AiFillCaretRight className="text-white"/>
            </div>
        </div>
    )
}