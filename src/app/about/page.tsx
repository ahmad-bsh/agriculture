import Hero from "@/_components/Hero";
import { Covered_By_Your_Grace } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
export default function About() {
  const features = [
    "Suspe ndisse suscipit sagittis leo",
    "Entum estibulum disgnissim posuere",
    "Lorem Ipsum on the tend to repeat",
  ];

  const testimonials = [
    {
      user: {
        image: "/tolbert.png",
        name: "Bonnie Tolbet",
        role: "Customer",
      },
      review:
        "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
    },
    {
      user: {
        image: "/albert.png",
        name: "Sarah Albert",
        role: "Customer",
      },
      review:
        "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
    },
  ];

  const farmers = [
    {
      name: "Kevin Smith",
      image: "/farmer-1.png",
    },
    {
      name: "Jessica Brown",
      image: "/farmer-2.png",
    },
    {
      name: "David Martin",
      image: "/farmer-3.png",
    },
  ];
  return (
    <main className="">
      <Hero type={"small"} bgImage={"/detail-page-hero.png"}>
        <div className="w-full flex flex-col items-center">
          <div>
            <div className="text-sm breadcrumbs">
              <ul>
                <li className="sm:text-xl">
                  <Link href="/">Home</Link>
                </li>
                <li className="sm:text-xl">About</li>
              </ul>
            </div>
          </div>
          <div className="text-2xl sm:text-4xl font-bold ">About</div>
        </div>
      </Hero>

      <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="aspect-square relative">
            <Image src={"/about-main.png"} alt="" fill />
          </div>
          <div className="flex items-center">
            <div className="w-full flex flex-col gap-3 px-2 xl:px-0">
              <div
                className={`${coveredByYourGrace.className} text-amber-500 text-xl`}>
                Get to Know Us
              </div>
              <div className="text-2xl xl:text-5xl font-extrabold">
                The Best Agriculture Market
              </div>
              <div className="text-green-600 text-xl font-medium">
                There are many variations of passa of lorem available, but the
                majority have suffered alteration.
              </div>
              <div className="text-gray-400">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which don’t look even.
              </div>
              <div>
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="font-bold text-[18px] flex gap-[15px] items-center">
                    <div className="relative size-4">
                      <Image alt="" src={"/checkmark.png"} fill />
                    </div>
                    <div>{feature}</div>
                  </div>
                ))}
              </div>
              <div>
                <button className="btn bg-green-600 text-white">
                  <small>Discover More</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-20 relative">
        <Image
          alt=""
          src={"/testimonials-section.png"}
          fill
          className="z-0 object-cover"
        />
        <div className="mt-10 relative">
          <div
            className={`${coveredByYourGrace.className} text-amber-500 text-xl text-center`}>
            Our Testimonials
          </div>
          <div className="text-2xl xl:text-5xl font-extrabold text-center">
            What They Say
          </div>
          <div className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row my-5 w-full gap-5">
            {testimonials.map((testimonial) => (
              <div className="flex gap-10 p-5 bg-white rounded-md shadow-md">
                <div className="relative aspect-[140/184] w-full ">
                  <Image
                    src={testimonial.user.image}
                    alt=""
                    fill
                    className="rounded-md object-contain"
                  />
                  <div className="absolute -right-[25px] top-1/2 -translate-y-1/2">
                    <Image
                      src={"/testimonials.png"}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[18px] text-gray-500">
                    {testimonial.review}
                  </div>
                  <div className="text-right">
                    <div className="text-[20px] font-extrabold">
                      {testimonial.user.name}
                    </div>
                    <div className="text-gray-500">{testimonial.user.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
        <div className="mt-10">
          <div
            className={`${coveredByYourGrace.className} text-amber-500 text-xl text-center`}>
            Team Members
          </div>
          <div className="text-2xl xl:text-5xl font-extrabold text-center">
            Meet Our Farmers
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 w-full gap-5">
            {farmers.map((farmer) => (
              <div className="relative aspect-[370/440]" key={farmer.name}>
                <Image src={farmer.image} fill alt="" />

                <div className="absolute px-8 py-4 bg-white right-0 bottom-0 backdrop-blur-sm rounded-l-lg ">
                  <div className="absolute -left-[25px] size-[50px] top-1/2 -translate-y-1/2">
                    <Image alt="" src={"/share.png"} fill />
                  </div>
                  <div className="pl-[25px] text-right">
                    <div className="font-extrabold">{farmer.name}</div>
                    <div className="text-gray-500">Farmer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
