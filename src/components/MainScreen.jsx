import { useState } from "react";
import DisForum from "./DisForum";
import MarketStories from "./MarketStories";
import Sidebar from "./Sidebar";




export default function MainScreen() {
    const [flag,setflag]=useState(false)
    const [sc_flag,setsc_flag]=useState(true)

    return (
        <div className="bg-slate-100 relative ">
            <div className="flex text-white md:hidden">
                <p className={`w-1/2 text-center py-2 ${sc_flag==true?"bg-blue-950 border-b-2 border-red-500":"bg-n-blue"}`} onClick={()=>setsc_flag(true)}>Discussion Forum</p>
                <p className={`w-1/2 text-center py-2  ${sc_flag==false?"bg-blue-950 border-b-2 border-red-500":"bg-n-blue"}`} onClick={()=>setsc_flag(false)}>Market Stories</p>
            </div>
            <div className="hidden md:flex h-full md:h-screen ">
                <Sidebar flag={flag} setflag={setflag}/>
                    <DisForum/>
                    <MarketStories flag={flag}/>
            </div>
            <div className="flex md:hidden h-full md:h-screen">
                <Sidebar flag={flag} setflag={setflag}/>
                <div className={`${sc_flag==true?"flex":"hidden"}`}>
                    <DisForum/>
                </div>
                <div className={`${sc_flag==false?"flex":"hidden"}`}>
                    <MarketStories flag={flag}/>
                </div>
            </div>
            <div className={`fixed bottom-14 right-10 z-30 text-2xl md:text-5xl rounded-full px-3 md:px-4 py-1 md:pb-2 bg-n-blue text-white drop-shadow-md ${sc_flag==true?"flex":"hidden"}`}>+</div>
        </div>
    )
}