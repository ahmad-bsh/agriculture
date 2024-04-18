import Hero from "@/_components/Hero";
import Link from "next/link";

export default function Shop() {
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
                <li className="sm:text-xl">Shop</li>
              </ul>
            </div>
          </div>
          <div className="text-2xl sm:text-4xl font-bold ">Shop</div>
        </div>
      </Hero>
    </main>
  );
}
