import Image from "next/image";
import menu from '@/assets/menu.png'

export default function Header() {
    return (
        <header className='sticky top-0 flex flex-row justify-between items-center z-20 px-10 py-5 backdrop-blur-xl'>
            <div>
                <Image src='https://framerusercontent.com/images/PDnQxgl1tNjGL6DZbMAh0HAtEU.png' alt='image' width={100} height={100} />
            </div>

            <div className='hidden md:flex flex-row justify-center items-center gap-3 text-sm font-[600] bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/50 text-transparent'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#reason">Reason</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
            </div>

            <div className='lg:block md:block hidden flex justify-center px-3 py-2 text-md items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-xl transition-all duration-600 ease-in-out hover:text-white/60 cursor-pointer'>
                Get Started!
            </div>

            <img src={menu.src} alt='menu' width={20} height={20} className='lg:hidden md:hidden flex cursor-pointer'/>
        </header>
    );
}