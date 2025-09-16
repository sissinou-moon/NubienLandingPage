"use client"

import { useEffect } from "react";

interface LordIconProps {
    icon: string; // just the icon name, e.g., "yycecovd"
    width?: number;
    height?: number;
}

export default function LordIcon({ icon, width = 250, height = 250 }: LordIconProps) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.lordicon.com/lordicon.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <lord-icon
            src={`https://cdn.lordicon.com/${icon}.json`}
            trigger="loop"
            colors="primary:#ffffff"
            style={{ width: `${width}px`, height: `${height}px` }}
        /> as any
    );
}
