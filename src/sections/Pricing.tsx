"use client"

import { motion } from "framer-motion"
import CheckSVG from "@/components/CheckSVG";
import FingerPrintSVG from "@/components/fingerPrintSVG";

const pricing = [
    {
        title: "General Admission",
        desc: "Access to the main stage, exhibitions, and standard networking sessions.",
        price: 299,
        features: [
            "Entry to keynote sessions",
            "Access to tech expo floor",
            "Standard networking lounge",
            "Summit welcome kit",
        ],
    },
    {
        title: "Business Pass",
        desc: "Premium experience with priority access, exclusive sessions, and networking.",
        price: 599,
        features: [
            "Priority seating",
            "Access to VIP lounge",
            "Invitation to speaker dinner",
            "Premium summit kit",
        ],
    },
    {
        title: "VIP Pass",
        desc: "Premium experience with priority access, exclusive sessions, and networking.",
        price: 799,
        features: [
            "Priority seating",
            "Access to VIP lounge",
            "Invitation to speaker dinner",
            "Premium summit kit",
        ],
    },
]

export default function PricingScroll() {
    return (
        <div className='bg-black h-full z-10 relative px-15 flex flex-col items-center justify-center pt-10'>
            <div className='flex flex-row px-3 py-1.5 rounded-full border border-white/10 bg-black/50 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gap-2 mb-5'>
                <div className='flex justify-center px-2 py-1 text-xs items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-full'><FingerPrintSVG/></div>
                Pricing
            </div>
            <div id='pricing' className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto py-20">
                {/* Left: Sticky Video */}
                <div className="hidden md:block sticky top-20 h-[80vh] rounded-2xl overflow-hidden shadow-xl mb-20">
                    <video
                        src="https://framerusercontent.com/assets/25vAAVNHXPB5rX5qv52YL576GE.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover md:object-contain"
                    />
                </div>

                {/* Right: Pricing Cards */}
                <div className="space-y-5 mb-20">
                    {pricing.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl border ${i === 1 ? 'border-white/60' : 'border-white/20'}`}
                        >
                            <div className='flex flex-row justify-between items-center'>
                                <h3 className="text-md font-bold">{plan.title}</h3>
                                {i === 1 ? <div className='text-[11px] font-[600] text-white/60 px-3 py-1 border border-white/40 rounded-full'>Popular</div> : <></>}
                            </div>
                            <p className="text-white/60 mt-2">{plan.desc}</p>
                            <div className='flex flex-row gap-1 items-end'>
                                <p className="text-3xl font-bold mt-4">${plan.price}</p>
                                <p className='text-sm text-white/60'>/ month</p>
                            </div>

                            <div className='w-full h-[0.5px] bg-white/30 mt-4'></div>

                            <ul className="mt-4 space-y-2 text-gray-200">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className='flex flex-row gap-2 items-center'>
                                        <CheckSVG/>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className={`flex px-4.5 py-2.5 rounded-xl justify-center items-center ${i === 1 ? 'bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] text-white transition-all ease-in-out duration-600 hover:text-white/50 cursor-pointer' : 'bg-white text-black transition-all ease-in-out duration-800 hover:opacity-70 cursor-pointer'} font-[600] text-md mt-5`}>
                                Get Started!
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
