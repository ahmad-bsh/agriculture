import React from "react";

interface IHeroProps {
  bgImage: string;
  type: "small" | "large";
  children?: React.ReactNode;
}
function Hero({ type, children, bgImage }: IHeroProps) {
  return (
    <div
      className={`hero ${
        type === "large"
          ? "h-[calc(100vh-174px)]"
          : "h-[calc(150px)] sm:sm:h-[calc(206px)]"
      } aspect-[64/27]`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-content text-neutral-content max-w-7xl w-full h-full justify-start gap-10">
        {children}
      </div>
    </div>
  );
}

export default Hero;
