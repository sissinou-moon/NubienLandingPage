'use client'

import ElectricNoiseBackground from "@/components/animatedBG";
import { motion } from "framer-motion";
import Image from "next/image"

export default function Hero() {

    const logos: string[] = [
        'https://framerusercontent.com/images/vniufJMsSAXh18yjYsUsriXaJgw.png',
        'https://framerusercontent.com/images/ffx7akDwhywGTdzIV6fqasW7N8.png',
        'https://framerusercontent.com/images/yTyqzwdEKp9XJLQBwf8DmWnxws.png',
        'https://framerusercontent.com/images/vniufJMsSAXh18yjYsUsriXaJgw.png',
        'https://framerusercontent.com/images/QJyR5CNEY5EZDa18LPHJLBySZsY.png',
    ]

    return (
        <div id='home' className="relative w-full md:h-screen h-full overflow-y-hidden">
            {/* Background shader */}
            <ElectricNoiseBackground />

            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/10" />

            {/* Your foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className='flex flex-row px-3 py-1.5 rounded-full border border-white/10 bg-black/50 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gap-2 md:mt-10 mt-20'>
                    <div className='flex justify-center px-2 py-1 text-xs items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-full'>2025</div>
                    Next-Gen AI Studio
                </div>
                <h1 className="text-white lg:text-[80px]  md:text-[60px] text-[45px]  max-w-220 font-[500] text-center leading-tight">AI-Driven Success Redefining the Future.</h1>
                <p className="text-white/50 text-md md:max-w-120 max-w-80 font-normal text-center mt-5">
                    Creating latest solutions that redefine innovation. <br />
                    Stay ahead with AI-powered technology for the future.
                </p>
                <div className='flex flex-row gap-3 justify-center items-center mt-10'>
                    <div className='flex px-4.5 py-2.5 rounded-xl justify-center items-center bg-white text-black font-[600] text-md transition-all ease-in-out duration-800 hover:opacity-60 cursor-pointer'>
                        Connect With Us
                    </div>
                    <div className='flex px-4.5 py-2.5 rounded-xl justify-center items-center bg-white/23 text-white font-[600] text-md transition-all ease-in-out duration-800 hover:opacity-70 cursor-pointer'>
                        What's Nubian ?
                    </div>
                </div>
                <div className="relative w-100 overflow-hidden mt-8 mb-10 md:mb-0">
                    <motion.div
                        className="flex gap-16 min-w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20, // speed (increase = slower)
                            ease: "linear",
                        }}
                    >
                        {/* repeat the logos twice for seamless infinite scroll */}
                        {[...logos, ...logos].map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt={`logo-${index}`}
                                width={90}
                                height={35}
                                className="object-contain"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
