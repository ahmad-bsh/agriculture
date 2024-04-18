import Hero from "@/_components/Hero";
import Introduction from "@/_components/Introduction";
import React from "react";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

const HeroContent = () => {
  return (
    <React.Fragment>
      <div className="max-w-md flex-col gap-4">
        <div className="uppercase font-medium">Welcome to agrios farming</div>
        <div className={`${coveredByYourGrace.className} text-4xl xl:text-8xl`}>
          <div>
            Agriculture <span className="text-amber-500">&</span> Eco Farming
          </div>
        </div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <button className="btn bg-green-600 text-white border-none mt-2">
          <small>Discover More</small>
        </button>
      </div>
    </React.Fragment>
  );
};
export default function Home() {
  return (
    <main className="z-0">
      <Hero type="large" bgImage={"/home-hero.png"}>
        <HeroContent />
      </Hero>
      <Introduction />
    </main>
  );
}
