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
const reviews: Review[] = [
  {
    title: "Cozy Family Home",
    review: "Warm and inviting home in a quiet neighborhood.",
    profile: {
      image: "https://randomuser.me/api/portraits/women/75.jpg", // Replace with actual profile image
      name: "Jane Doe",
      location: "New York City",
    },
    star: 4,
  },
  {
    title: "Modern Luxury Apartment",
    review: "Spacious and stylish apartment with breathtaking city views.",
    profile: {
      image: "https://randomuser.me/api/portraits/men/75.jpg", // Replace with actual profile image
      name: "John Doe",
      location: "Los Angeles",
    },
    star: 3,
  },
  {
    title: "Charming Beachfront Bungalow",
    review:
      "Relax and unwind in this idyllic beachfront property with stunning ocean views.",
    profile: {
      image: "https://randomuser.me/api/portraits/women/76.jpg", // Replace with actual profile image
      name: "Sarah Lee",
      location: "Miami Beach",
    },
    star: 3,
  },
];

interface Review {
  title: string;
  review: string;
  profile: { image: string; name: string; location: string };
  star: number;
}
export const Reviews = (props: Props) => {
  return (
    <div className="cont">
      <TitleSec
        link="View All Testimonials"
        title="What Our Clients Say"
        subtext="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />
      <div className="flex mt-20 md:mb-10 mb-[30px] gap-8  flex-wrap ">
        {reviews.map((card: Review, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
      <div className=" justify-between gap-[47px] flex items-center">
        <button className="block w-fit text-[14px] md:hidden text-nowrap btngrayp">
          View All Testimonials
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

const Card = ({ profile, review, star, title }: Review) => {
  return (
    <div className="p-6 md:p-[30px] 2xl:p-10 shrink-0 md:w-[calc(33.333333%-32px)] w-full max-w-lg cardbg">
      <div className="flex mb-6 w-full  gap-2 flex-wrap ">
        {Array.from({ length: star }, (_, index) => (
          <Star key={`star-${index}`} check={true} />
        ))}
      </div>
      <p className="text-white text-[20px]  font-semibold mb-2">{title}</p>
      <p className="text-[16px] mb-8 text-[#ffffff] font-medium leading-[120%]">
        {review}
      </p>
      <div className=" flex  gap-2 items-center">
        <Image
          className=" rounded-full object-cover"
          width={50}
          height={50}
          src={profile.image}
          alt="revewer image"
        />
        <div className=" flex flex-col">
          <p className=" text-[16px] md:text-[18px] leading-[150%] font-medium text-white">
            {profile.name}
          </p>
          <p className=" text-[14px] md:text-[18px] text-[#999999] leading-[150%] font-medium ">
            {profile.location}
          </p>
        </div>
      </div>
    </div>
  );
};
