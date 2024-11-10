"use client"

import Image from "next/image"
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {

    // Create a ref to hold the element where the typing effect will be displayed
    const el = useRef(null);

    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ["Full Stack developer", "Frontend Developer"],
            typeSpeed: 70,
            backSpeed: 20,
            loop: true,
        };

        // Initialize Typed.js
        const typed = new Typed(el.current, options);

        // Cleanup function to destroy the instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="w-full min-h-screen relative bg-image">
            <div className="elissp absolute top-12">
                <Image src={"Ellipse 1.svg"} alt="ellipse svg" width={120} height={100} priority quality={100} />
            </div>
            <div className="elissp absolute right-0 bottom-16">
                <Image src={"Ellipse 2.svg"} alt="ellipse svg" width={120} height={100} priority quality={100} />
            </div>
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-10 lg:py-20">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 px-2 py-2 relative">
                    <h1 className="font-extrabold tracking-tight text-4xl">
                        Hello, I’m Hasnain,
                    </h1>
                    {/* Full Stack Developer */}
                    <h2 className="font-extrabold text-[#9900FF] tracking-tight text-3xl md:text-4xl lg:text-[3.2rem]" ref={el}></h2>
                </div>
                <div className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center relative">
                    <Image
                        src="/dev.png"
                        alt="developer illustration"
                        width={450}
                        height={400}
                        priority
                        quality={100}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="elissp absolute right-32 -bottom-24">
                <Image src={"/Group6.svg"} alt="Group1 svg" width={120} height={100} priority quality={100} />
            </div>
        </div>
    )
}

export default HeroSection
