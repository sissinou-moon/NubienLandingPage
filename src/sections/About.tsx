import FingerPrintSVG from "@/components/fingerPrintSVG";
import RevealText from "@/animations/RevealText";

export default function About() {
    return (
        <div id='about' className='relative z-10 flex flex-col items-center justify-start h-full bg-black pb-10'>
            <div className='flex flex-row px-3 py-1.5 rounded-full border border-white/10 bg-black/50 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gap-2 mt-10'>
                <div className='flex justify-center px-2 py-1 text-xs items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-full'><FingerPrintSVG/></div>
                About Us
            </div>

            <RevealText text='Built on creativity, collaboration, and top excellence, SYNC is a dynamic team of industry experts committed to achieving exceptional great results...' className='lg:text-[35px] md:text-3xl text-lg text-white font-[500] text-center lg:max-w-250 md:max-w-160 max-w-90 mt-5'>
            </RevealText>
            <div className='flex justify-center px-4 py-2 text-lg items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-xl mt-10 transition-all duration-600 ease-in-out hover:text-white/60 cursor-pointer'>
                Get Started!
            </div>
        </div>
    )
}