import Image from "next/image"
import logo from '../public/alohamoon logo.png'
import Hamburger from '../public/icons/hamburger.svg'
import InstagramIcon from '../public/icons/instagram.svg'
import FacebookIcon from '../public/icons/facebook.svg'
import { useRef, useState } from "react"
import Menu from "./Menu"
import Link from "next/link"

console.log(Hamburger)

function Header(props) {

    

        const [open, setOpen] = useState(false)


    return (
        <div className="flex fixed top-0 z-50 w-full overflow-visible justify-between items-center md:min-h-[70px] px-5 xsm:px-6 bg-white">
            <Link href="/">
            <div className="w-48 md:w-60 h-auto mt-2">
                <Image src={logo} alt="header" width={900} height={96} />
            </div>
            </Link>

            <div className="flex justify-between items-center">
            <div className="flex justify-center relative items-center space-x-4">
                <FacebookIcon className="w-[17px] h-[50px] mr-[-12px]" />
                <InstagramIcon className="w-[22px] h-[50px]" />


                <div onClick={() => setOpen(!open) } className="flex justify-center items-center space-x-3">
                <Hamburger className="w-[35px] h-[50px]" />
                <h1 className="hidden xsm:block font-syne font-extrabold text-[9px] leading-5 tracking-[5px]">MENU</h1>
                </div>
            </div>
            </div>

            {open && <Menu />}
        </div>
    )
}

export default Header