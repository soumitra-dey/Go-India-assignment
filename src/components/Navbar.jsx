import {FiSearch} from "react-icons/fi"
import {BiUserCircle} from "react-icons/bi"



export default function Navbar() {


    return (
        <div>
            <div className="px-3 md:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-16">
                    <img 
                        src="https://img1.wsimg.com/isteam/ip/50965c21-edad-4aaa-855c-00ec04b283a9/logo/c5d6a994-17d5-4fd6-a398-a0e180e2d846.jpg/:/rs=w:123,h:80,cg:true,m/cr=w:123,h:80/qt=q:100/ll" 
                        alt="" 
                        className="w-20 md:w-24"
                    />
                    <div className="flex items-center shadow-[inset_1px_1px_4px_1px_rgb(0,0,0,0.55)] rounded-sm md:rounded-md w-full md:w-135 bg-gray-200" >
                        <input type="text" name="" id="" className="p-2 md:p-3 outline-none bg-transparent w-full"/>
                        <button><FiSearch className="text-2xl mr-2"/></button>
                    </div>
                    <BiUserCircle className="text-3xl w-16 md:hidden"/>
                </div>
                <div className="items-center gap-4 hidden md:flex">
                    <p>Contact Us</p>
                    <button className="py-3 px-6 border-gray-700 drop-shadow-md border rounded-md">SIGN UP</button>
                    <button className="py-3 px-6 border-gray-700 drop-shadow-md border rounded-md">SIGN IN</button>
                </div>
            </div>
        </div>
    )
}