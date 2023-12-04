import React, { useState } from "react";
import "./SideBarStyle.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FiFolder, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const SideBar = () => {
  const menus = [
    { name: "dashboard", link: "/admin/dashboard", icon: MdOutlineDashboard },
    { name: "news", link: "/admin/news", icon: FiMessageSquare },
    { name: "profile", link: "/admin/profile", icon: AiOutlineUser },
    { name: "Messages", link: "/admin/contact-messages", icon: FiFolder },
    { name: "QuickLink", link: "/admin/qlink", icon: FiFolder },
    { name: "academic", link: "/admin/academic", icon: FiFolder },
    { name: "slideshow", link: "/admin/slideshow", icon: FiFolder },
    { name: "Course", link: "/admin/course", icon: FiFolder },
    { name: "photos", link: "/admin/photos", icon: FiFolder },
  ];

  const [open, setOpen] = useState(true);
  return (
    <section>
      <div
        className={` bg-[#a19810] min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 w text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {/* {menus?.map((menu, i) => ( */}
          <NavLink
            to={menus[0].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(MdOutlineDashboard, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${0 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[0].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[0].name}
            </h2>
          </NavLink>

          <NavLink
            to={menus[1].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiMessageSquare, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${1 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[1].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[1].name}
            </h2>
          </NavLink>

          <NavLink
            to={menus[2].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(AiOutlineUser, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${2 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[2].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[2].name}
            </h2>
          </NavLink>

          <NavLink
            to={menus[3].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiFolder, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${3 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[3].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[3].name}
            </h2>
          </NavLink>

          <NavLink
            to={menus[4].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiFolder, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${4 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[4].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[4].name}
            </h2>
          </NavLink>

          <NavLink
            to={menus[5].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiFolder, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${5 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[5].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[5].name}
            </h2>
          </NavLink>
          <NavLink
            to={menus[6].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiFolder, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${6 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[6].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[6].name}
            </h2>
          </NavLink>
          <NavLink
            to={menus[7].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiFolder, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${7 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[7].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[7].name}
            </h2>
          </NavLink>
          <NavLink
            to={menus[8].link}
            // key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#7b773b] rounded-md group"
          >
            <div>{React.createElement(FiFolder, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${8 + 1}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menus[8].name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 
                group-hover:left-14 group-hover:duration-200 group-hover:w-fit`}
            >
              {menus[8].name}
            </h2>
          </NavLink>
          {/* ))}  */}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
