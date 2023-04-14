import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { BiShareAlt, BiUserCircle } from "react-icons/bi"
import { FiMessageSquare, FiSearch } from "react-icons/fi"





export default function DisForum() {
    const data=[
        {
            image:"https://www.equitybulls.com/equitybullsadmin/uploads/Infibeam%20Avenues%20Limited%20-%20New%20Logo%202.jpg",
            sec:"Sector 1"
        },
        {
            image:"",
            sec:"Sector 2"
        },
        {
            image:"",
            sec:"Sector 3"
        },
        {
            image:"https://www.equitybulls.com/equitybullsadmin/uploads/Infibeam%20Avenues%20Limited%20-%20New%20Logo%202.jpg",
            sec:"Sector 1"
        },
        {
            image:"",
            sec:"Sector 2"
        },
        {
            image:"",
            sec:"Sector 3"
        },
        {
            image:"https://www.equitybulls.com/equitybullsadmin/uploads/Infibeam%20Avenues%20Limited%20-%20New%20Logo%202.jpg",
            sec:"Sector 1"
        },
        {
            image:"",
            sec:"Sector 2"
        },
        {
            image:"",
            sec:"Sector 3"
        },
    ]


    return (
        <div className="w-screen h-screen md:w-53vw">
            <p className="text-red-600 font-medium py-2 text-lg hidden md:flex">DISSCUSSION FOURM</p>
            <div className="px-4 md:px-14">
                <p className="font-bold text-lg">Filters</p>
                <div className="flex justify-between drop-shadow-md bg-white px-6 py-4 rounded-md mt-3 items-center">
                    <p className="rounded-full bg-red-700 h-7 py-1 text-white px-3 text-xs md:px-6 md:text-sm">Sector 1</p>
                    <p className="rounded-full bg-blue-700 h-7 py-1 text-white px-3 text-xs md:px-6 md:text-sm">Sector 2</p>
                    <p className="rounded-full bg-yellow-400 h-7 py-1 text-white px-3 text-xs md:px-6 md:text-sm">Sector 3</p>
                    <div className="flex items-center shadow-[inset_1px_1px_4px_1px_rgb(0,0,0,0.55)] bg-gray-200 rounded-full w-20 md:w-44" >
                        <button><FiSearch className=" md:text-2xl ml-2 "/></button>
                        <input type="text" name="" id="" placeholder="Search here" className="py-1 outline-none bg-transparent w-full placeholder:text-xs "/>
                    </div>
                </div>
                <div className="h-75vh flex flex-col gap-4 mt-6 overflow-auto">
                    {
                        data.map((el,i)=>(
                            <div className="relative bg-white drop-shadow-md flex flex-col items-center p-2 md:p-5 rounded-md w-full" key={i}>
                                <p className="text-xs text-red-500 absolute right-3 top-3 md:right-5 md:top-6">2 min ago</p>
                                <img src={el.image} alt="" className="w-2/3" />
                                <div className="w-full flex items-center gap-2 md:gap-4">
                                    <BiUserCircle className="text-3xl md:text-5xl"/>
                                    <p className="text-gray-700 font-bold text-sm md:text-base">Lorem Ipsum</p>
                                    {
                                        el.sec=="Sector 1"?
                                        <p className="rounded-full bg-red-700 h-7 py-1 text-white px-3 text-xs md:px-6 md:text-sm">Sector 1</p>:
                                        el.sec=="Sector 2"?
                                        <p className="rounded-full bg-blue-700 h-7 py-1 text-white px-3 text-xs md:px-6 md:text-sm">Sector 2</p>:
                                        <p className="rounded-full bg-yellow-400 h-7 py-1 text-white px-3 text-xs md:px-6 md:text-sm">Sector 3</p>
                                    }
                                </div>
                                <p className="text-gray-700 px-10 text-xs md:text-base md:px-16 mt-4 mb-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, nostrum.
                                </p>
                                <div className=" px-10 md:px-16 w-full flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <AiOutlineHeart className="md:text-2xl"/>
                                        <p className="text-xs">2k</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AiOutlineEye className="md:text-2xl"/>
                                        <p className="text-xs">2k</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiMessageSquare className="md:text-2xl"/>
                                        <p className="text-xs">2k Comments</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BiShareAlt className="md:text-2xl"/>
                                        <p className="text-xs">Share</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}