import Hero from "@/_components/Hero";
import { projects } from "@/_constants/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
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
                <li className="sm:text-xl">Projects</li>
              </ul>
            </div>
          </div>
          <div className="text-2xl sm:text-4xl font-bold ">Projects</div>
        </div>
      </Hero>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto p-4 pt-10 pb-20">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <div className="aspect-[370/570] max-w-xl relative w-full">
              <Image
                src={project.image}
                alt=""
                fill
                className="z-0 absolute w-full aspect-[370/570] rounded-xl"
              />
              <div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent from-20% via-transparent via-50% to-black to-100% rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-2xl sm:text-3xl font-bold text-white">
                  <p>{project.name[0]}</p>
                  <p>{project.name[1]}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
