import React from "react";
import ctaabstarct from "@/app/assets/ctaabstarct.png";
import Image from "next/image";
import { PriBtn } from "./general/generalcomps";
const Cta = () => {
  return (
    <div className="cont relative overflow-clip border-y border-[#262626]  ">
      <Image
        className=" absolute -bottom-5  -left-5"
        src={ctaabstarct}
        alt="abstart"
      />
      <div className=" relative flex justify-between  items-center flex-col md:flex-row">
        <div className=" flex flex-col ">
          {" "}
          <h1 className="titletext mb-2">
            {" "}
            Start Your Real Estate Journey Today
          </h1>
          <p className="subtitletext sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mb-[30px]">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, Estatein is here to assist you every step of the way.
            Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <PriBtn
          styles="md:w-fit text-nowrap w-full"
          text="Explore Properties"
        />
      </div>
    </div>
  );
};

export default Cta;
