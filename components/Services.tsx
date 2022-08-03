import Image from 'next/image'
import massageIcon from '../public/icons/massage icon.png'
import lotionIcon from '../public/icons/lotion icon.png'
import oilIcon from '../public/icons/oils.png'
import serviceImg from "../public/service image.jpeg"
import Link from 'next/link'
import { Post } from '../typings'
import { sanityClient, urlFor } from '../sanity'


import React from 'react'


let instance=0;

function Services({ post }) {
    instance = post.postNumber;
    console.log(instance);

    let category = post.categories.map(category => category.title)
    let mainImage = urlFor(post.mainImage).url()!

    console.log(instance)

    if (category == "service") {
        return (
                <div className={`flex flex-col order-${instance} justify-between pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen`}>
                    <div className="w-[50px] max-w-[50px]">
                        <img src={
                            urlFor(post.mainImage).url()!
                        } alt="header" />
                    </div>
                    <div className="md:max-w-[400px]">
                        <h3 className="mt-10 mb-[10px] text-[18px] leading-[22px] font-syne font-bold">{post.title}</h3>
                        <p className="mb-[10px] font-playfair text-dim-gray text-[17px] leading-[23px]">{post.description}</p>

                        <Link href="/">
                            <a className="font-syne font-bold text-sm leading-[17px] mt-5 underline">Learn More</a>
                        </Link>
                    </div>
                </div>
        )
    } else if (category == "service-image") { 
        return (
            <div id='service-img' className={`order-${instance} overflow-hidden min-h-[300px] max-h-full bg-linen`}>
                <style>
                    {`#service-img{background-image: url(${mainImage});}`}
                </style>
            </div>
        )
    }
}

export default Services

/*return (
    <div id='services' className="relative grid xsm:grid-cols-2 md:grid-cols-4 gap-3 items-stretch place-content-stretch justify-items-stretch justify-evenly mx-auto xsm:px-[10px] pt-[10px]">

        <div className="flex flex-col justify-between pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen">
            <div className="w-[50px] max-w-[50px]">
                <Image src={massageIcon} alt="header" width={800} height={1153} />
            </div>
            <div className="md:max-w-[400px]">
                <h3 className="mt-10 mb-[10px] text-[17px] leading-[22px] font-syne font-bold">Massage</h3>
                <p className="mb-[10px] font-playfair text-dim-gray text-[17px] leading-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <Link href="/">
                    <a className="font-syne font-bold text-sm leading-[17px] mt-5 underline">Learn More</a>
                </Link>
            </div>
        </div>



        {/*s Service Image 





        <div className="flex flex-col justify-between pt-[30px] pb-10 px-[34px] min-h-[300px] bg-linen">
            <div className="w-[50px] max-w-[50px]">
                <Image src={oilIcon} alt="header" width={800} height={1153} />
            </div>
            <div className="md:max-w-[400px]">
                <h3 className="mt-10 mb-[10px] text-[17px] leading-[22px] font-syne font-bold">Oil Therapy</h3>
                <p className="mb-[10px] font-playfair text-dim-gray text-[17px] leading-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                <Link href="/">
                    <a className="font-syne font-bold text-sm leading-[17px] mt-5 underline">Learn More</a>
                </Link>
            </div>

        </div>

    </div>
 
}
 
export default Services

)*/