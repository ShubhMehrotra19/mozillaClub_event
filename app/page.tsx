"use client";
import React, { useEffect, useState } from "react";
import Entryanimation from "@/components/animation/Entryanimation";
import LandingPage from "@/components/LandingPage/landingPage";

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <>
      {!isAnimationComplete && (
        <Entryanimation onAnimationComplete={handleAnimationComplete} />
      )}
      {isAnimationComplete && <LandingPage />}
    </>
  );
}
