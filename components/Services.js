import Image from 'next/image'
import massageIcon from '../public/icons/massage icon.png'
import lotionIcon from '../public/icons/lotion icon.png'
import oilIcon from '../public/icons/oils.png'
import serviceImg from "../public/service image.jpeg"
import Link from 'next/link'

function Services() {
    return (
        <div className="relative grid xsm:grid-cols-2 md:grid-cols-4 gap-3 items-stretch place-content-stretch justify-items-stretch justify-evenly mx-auto xsm:px-[10px] pt-[10px]">

            <div className="flex flex-col justify-between pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen">
                <div className="w-[50px] max-w-[50px]">
                    <Image src={massageIcon} alt="header" width={800} height={1153} />
                </div>
                <div className="md:max-w-[400px]">
                    <h3 className="mt-10 mb-[10px] text-[17px] leading-[22px] font-syne font-bold">Massage</h3>
                    <p className="mb-[10px] font-playfair text-dim-gray text-[17px] leading-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <Link className="font-syne font-bold text-sm leading-[17px] mt-5 underline" href="/">Learn More</Link>
                </div>



            </div>

            <div className="flex flex-col justify-between pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen">
                <div className="w-[50px] max-w-[50px]">
                    <Image src={lotionIcon} alt="header" width={800} height={1153} />
                </div>
                <div className="md:max-w-[400px]">
                    <h3 className="mt-10 mb-[10px] text-[17px] leading-[22px] font-syne font-bold">Body Treatments</h3>
                    <p className="mb-[10px] font-playfair text-dim-gray text-[17px] leading-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link className="font-syne font-bold text-sm leading-[17px] mt-5 underline" href="/">Learn More</Link>
                </div>



            </div>


            {/*s Service Image */}
            <div id='service-img' className="flex flex-col pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen">
                </div>





            <div className="flex flex-col justify-between pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen">
                <div className="w-[50px] max-w-[50px]">
                    <Image src={oilIcon} alt="header" width={800} height={1153} />
                </div>
                <div className="md:max-w-[400px]">
                    <h3 className="mt-10 mb-[10px] text-[17px] leading-[22px] font-syne font-bold">Oil Therapy</h3>
                    <p className="mb-[10px] font-playfair text-dim-gray text-[17px] leading-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <Link className="font-syne font-bold text-sm leading-[17px] mt-5 underline" href="/">Learn More</Link>
                </div>



            </div>

        </div>
    )
}

export default Services