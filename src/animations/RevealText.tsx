"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface RevealTextProps {
    text: string
    className?: string
}

export default function RevealText({ text, className }: RevealTextProps) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    return (
        <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
            {text.split("").map((char, index) => {
                const staggerFactor = 0.0035
                const start = index * staggerFactor
                const end = start + 0.2

                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1], { clamp: true })
                const y = useTransform(scrollYProgress, [start, end], [20, 0], { clamp: true })

                return (
                    <motion.span
                        key={index}
                        style={{ opacity, display: "inline-block" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                )
            })}
        </div>
    )
}
