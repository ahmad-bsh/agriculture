import Checkmark from "@/_icons/Checkmark";
import IntroIllustration1 from "@/_icons/IntroIllustration1";
import IntroIllustration2 from "@/_icons/IntroIllustration2";
import { Covered_By_Your_Grace } from "next/font/google";
import Image from "next/image";
import React from "react";
const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

interface IFeature {
  name: string;
  description: string;
  imageUrl: string;
}

const FeatureCard = ({ name, description, imageUrl }: IFeature) => {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2
          className={`${coveredByYourGrace.className} text-amber-500 text-center text-2xl`}>
          {name}
        </h2>
        <p className="sm:text-3xl xl:text-4xl font-bold text-center">
          {description}
        </p>
        <div className="flex justify-center">
          <div className="relative aspect-square max-w-28 w-full flex justify-center mt-2">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const IntroImages = () => {
  return (
    <div className="w-full px-[16%] py-[10%] lg:pl-[3.5%] lg:pr-[1.5%]">
      <div className="aspect-square w-[95%] relative">
        <Image
          src={"/introduction-primary.png"}
          alt=""
          fill
          className="object-cover  rounded-full"
        />
        <div className="aspect-square w-[40%] absolute -bottom-[8%] -left-[8%]">
          <Image
            src={"/introduction-secondary.png"}
            alt=""
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

interface IIntroCheckListItem {
  text: string;
}
const IntroCheckListItem = ({ text }: IIntroCheckListItem) => {
  return (
    <div className="flex gap-5 items-center">
      <Checkmark />
      <div>{text}</div>
    </div>
  );
};

interface IIntroIllustration {
  icon: React.ReactNode;
  text: string;
}
const IntroIllustration = ({ icon, text }: IIntroIllustration) => {
  return (
    <div className="flex w-full gap-4 items-center">
      <div>{icon}</div>
      <div className="text-md md:text-xl xl:text-2xl font-bold">{text}</div>
    </div>
  );
};
const IntroDescription = () => {
  const introCheckListItems: Array<IIntroCheckListItem> = [
    { text: "Lorem Ipsum is not simply random text." },
    { text: "Making this the first true generator on the internet." },
  ];

  const introIllustrations: Array<IIntroIllustration> = [
    { icon: <IntroIllustration1 />, text: "Growing fruits, vegetables" },
    { icon: <IntroIllustration2 />, text: "Tips for ripening your fruits" },
  ];
  return (
    <div className="flex items-center">
      <div className="w-full flex flex-col gap-3 mt-10 px-2 xl:mt-0 xl:px-0">
        <div
          className={`${coveredByYourGrace.className} text-amber-500 text-xl`}>
          Our Introduction
        </div>
        <div className="text-2xl xl:text-5xl font-extrabold">
          Agriculture & Organic Product Farm
        </div>
        <div className="text-green-600 text-xl font-medium">
          Agrios is the largest global organic farm.
        </div>
        <div className="text-gray-400">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </div>
        <div className="flex flex-col xl:flex-row my-4 gap-3 xl:gap-0">
          {introIllustrations.map((illustration) => (
            <IntroIllustration {...illustration} key={illustration.text} />
          ))}
        </div>

        <div>
          {introCheckListItems.map((item) => (
            <IntroCheckListItem {...item} key={item.text} />
          ))}
        </div>
        <div>
          <button className="btn bg-green-600 text-white">
            <small>Discover More</small>
          </button>
        </div>
      </div>
    </div>
  );
};

function Introduction() {
  const features: Array<IFeature> = [
    {
      name: "Feature 1",
      description: "We're using a new Technology",
      imageUrl: "/features/feature-1.png",
    },
    {
      name: "Feature 2",
      description: "We're using a new Technology",
      imageUrl: "/features/feature-2.png",
    },
    {
      name: "Feature 3",
      description: "We're using a new Technology",
      imageUrl: "/features/feature-3.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-10">
      <div className="h-16"></div>
      <div className="-mt-36 mx-auto w-full flex flex-col md:flex-row justify-center items-center gap-10 px-2 xl:px-0">
        {features.map((feature) => (
          <FeatureCard {...feature} key={feature.name} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto flex-1 w-full">
        <IntroImages />
        <IntroDescription />
      </div>
    </div>
  );
}

export default Introduction;
