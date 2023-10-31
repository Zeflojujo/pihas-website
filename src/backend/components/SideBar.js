import React, { useState } from 'react';
import "./SideBarStyle.css";
import {HiMenuAlt3} from "react-icons/hi"
import { MdOutlineDashboard } from 'react-icons/md'
import { FiFolder, FiMessageSquare } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

const SideBar = () => {
    const menus = [
        {name: "dashboard", link: "/admin/dashboard", icon: MdOutlineDashboard},
        {name: "news", link: "/admin/news", icon: FiMessageSquare},
        {name: "profile", link: "/admin/profile", icon: AiOutlineUser},
        {name: "slides", link: "/admin/slides", icon: FiFolder},
        {name: "logout", link: "/admin/logout"},
    ];

    const [open, setOpen] = useState(true)
  return (
    <section>
        <div className={`bg-[#0275d8] min-h-screen ${open ? 'w-72': 'w-16'} duration-500 text-gray-100 px-4`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className='cursor-pointer' onClick={() => setOpen(!open)}/>
            </div>
            <div className='mt-4 flex flex-col gap-4 relative'>
            {menus?.map((menu, i) => (
                <NavLink to={menu?.link} key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-blue-800 rounded-md group'>
                    <div>{React.createElement(MdOutlineDashboard, {size: "20"})}</div>
                    <h2
                    style={{
                        transitionDelay: `${i + 1}00ms`
                    }}
                     className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                    <h2 className={`${
                        open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                    rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                    group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}>
                        {menu?.name}
                    </h2>
                </NavLink>
            ))} 
            
            
        </div>
        </div>
    </section>
  )
}

export default SideBar