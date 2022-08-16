import Image from 'next/image'
import React from 'react'
import flowerIcon2 from '.././public/icons/flower-3.png'
import teaIcon from '.././public/icons/Tea icon.png'
import boneIcon from '.././public/icons/bone icon.png'
import bodyMassageIcon from '.././public/icons/body massage icon.png'
import faceMaskIcon from '.././public/icons/face mask icon.png'
import geothermicMassageIcon from '.././public/icons/geothermic icon.png'
import fullBodyMassageIcon from '.././public/icons/full body massage icon.png'
import headshot from '.././public/michelle headshot.jpeg'
import saunaIcon from '.././public/icons/sauna icon.png'
import makeupIcon from '.././public/icons/makeup and massage.png'
import { sanityClient, urlFor } from '../sanity'


function PriceMenu({ price }) {
    console.log(price)
  return (
    <div className='flex flex-col md:flex-row justify-start items-center content-center text-start'>

      <div className="w-[44px] md:min-w-[60px] self-start md:self-center md:pr-4  h-[50px] max-w-full">
        <Image src={
            urlFor(price.Image).url()!
        } alt="header" width={512} height={512} />
      </div>

      <div className="w-[100%]">
        {/*price top*/}
        <div className="flex items-end justify-start pb-[10px] w-{100%]">
          <h4 className='font-syne font-bold text-lg leading-5 my-0 xsm:mr-5 whitespace-nowrap'>{price.title}</h4>
          <div className="hidden xsm:block w-[100%] h-[1px] bg-line-gray"></div>

          <div className="flex items-end justify-start flex-shrink-0 flex-grow-0 ml-2 xsm:ml-5">
            <p className="font-playfair italic text-[15px] text-dim-gray leading-[23px] mb-0 mr-[5px]">
              from
            </p>
            <p className="font-syne text-[30px] leading-[30px] mr-[5px]">
              ${price.price}
            </p>
          </div>
        </div>
        <p className="font-playfair text-[17px] leading-[23px] text-dim-gray">
          {price.description}
        </p>
      </div>
    </div>

  )
}

export const getServerSideProps = async () => {
    const query = `
    *[_type == "price-menu"]{
        title,
        description,
        price,
        menuNumber,
        Image
          }
     }`;
    const posts = await sanityClient.fetch(query);
    }

export default PriceMenu