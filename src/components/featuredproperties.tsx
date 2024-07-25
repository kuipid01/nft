import React from "react";
import { PriBtn, TitleSec } from "./general/generalcomps";
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
const properties = [
  {
    image: property1.src,
    title: "Modern Luxury Apartment",
    description: "Spacious and stylish apartment with breathtaking city views.",
    features: [
      {
        icon: <Bed />, // Replace with the actual Lucide Bed component
        text: "4 Bedrooms",
      },
      {
        icon: <Car />, // Replace with the actual Lucide Car component
        text: "2 Car Parking",
      },
      {
        icon: <PanelBottomClose />, // Replace with the actual Lucide Pool component
        text: "Swimming Pool",
      },
    ],
    price: 350000,
  },
  {
    image: property2.src,
    title: "Cozy Family Home",
    description: "Warm and inviting home in a quiet neighborhood.",
    features: [
      {
        icon: <Home />, // Replace with the actual Lucide Home component
        text: "3 Bedrooms",
      },
      {
        icon: <Trees />, // Replace with the actual Lucide Tree component for garden
        text: "Garden",
      },
      {
        icon: <ChartBarStackedIcon />, // Replace with the actual Lucide Garage component
        text: "Garage",
      },
    ],
    price: 220000,
  },
  {
    image: property3.src,
    title: "Charming Beachfront Bungalow",
    description:
      "Relax and unwind in this idyllic beachfront property with stunning ocean views.",
    features: [
      {
        icon: <BluetoothSearching />, // Replace with the actual Lucide Beach component
        text: "Beachfront",
      },
      {
        icon: <Sun />, // Replace with the actual Lucide Sun component
        text: "Sunny Patio",
      },
      {
        icon: <FireExtinguisher />, // Replace with the actual Lucide Fire component for fireplace
        text: "Fireplace",
      },
    ],
    price: 480000,
  },
  // Add more properties as needed...
];

interface Feature {
  icon: React.ReactNode;
  text: string;
}
interface Property {
  image: string;
  title: string;
  description: string;
  features: Feature[];
  price: number;
}
export const Featuredproperties = (props: Props) => {
  return (
    <div className="px-4 xl:px-20 2xl:pl-[162px] py-[110px]">
      <TitleSec
        link="View All Properties"
        title="Featured Properties"
        subtext="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information."
      />
      <div className="flex mt-20 md:mb-10 mb-[30px] gap-8  flex-wrap ">
        {properties.map((card: Property, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
      <div className=" justify-between flex items-center">
        <button className="block w-fit md:hidden text-nowrap btngrayp">
          View All Properties
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

interface cardprop {}
const Card = ({ description, features, image, price, title }: Property) => {
  return (
    <div className="p-6 md:p-[30px] 2xl:p-10 shrink-0 md:w-[calc(33.333333%-32px)] w-full max-w-lg cardbg">
      <Image
        height={318}
        width={432}
        className=" mb-7 rounded-md"
        alt="property image"
        src={image}
      />
      <p className="cardtext mb-1.5">{title}</p>
      <p className="cardsubtext mb-7">{title}</p>
      <div className="flex mb-6 w-full  gap-2 flex-wrap ">
        {features.map((feature, i) => (
          <div className="md:w-[calc(33.333333%-32px)] min-w-fit" key={i}>
            {" "}
            <span className=" text-nowrap  text-[14px] 2xl:text-[18px] font-medium px-[10px] py-2 rounded-[28px] bg-[#1A1A1A] border border-[#262626] text-white  gap-1 flex items-center">
              {feature.icon} {feature.text}
            </span>{" "}
          </div>
        ))}
      </div>
      <div className=" flex justify-between">
        <div className=" flex flex-col">
          <p className="subtitletext">Price</p>
          <h1 className=" text-[18px] md:text-[20px]  font-semibold  leading-[150%]">
            #{price}
          </h1>
        </div>
        <PriBtn styles="text-[14px]" text="View Property Details" />
      </div>
    </div>
  );
};
