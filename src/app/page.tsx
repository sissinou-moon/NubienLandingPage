import Hero from "@/sections/Hero";
import Header from "@/sections/Header";
import About from "@/sections/About";
import ChooseUs from "@/sections/ChooseUs";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <div className="relative">
            <Header/>
            <Hero />
            <About />
            <ChooseUs />
            <Features />
            <Pricing />
            <Footer />

            {/* Bottom blur overlay */}
            <div className="fixed bottom-0 left-0 w-full h-36 fadingBlur z-50 pointer-events-none" />

        </div>
    );
}
