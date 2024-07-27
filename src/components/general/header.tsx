"use client";
import React, { useRef } from "react";
import Nav from "./nav";
import bgspiralimage from "@/app/assets/AbstractDesign.svg";
import homehead from "@/app/assets/homehead.png";
import subimage from "@/app/assets/SubContainer.png";
import home from "@/app/assets/home.png";
import assetsicon from "@/app/assets/assetsicon.png";
import propertyicon from "@/app/assets/propertyicon.png";
import smarthomeicon from "@/app/assets/smarthomeicon.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
interface Props {}

const Header = (props: Props) => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "end start"],
  });
  const scrollYValue = useTransform(scrollYProgress, [0, 1], [150, -150]);
  console.log(scrollYValue);
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
        <section className=" px-4 md:px-0 md:pl-4 py-10 xl:pl-20 2xl:pl-[162px] md:py-0 bg-[#141414]   relative flex lg:flex-row flex-col-reverse flex-1">
          <div className=" flex-1   flex justify-center items-center h-full">
            <div className="flex flex-col mx-auto w-full   md:max-w-[610px]">
              <motion.h1
                initial={{
                  opacity: 0,
                  translateY: -30,

                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 99%, 0% 100%)",
                }}
                transition={{
                  ease: "easeInOut",
                }}
                className=" text-[28px] md:h1text mb-5"
              >
                Discover Your Dream <br /> Property with Estatein
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  translateY: -30,

                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 99%, 0% 100%)",
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className=" greyp mb-[50px]"
              >
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: -30,

                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 99%, 0% 100%)",
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="flex flex-col md:flex-row mb-[50px] gap-4 items-center"
              >
                <button className=" w-full md:w-fit btnblackp">
                  Learn More
                </button>
                <button className=" w-full md:w-fit btnpurple">
                  Browse Properties
                </button>
              </motion.div>
              <div className="flex flex-row w-full  flex-wrap gap-3 md:gap-4 items-center">
                {stats.map((t, i) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      translateY: 30 + i,
                    }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                    }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0.1 * i,
                    }}
                    key={i}
                    className="btngrayp w-[calc(50%-6px)]  md:w-auto md:last-of-type:w-auto last-of-type:w-full flex flex-col gap-[2px]"
                  >
                    <h1 className=" md:text-left text-center">{t.val}</h1>
                    <p className="md:text-left text-center text-[#999999] text-nowrap text-sm">
                      {t.title}
                    </p>
                  </motion.div>
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
            <motion.img
              ref={circleRef}
              style={{
                translateY: scrollYValue,
              }}
              src={subimage.src}
              initial={{
                opacity: 0,
                clipPath: "circle(0% at 50% 5%)",
              }}
              animate={{
                opacity: 1,
                clipPath: "circle(50% at 50% 50%)",
              }}
              transition={{
                ease: "circInOut",
                delay: 0.2,
              }}
              alt="discover "
              className="absolute 2xl:left-[-96px] transition-all duration-200 ease-in-out xl:left-[-65px] z-50  top-24"
            />
          </div>
        </section>
      </div>
      <div className=" px-4">
        <motion.div className=" py-[10px] overflow-clip cardbg  mb-[61px]  mt-10 ">
          <motion.div
            className=" justify-start items-center  px-[20px]   w-[200%] flex "
            initial={{
              translateX: "0%",
            }}
            animate={{
              translateX: "-50%",
              marginLeft: 20,
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {" "}
            {[0, 1].map((card, i) => (
              <div key={i} className=" w-1/2 shrink-0 gap-5  flex">
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    className=" flex shrink-0 flex-col h-[144px] justify-center  w-[calc(25%-20px)]  items-center gap-[14px] btngrayp "
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
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
