import React from "react";
import { PriBtn, Star, TitleSec } from "./general/generalcomps";
import Image from "next/image";
import property1 from "@/app/assets/property1.png";
import property2 from "@/app/assets/property2.png";
import property3 from "@/app/assets/property3.png";
import {
  ArrowLeft,
  ArrowRight,
  Bed,
  BluetoothSearching,
  Car,
  ChartBarStackedIcon,
  FireExtinguisher,
  Home,
  PanelBottomClose,
  Sun,
  Trees,
} from "lucide-react";

interface Props {}
const questions: Question[] = [
  {
    title: "How do I search for properties on Estatein?",
    desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    title: "Modern Luxury Apartment",

    desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    title: "Charming Beachfront Bungalow",

    desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
];

interface Question {
  title: string;
  desc: string;
  link?: string;
}
export const Questions = (props: Props) => {
  return (
    <div className="px-4 xl:px-20 2xl:pl-[162px] py-[61px] lg:py-[90px] 2xl:py-[110px]">
      <TitleSec
        link="View All FAQ’s"
        title="Frequently Asked Questions"
        subtext="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      />
      <div className="flex mt-20 md:mb-10 mb-[30px] gap-8  flex-wrap ">
        {questions.map((card: Question, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
      <div className=" justify-between gap-[47px] flex items-center">
        <button className="block w-fit text-[14px] md:hidden text-nowrap btngrayp">
          View All FAQ’s
        </button>
        <span className="hidden  items-center  md:flex gap-[2px]">
          <span className="text-[14px] md:text-[18px]  leading-[150%] font-medium  text-white">
            01
          </span>
          <span className="subtitletext">of</span>
          <span className="subtitletext">60</span>
        </span>
        <div className="flex gap-2">
          <div className=" flex justify-center items-center rounded-full border border-[#262626]  size-11 ">
            <ArrowLeft color="#808080" />
          </div>
          <span className=" items-center md:hidden  flex gap-[2px]">
            <span className="text-[14px] md:text-[18px]  leading-[150%] font-medium  text-white">
              01
            </span>
            <span className="subtitletext">of</span>
            <span className="subtitletext">60</span>
          </span>
          <div className=" flex justify-center items-center rounded-full border border-[#262626]  size-11 ">
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ desc, link, title }: Question) => {
  return (
    <div className="p-6 md:p-[30px] 2xl:p-10 shrink-0 md:w-[calc(33.333333%-32px)] w-full max-w-lg cardbg">
      <div className="flex mb-6 w-full  gap-2 flex-wrap "></div>
      <p className="text-white text-[20px]  font-semibold mb-2">{title}</p>
      <p className="text-[16px] mb-8 text-[#999999] font-medium leading-[120%]">
        {desc}
      </p>
      <button className="btngrayp">Read More</button>
    </div>
  );
};
