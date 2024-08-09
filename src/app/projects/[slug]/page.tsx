import Hero from "@/_components/Hero";
import SocialMediaLinkItem from "@/_components/SocialMediaLinkItem";
import { projects } from "@/_constants/projects";
import { socialMedia } from "@/_constants/socialMedia";
import Image from "next/image";
import Link from "next/link";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});
const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <Hero type={"small"} bgImage={"/detail-page-hero.png"}>
        <div className="w-full flex flex-col items-center">
          <div>
            <div className="text-sm breadcrumbs">
              <ul>
                <li className="sm:text-xl">
                  <Link href="/">Home</Link>
                </li>

                <li className="sm:text-xl">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="sm:text-xl">
                  {projects
                    .find((project) => project.slug === params.slug)
                    ?.name.join(" ")}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-2xl sm:text-4xl font-bold ">Projects</div>
        </div>
      </Hero>
      <div className="max-w-5xl mx-auto  px-5">
        <div className="aspect-[1170/520] w-full relative mt-20 mb-10">
          <Image
            src={"/projects/project-6-detail.png"}
            alt=""
            fill
            className="absolute w-full rounded-xl"
          />
        </div>

        <div className="flex items-start gap-4 flex-col md:flex-row">
          <div className="w-full md:w-2/3 space-y-5">
            <h3 className="font-bold text-3xl">
              {projects
                .find((project) => project.slug === params.slug)
                ?.name.join(" ")}
            </h3>
            <p className="text-gray-500 text-md font-medium">
              Neque porro est qui dolorem ipsum quia quaed inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
              port lacus quis enim var sed efficitur turpis gilla sed sit amet
              finibus eros. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-md font-bold">
              Biophilia is the idea that humans possess an innate tendency to
              seek connections with nature. The term translates dignissimos
              sunt. Culpa, voluptatem optio!
            </p>
            <p className="text-gray-500 text-md font-medium">
              The term translates When an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. Aelltes port lacus
              quis enim var sed efficitur turpis gilla sed sit amet finibus
              eros. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-gray-500 text-md font-medium">
              Neque porro est qui dolorem ipsum quia quaed inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
              port lacus quis enim var sed efficitur turpis gilla sed sit amet
              finibus eros. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <h3 className="font-bold text-3xl">Challenges</h3>
            <div className="space-y-1">
              <p className="text-md font-bold">
                Nemo enim ipsam voluptatem quia voluptas.
              </p>
              <p className="text-md font-bold">
                Accusamus et iusto odio dignissimos ducimus.
              </p>
              <p className="text-md font-bold">
                Nam liberto tempore, cum soluta nobis est elidend.
              </p>
              <p className="text-md font-bold">
                Accusamus et iusto odio dignissimos ducimus.{" "}
              </p>
            </div>

            <p className="text-gray-500 text-md font-medium">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/3 border sticky top-2 card shadow-md">
            <div className="card-body space-y-2.5">
              <div>
                <p className="text-gray-800">Services:</p>
                <p className="text-md font-bold">
                  {projects
                    .find((project) => project.slug === params.slug)
                    ?.name.join(" ")}
                </p>
              </div>
              <div>
                <p className="text-gray-800">Farmer:</p>
                <p className="text-md font-bold">Mike Hardson</p>
              </div>
              <div>
                <p className="text-gray-800">Duration:</p>
                <p className="text-md font-bold">4.5 Months</p>
              </div>
              <div>
                <p className="text-gray-800">Location:</p>
                <p className="text-md font-bold">Broklyn, New York</p>
              </div>
              <div className="flex items-center gap-5">
                {socialMedia.map((media) => (
                  <SocialMediaLinkItem {...media} key={media.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div
            className={`${coveredByYourGrace.className} text-amber-500 text-2xl text-center mt-20`}>
            Recently Completed
          </div>

          <h2 className="font-bold text-3xl text-center">Similar Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-4">
            {projects
              .filter((project) => project.slug !== params.slug)
              .slice(0, 4)
              .map((project) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
