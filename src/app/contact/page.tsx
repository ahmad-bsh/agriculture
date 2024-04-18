import Hero from "@/_components/Hero";
import Link from "next/link";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
export default function Contact() {
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
                <li className="sm:text-xl">Contact</li>
              </ul>
            </div>
          </div>
          <div className="text-2xl sm:text-4xl font-bold ">Contact</div>
        </div>
      </Hero>
      <div className="mx-auto max-w-7xl px-3 py-10">
        <div className="flex gap-5 flex-col md:flex-row ">
          <div className="card w-full bg-[#4BAF47] text-white">
            <div className="card-body">
              <div className={`${coveredByYourGrace.className} text-2xl`}>
                <div>About</div>
              </div>
              <div className="mt-2">
                Lorem ipsum is simply free text used by copytypinh refreshing.
                Neque porro est qui{" "}
              </div>
            </div>
          </div>

          <div className="card w-full bg-[#C5CE38] text-white">
            <div className="card-body">
              <div className={`${coveredByYourGrace.className} text-2xl`}>
                <div>Contact</div>
              </div>
              <div className="mt-2">
                <p>+1- (246) 333-0079</p>
                <p>support@agrios.com</p>
                <p>Mon - Fri: 7:00 am - 6:00 pm</p>
              </div>
            </div>
          </div>
          <div className="card w-full bg-[#EEC044] text-white">
            <div className="card-body">
              <div className={`${coveredByYourGrace.className} text-2xl`}>
                <div>About</div>
              </div>
              <div className="mt-2">
                Lorem ipsum is simply free text used by copytypinh refreshing.
                Neque porro est qui{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-3 py-10">
        <form className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full  col-span-2 sm:col-span-1"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full  col-span-2 sm:col-span-1"
          />
          <textarea
            placeholder="Message"
            className="input input-bordered w-full h-32 col-span-2"
          />
          <div>
            <button className="btn bg-green-600 text-white border-none mt-2">
              <small>Send a Message</small>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
