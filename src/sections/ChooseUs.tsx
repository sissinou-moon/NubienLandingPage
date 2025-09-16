import FingerPrintSVG from "@/components/fingerPrintSVG";
import FireSVG from "@/components/fireSVG";
import LordIcon from "@/components/LordIcon";

export default function ChooseUs() {

    const why = [
        {
            title: 'Instant transfers',
            description: 'Send and receive crypto in seconds, without delays or bottlenecks.\n',
            icon: 'yycecovd'
        },
        {
            title: 'Risk analysis',
            description: 'Stay ahead of the market with smart insights into potential risks.',
            icon: 'btfbysou'
        },
        {
            title: 'Real-time alerts',
            description: 'Get notified instantly about price moves, trends, and key events.',
            icon: 'bimokqfw',
        },
        {
            title: 'Tax Optimization',
            description: 'Automate reports and minimise your tax burden with built-in tools.',
            icon: 'jqqjtvlf'
        },
        {
            title: 'Autopilot mode',
            description: 'Let smart algorithms manage your assets while you stay hands-off.',
            icon: 'cfkiwvcc'
        },
        {
            title: 'Maximum security',
            description: 'Protect your funds with top-tier encryption and multi-layer defences.',
            icon: 'uvofdfal'
        },
    ]



    return (
        <div className='relative z-10 flex flex-col items-center justify-start h-screen bg-black'>
            <div className='flex flex-row px-3 py-1.5 rounded-full border border-white/10 bg-black/50 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gap-2 mt-15'>
                <div className='flex justify-center px-2 py-1 text-xs items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-full'><FireSVG/></div>
                Why Choosing Us
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-15 mt-10">
                {why.map((item, index) => (
                    <div key={index} className="flex flex-col items-start p-4 bg-black rounded-[20px] border border-white/20 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
                        <div className="px-2 py-2 bg-white/10 rounded-xl mb-5">
                            <LordIcon icon={item.icon} width={35} height={35} />
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm whitespace-pre-line">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}