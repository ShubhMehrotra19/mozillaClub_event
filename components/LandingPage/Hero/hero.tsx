import React from "react";
import { Anton, Open_Sans } from "next/font/google";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

interface Props {}

function Hero(props: Props) {
  const {} = props;

  return (
    <section className="w-screen h-screen">
      <div className="h-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
        <Image
          src="/images/heroPic.png"
          alt="heroPic"
          layout="fill"
          objectFit="cover"
          className="relative drop-shadow-md"
        />
        <div className="px-10 py-24 mx-auto max-w-7xl absolute transform">
          <Fade direction="up" delay={0.5} triggerOnce>
            <div className="w-full mx-auto text-left md:text-center">
              <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-white sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                {" "}
                Let&apos;s{" "}
                <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white lg:inline">
                  Stand Against Ragging
                </span>
                <br className="lg:block hidden" /> together.{" "}
              </h1>
              <p className="px-0 mb-6 text-md text-white md:text-xl lg:px-24">
                {" "}
                We are here for you, let us know your story and we will help you
                !{" "}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Hero;
