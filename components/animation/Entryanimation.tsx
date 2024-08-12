"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

interface Props {
  onAnimationComplete: () => void;
}

function Entryanimation({ onAnimationComplete }: Props) {
  useEffect(() => {
    gsap.fromTo(
      "#container",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.from("#panel1", { y: "0", duration: 1, delay: 0.5 });
    gsap.from("#panel2", { y: "0", duration: 1, delay: 0.5 });
    gsap.from("#panel3", { y: "0", duration: 1, delay: 0.5 });
    gsap.to("#panel1", {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 1.5,
    });
    gsap.to("#panel2", {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 2,
    });
    gsap.to("#panel3", {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 2.5,
      onComplete: () => {
        onAnimationComplete();
      }
    });
  }, [onAnimationComplete]);

  return (
    <section
      id="container"
      className="h-screen w-screen flex justify-between items-center overflow-hidden"
    >
      <div id="panel1" className="h-full w-[33.5%] bg-black"></div>
      <div id="panel2" className="h-full w-[33.5%] bg-black"></div>
      <div id="panel3" className="h-full w-[33.5%] bg-black"></div>
    </section>
  );
}

export default Entryanimation;
