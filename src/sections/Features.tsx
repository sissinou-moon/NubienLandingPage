import FireSVG from "@/components/fireSVG";
import FeatureSVG from "@/components/FeatureSVG";
import Image from "next/image";
import AuthSVG from "@/components/AuthSVG";
import FolderSVG from "@/components/FolderSVG";
import VectorSVG from "@/components/VectorSVG";

export default function Features() {

    const threeObjects = [
        'https://framerusercontent.com/images/mHIHt1IfNwNdWZEzuLWbbAsYAQ.png',
        'https://framerusercontent.com/images/3YKs2hgpQG9dzUtGh08BToe4fvk.png',
        'https://framerusercontent.com/images/pdzJAfqq5Mx9EcBL3K4o0wOVLJA.png'
    ]

    const features = [
        {
            title: 'Create your account',
            description: 'Sign up easily and secure your profile in just a few steps.',
            picture: 'https://framerusercontent.com/images/kOouOWjzX8vzWXYEr1KAGfaSqg.png',
            icon: <AuthSVG/>
        },
        {
            title: 'Fund your wallet',
            description: 'Deposit your cryptos or make a transfer to start trading.',
            picture: 'https://framerusercontent.com/images/EP7ZOSvzTj5KWm55XrrWHI76k.png',
            icon: <FolderSVG/>
        },
        {
            title: 'Vector',
            description: 'Integrate your favoire ML-models to store, index and search vector embeddings.',
            picture: 'https://supabase.com/images/index/products/vector-dark.svg',
            icon: <VectorSVG/>
        },
    ]

    return (
        <div className='relative z-10 flex flex-col items-center justify-start h-full bg-black pb-10 -mt-10 px-15'>
            <div className='flex flex-row px-3 py-1.5 rounded-full border border-white/10 bg-black/50 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 gap-2 mt-15'>
                <div className='flex justify-center px-2 py-1 text-xs items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-full'><FeatureSVG width={15} height={15}/></div>
                Features
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    features.map((feature, index) => (
                        <div key={index} className='bg-black rounded-2xl flex flex-col items-start justify-start border border-white/20 pb-2 pt-5 max-h-110 overflow-y-hidden w-full'>
                            <div className='flex flex-row gap-2 items-center justify-center pl-7'>
                                <div className="scale-130">
                                    {feature.icon}
                                </div>
                                <p className='text-md font-[600] text-white' >{feature.title}</p>
                            </div>

                            <p className='pl-7 text-sm text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 mt-5 mb-5 max-w-100'>{feature.description}</p>
                            <img src={feature.picture} alt='hii' className={`w-full ${index < 2 ? 'object-contain h-70' : 'object-cover h-100'} opacity-75`}/>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}