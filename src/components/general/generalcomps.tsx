import { cn } from "@/lib/utils";
import Image from "next/image";
import staricon from "@/app/assets/staricon.png";
import { twMerge } from "tailwind-merge";
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
          <h1 className="titlenext mb-3">{title}</h1>
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
