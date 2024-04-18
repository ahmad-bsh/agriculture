import Hero from "@/_components/Hero";
import Link from "next/link";

export default function News() {
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
                <li className="sm:text-xl">News</li>
              </ul>
            </div>
          </div>
          <div className="text-2xl sm:text-4xl font-bold ">News</div>
        </div>
      </Hero>
    </main>
  );
}
