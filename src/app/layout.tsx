import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-mulish",
});

export const metadata: Metadata = {
    title: "My Next.js App",
    description: "Using Mulish Font",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${mulish.variable} antialiased`} style={{ fontFamily: "var(--font-mulish), serif" }}>
        {children}
        </body>
        </html>
    );
}
