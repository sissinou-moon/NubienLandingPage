"use client";

import React from "react";

interface VideoPlayerProps {
    src: string;
    width?: string | number;
    height?: string | number;
    className?: string;
}

export default function VideoPlayer({
                                        src,
                                        width = "100%",
                                        height = "auto",
                                        className = "",
                                    }: VideoPlayerProps) {
    return (
        <video
            className={className}
            src={src}
            width={width}
            height={height}
            autoPlay
            loop
            muted
            playsInline
            // controls // uncomment if you want user controls
            style={{ objectFit: "cover" }} // optional: for cover style
        />
    );
}
