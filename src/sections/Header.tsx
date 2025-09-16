import Image from "next/image";

export default function Header() {
    return (
        <header className='sticky top-0 flex flex-row justify-between items-center z-20 px-10 py-5 backdrop-blur-xl'>
            <div>
                <Image src='https://framerusercontent.com/images/PDnQxgl1tNjGL6DZbMAh0HAtEU.png' alt='image' width={100} height={100} />
            </div>

            <div className='flex flex-row justify-center items-center gap-3 text-sm font-[600] bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/50 text-transparent'>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Reason</a>
                <a href='/'>Features</a>
                <a href='/'>Pricing</a>
            </div>

            <div className='flex justify-center px-3 py-2 text-md items-center bg-gradient-to-t from-[#8A4BFE] to-[#5F4BFE] border border-white/20 text-white font-semibold rounded-xl transition-all duration-600 ease-in-out hover:text-white/60 cursor-pointer'>
                Get Started!
            </div>
        </header>
    );
}