import Image from "next/image"
import logo from '../public/alohamoon logo.png'
import Hamburger from '../public/icons/hamburger.svg'
import { MenuIcon } from '@heroicons/react/solid'
import InstagramIcon from '../public/icons/instagram.svg'
import FacebookIcon from '../public/icons/facebook.svg'

console.log(Hamburger)

function Header() {
    return (
        <div className="flex fixed top-0 z-50 w-full overflow-visible justify-between items-center md:min-h-[70px] px-5 md:px-6 bg-white">

            <div className="w-48 md:w-60 h-auto mt-2">
                <Image src={logo} alt="header" width={900} height={96} />
            </div>

            <div className="flex justify-between items-center">
            <div className="flex justify-center relative items-center space-x-4">
                <FacebookIcon className="hidden md:block w-[15px] h-[50px] mr-[-12px]" />
                <InstagramIcon className="hidden md:block w-[18px] h-[50px]" />
                <Hamburger className="w-[35px] h-[50px]" />
                <h1 className="hidden md:block font-syne font-extrabold text-[9px] leading-5 tracking-[5px]">MENU</h1>
            </div>
            </div>
        </div>
    )
}

export default Header