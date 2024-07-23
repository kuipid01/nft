import React from "react";
import Nav from "./nav";
import bgspiralimage from "@/app/assets/AbstractDesign.svg";
import homehead from "@/app/assets/homehead.png";
import subimage from "@/app/assets/SubContainer.png";
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
  return (
    <div className=" h-[120vh] overflow-clip flex flex-col relative w-full ">
      <Image
        className="absolute top-0 left-0 w-full h-full"
        src={bgspiralimage}
        alt="abstarct"
      />
      <Nav />
      <section className=" bg-black  relative flex flex-1">
        <div className=" w-1/2  flex justify-center items-center h-full">
          <div className="flex flex-col  max-w-[610px]">
            <h1 className="h1text mb-5">
              Discover Your Dream <br /> Property with Estatein
            </h1>
            <p className=" greyp mb-[50px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="flex mb-[50px] gap-4 items-center">
              <button className=" btnblackp">Learn More</button>
              <button className=" btnpurple">Browse Properties</button>
            </div>
            <div className="flex gap-4 items-center">
              {stats.map((t, i) => (
                <div key={i} className="btngrayp flex flex-col gap-[2px]">
                  <h1>{t.val}</h1>
                  <p>{t.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-1/2  bg-[#1A1A1A] relative h-full">
          <div className="  bg-[linear-gradient(54deg,_#2A213F_6%,_#1919190_49%)] h-full w-full absolute top-0 left-0"></div>

          <Image
            className="absolute z-[5]  object-cover top-0 left-0 w-full h-full"
            src={bgspiralimage}
            alt="abstarct"
          />
          <Image
            src={homehead}
            alt="heade"
            className=" object-cover relative z-10  h-full w-auto"
          />
        </div>
        <Image
          src={subimage}
          alt="discover "
          className="absolute left-1/2 -translate-x-1/2 top-24"
        />
      </section>
    </div>
  );
};

export default Header;
