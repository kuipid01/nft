import Cta from "@/components/cta";
import { Featuredproperties } from "@/components/featuredproperties";
import { Footer } from "@/components/footer";
import Header from "@/components/general/header";
import Nav from "@/components/general/nav";
import { Questions } from "@/components/questions";
import { Reviews } from "@/components/reviews";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#141414]  ">
      <Header />
      <Featuredproperties />
      <Reviews />
      <Cta />
      <Footer />
    </main>
  );
}
