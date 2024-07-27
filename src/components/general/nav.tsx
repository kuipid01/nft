import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/logo.svg";
import menu from "@/app/assets/menu.png";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";
type Props = {};

const Nav = (props: Props) => {
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      text: "home",
      active: true,
    },
    {
      id: 2,
      text: "About us",
      active: false,
    },
    {
      id: 3,
      text: "Properties",
      active: false,
    },
    {
      id: 4,
      text: "services",
      active: false,
    },
  ]);
  const handleToggle = (item: {
    id: number;
    text: string;
    active: boolean;
  }) => {
    const link = navLinks.map((l) =>
      l.id === item.id ? { ...l, active: true } : { ...l, active: false }
    );
    setNavLinks(link);
  };
  return (
    <div className="h-fit flex flex-col  z-30 justify-center items-center">
      <div className="  w-full pt-10 pb-2 px-4 text-[12px] gap-3 flex justify-center items-center bg-none md:py-2">
        <span>✨Discover Your Dream Property with Estatein</span>
        <span>Learn More</span>
      </div>
      <div className=" bg-[#1A1A1A] flex items-center   relative w-full h-24 px-4 md:px-40">
        <div className=" w-full flex justify-between">
          <Image
            src={logo}
            className=" w-24 h-7 md:w-auto md:h-auto"
            alt="logo"
          />
          <ul className=" md:flex items-center  hidden gap-6">
            {navLinks.map((link, i) => (
              <motion.li
                whileHover={{
                  scaleX: 1.1,
                  skewY: 5,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                onClick={() => handleToggle(link)}
                className={twMerge(
                  " text-sm font-medium cursor-pointer flex h-fit items-center capitalize py-3 px-5",
                  link.active && "btnblack"
                )}
                key={i}
              >
                {link.text}
              </motion.li>
            ))}
          </ul>
          <button className="py-3 md:flex hidden px-5 btnblack">
            Contact Us
          </button>
          <Image src={menu} className=" md:hidden" alt="menu icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
