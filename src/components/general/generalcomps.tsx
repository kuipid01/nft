import { cn } from "@/lib/utils";
import Image from "next/image";
import staricon from "@/app/assets/staricon.png";
import { twMerge } from "tailwind-merge";
import { StarIcon } from "lucide-react";
interface TitleProps {
  title: string;
  subtext: string;
  link?: string;
}

export const TitleSec = ({ title, subtext, link }: TitleProps) => {
  return (
    <div className=" flex flex-col ">
      <Image className=" mb-2" src={staricon} alt="star" />
      <div className=" flex justify-between items-end">
        <div>
          <h1 className="titletext mb-3">{title}</h1>
          <p className="subtitletext max-w-5xl">{subtext}</p>
        </div>
        <button className="hidden md:block text-nowrap btngrayp">{link}</button>
      </div>
    </div>
  );
};

export const PriBtn = ({
  styles,
  text,
  link,
}: {
  styles: string;
  text: string;
  link?: string;
}) => {
  return <button className={twMerge("btnpurple", styles)}>{text}</button>;
};

export const Star = ({ check }: { check: boolean }) => {
  return (
    <div className="border-[#262626] grid place-items-center  border bg-[#141414] rounded-full size-[38px] ">
      <StarIcon
        size={20}
        stroke="#141414"
        fill={check ? "#FFE500" : "#999999"}
      />
    </div>
  );
};
