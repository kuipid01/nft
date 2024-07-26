import Image from "next/image";
import React from "react";

import logo from "@/app/assets/logo.svg";
import mail from "@/app/assets/mail.png";
import message from "@/app/assets/message.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

type Props = {};

type ChildLink = {
  name: string;
  link: string;
  children?: ChildLink[];
};

type ParentLink = {
  title: string;
  children: ChildLink[];
};

const links: ParentLink[] = [
  {
    title: "Home",
    children: [
      {
        name: "Hero Section",
        link: "",
      },
      {
        name: "Features",
        link: "",
      },
      {
        name: "Properties",
        link: "",
      },
      {
        name: "Testimonials",
        link: "",
      },
    ],
  },
  {
    title: "About Us",
    children: [
      {
        name: "Our Story",
        link: "",
      },
      {
        name: "Our Works  ",
        link: "",
      },
      {
        name: "Our Team",
        link: "",
      },
      {
        name: "Our Clients",
        link: "",
      },
    ],
  },
  {
    title: "Properties",
    children: [
      {
        name: "Our Story",
        link: "",
      },
      {
        name: "Our Works",
        link: "",
      },
      {
        name: "How It Works",
        link: "",
      },
      {
        name: "Our Team",
        link: "",
      },
      {
        name: "Our Clients",
        link: "",
      },
    ],
  },
  {
    title: "Contact Us",
    children: [
      {
        name: "Contact Form",
        link: "",
      },
      {
        name: "Our Offices",
        link: "",
      },
      {
        name: "Hero Section",
        link: "",
      },
    ],
  },
];

export const Footer = (props: Props) => {
  return (
    <>
      <div className="cont flex gap-[50px] flex-col lg:flex-row justify-between">
        <div>
          <Image
            src={logo}
            className="w-24 mb-[30px] h-7 md:w-auto md:h-auto"
            alt="logo"
          />
          <div className="w-full lg:w-[423px] bg-[#141414] overflow-hidden relative border border-[#262626] h-[66px] rounded-[12px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="absolute outline-none bg-[#141414] pl-[58px] placeholder:subtitletext top-0 left-0 w-full h-full"
            />
            <Image
              src={mail}
              className="absolute top-1/2 -translate-y-1/2 left-[24px] w-auto md:h-auto"
              alt="mail icon"
            />
            <Image
              src={message}
              className="absolute top-1/2 -translate-y-1/2 right-[24px] w-auto md:h-auto"
              alt="message icon"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full gap-5  justify-between lg:flex-nowrap lg:gap-[100.25px]">
          {links.map((link, index) => (
            <LinkItem key={index} link={link} />
          ))}
        </div>
      </div>
      <div
        className="bg-[#1A1A1A] flex flex-col-reverse lg:flex-row items-center justify-between smallcont
    "
      >
        <div className="  flex flex-col md:flow-row items-center gap-9">
          <span>@2023 Estatein. All Rights Reserved.</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="smallroundedcont">
            <Facebook size={20} />
          </div>
          <div className="smallroundedcont">
            <Instagram size={20} />
          </div>
          <div className="smallroundedcont">
            <Twitter size={20} />
          </div>
          <div className="smallroundedcont">
            <Youtube />
          </div>
        </div>
      </div>
    </>
  );
};

interface ParentLinkItemProps {
  link: ParentLink;
}

interface ChildLinkItemProps {
  link: ChildLink;
}

const LinkItem: React.FC<ParentLinkItemProps | ChildLinkItemProps> = ({
  link,
}) => {
  if ("title" in link) {
    // This is a parent link
    return (
      <div className=" relative h-fit  px-5 after:content-[''] after:absolute after:-right-[0px]  after:bottom-0 after:h-full after:w-[1px] after:bg-[#262626]">
        <h4 className="mb-[30px]    subtitletext">{link.title}</h4>
        <ul className=" flex border-[#262626] border-b lg:border-none  pb-5 items-start bg-sgreen-300 flex-col gap-5">
          {link.children.map((item, index) => (
            <li className="w-fit lg:text-nowrap  " key={index}>
              <a href={item.link}>{item.name}</a>
              {item.children && item.children.length > 0 && (
                <LinkItem link={item} />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    // This is a child link
    return (
      <ul>
        <li className=" subtitletext">
          <a href={link.link}>{link.name}</a>
          {link.children && link.children.length > 0 && (
            <ul>
              {link.children.map((item, index) => (
                <li key={index}>
                  <LinkItem link={item} />
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    );
  }
};
