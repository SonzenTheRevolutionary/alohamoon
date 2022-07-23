import Image from 'next/image'
import flowerIcon from '../public/icons/flower 2.png'
import heroDots from '../public/icons/dots.png'
import heroFlowers from '../public/icons/flower-p-500.png'

function Hero() {
    return (
        <div id="Hero" className="flex relative pt-20 px-[5%] md:py-44 md:pt-52 pb-20 md:pb-auto w-full">


            <div className=" pt-7 flex-1 justify-start md:justify-center max-w-[1200px] m-auto z-40">
                <div className="md:max-w-[85%] md:ml-[50px]">
                    <div className="w-[70px] mb-5">
                        <Image className='max-w-100%' src={flowerIcon} alt="header" width={400} height={429} />
                    </div>

                    <h1 className="mt-5 mb-[15px] font-syne font-extrabold text-3xl md:text-[53px] md:leading-[57px]">
                        The essence of health <br />& vitality in one place.
                    </h1>

                    <p className=" mb-4 md:mb-[50px] font-playfair text-base md:text-[22px] leading-[25px] text-dim-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className='flex flex-col md:flex-row text-center md:space-x-[20px] justify-start max-w-fit'>
                        <button className="relative bg-burlywood mb-4 md:mb-0 py-3 px-8 md:px-5 rounded-md text-sm font-syne font-bold">Make Reservation</button>
                        <button className='relative bg-white text-burlywood py-3 px-8 md:px-5 rounded-md text-sm font-syne font-bold'>Our Treatments</button>
                    </div>
                </div>
            </div>

            <div className='absolute flex-1 opacity-60 md:opacity-100 right-1 top-[50px] md:left-0 md:top-16 md:right-0 w-[200px] md:max-w-[500px]'>
                <Image src={heroDots} alt="header" width={500} height={353} />
            </div>

            <div className='absolute flex-1 left-0 bottom-0 w-28 md:w-[200px] md:max-w-[500px]'>
                <Image src={heroFlowers} alt="header" width={700} height={746} />
            </div>

            <div id='banner-overlay'>

            </div>
        </div>
    )
}

export default Hero