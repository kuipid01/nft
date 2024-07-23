import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.svg";
import { twMerge } from "tailwind-merge";
type Props = {};

const navlinks = [
  {
    id: 1,
    text: "home",
    active: true,
  },
  {
    id: 1,
    text: "About us",
    active: false,
  },
  {
    id: 1,
    text: "Properties",
    active: false,
  },
  {
    id: 1,
    text: "services",
    active: false,
  },
];
const Nav = (props: Props) => {
  return (
    <div className="h-fit flex flex-col justify-center items-center">
      <div className="  w-full gap-3 flex justify-center items-center bg-transparent py-2">
        <span>✨Discover Your Dream Property with Estatein</span>
        <span>Learn More</span>
      </div>
      <div className=" bg-[#1A1A1A] flex items-center   relative w-full h-24 px-40">
        <div className=" w-full flex justify-between">
          <Image src={logo} alt="logo" />
          <ul className=" flex gap-6">
            {navlinks.map((link, i) => (
              <li
                className={twMerge(
                  " text-sm font-medium capitalize py-3 px-5",
                  link.active && "btnblack"
                )}
                key={i}
              >
                {link.text}
              </li>
            ))}
          </ul>
          <button className="py-3 px-5 btnblack">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
