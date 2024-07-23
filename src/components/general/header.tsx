import React from "react";
import Nav from "./nav";
import bgspiralimage from "@/app/assets/AbstractDesign.svg";
import homehead from "@/app/assets/homehead.png";
import subimage from "@/app/assets/SubContainer.png";
import home from "@/app/assets/home.png";
import assetsicon from "@/app/assets/assetsicon.png";
import propertyicon from "@/app/assets/propertyicon.png";
import smarthomeicon from "@/app/assets/smarthomeicon.png";
import Image from "next/image";
interface Props {}

const Header = (props: Props) => {
  const stats = [
    {
      val: "200+",
      title: "Happy Customers",
    },
    {
      val: "10k+",
      title: "Properties For Clients",
    },
    {
      val: "16+",
      title: "Years of Experience",
    },
  ];
  const cards = [
    {
      icon: home,
      title: "Find Your Dream Home",
    },
    {
      icon: assetsicon,
      title: "Unlock Property Value",
    },
    {
      icon: propertyicon,
      title: "Effortless Property Management",
    },
    {
      icon: smarthomeicon,
      title: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <>
      <div className=" h-fit md:h-[120vh] md:overflow-clip flex flex-col relative w-full ">
        <Image
          className="absolute  object-cover top-0 left-0 w-full h-full"
          src={bgspiralimage}
          alt="abstarct"
        />
        <Nav />
        <section className=" px-4 md:pl-4 py-10 xl:pl-20 md:py-0 bg-[#141414]   relative flex lg:flex-row flex-col-reverse flex-1">
          <div className=" flex-1   flex justify-center items-center h-full">
            <div className="flex flex-col mx-auto w-full   md:max-w-[610px]">
              <h1 className=" text-[28px] md:h1text mb-5">
                Discover Your Dream <br /> Property with Estatein
              </h1>
              <p className=" greyp mb-[50px]">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
              <div className="flex flex-col md:flex-row mb-[50px] gap-4 items-center">
                <button className=" btnblackp">Learn More</button>
                <button className=" btnpurple">Browse Properties</button>
              </div>
              <div className="flex flex-row w-full  flex-wrap gap-3 md:gap-4 items-center">
                {stats.map((t, i) => (
                  <div
                    key={i}
                    className="btngrayp w-[calc(50%-6px)]  md:w-auto md:last-of-type:w-auto last-of-type:w-full flex flex-col gap-[2px]"
                  >
                    <h1 className=" md:text-left text-center">{t.val}</h1>
                    <p className="md:text-left text-center text-[#999999] text-nowrap text-sm">
                      {t.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex-1 mb-14 md:mb-0 rounded-[12px] md:rounded-none bg-[#1A1A1A] relative h-full">
            <div className="  bg-[linear-gradient(54deg,_#2A213F_6%,_#1919190_49%)] h-full w-full absolute top-0 left-0"></div>

            <Image
              className="absolute z-[5]  object-cover top-0 left-0 w-full h-full"
              src={bgspiralimage}
              alt="abstarct"
            />
            <Image
              src={homehead}
              alt="heade"
              className=" object-cover relative z-10 w-full h-full md:w-auto"
            />
            <Image
              src={subimage}
              alt="discover "
              className="absolute 2xl:left-[-96px] xl:left-[-65px] z-50  top-24"
            />
          </div>
        </section>
      </div>
      <div className=" px-4">
        <div className=" p-[10px] rounded-[12px] border-[#262626]  border bg-[#141414] justify-center items-center  mb-[61px] gap-[10px] md:gap-5 w-full flex flex-wrap mt-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className=" flex flex-col h-[144px] justify-center  w-[calc(50%-10px)] md:w-[calc(25%-20px)]  items-center gap-[14px] btngrayp "
            >
              <Image
                width={48}
                height={48}
                src={card.icon?.src || ""}
                alt="icon"
              />
              <p className=" text-[14px]  text-center font-semibold">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
