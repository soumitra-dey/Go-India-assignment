import {BsMenuButtonWide} from "react-icons/bs"
import {CgMenuGridR} from "react-icons/cg"
import {RiHome6Line} from "react-icons/ri"
import {TiMessages} from "react-icons/ti"
import {FcTodoList} from "react-icons/fc"



export default function Footer() {


    return (
        <div className="md:hidden flex justify-between bg-n-blue text-white px-4 text-2xl py-2 fixed bottom-0 z-50 w-screen">
            <BsMenuButtonWide/>
            <CgMenuGridR/>
            <RiHome6Line/>
            <TiMessages/>
            <FcTodoList/>
        </div>
    )
}