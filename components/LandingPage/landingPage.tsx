"use client"
import React from 'react'
import Hero from './Hero/hero'
import Description from './description/description'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


interface Props {}

function LandingPage(props: Props) {
    const {} = props

    useEffect(() => {
        const lenis = new Lenis();
    
        lenis.on("scroll", (e: any) => {
            console.log(e);
        });
    
        gsap.ticker.add((time) => {
            lenis.raf(time * 800);
        });
    
        return () => {
            gsap.ticker.remove((time) => {
                lenis.raf(time * 800);
            });
            lenis.destroy();
        };
    }, []);
    
    

    return (
        <>
        <Hero />
        <Description />
        </>
    )
}

export default LandingPage
