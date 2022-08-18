import React from 'react'
import { sanityClient, urlFor } from '../sanity'
import { Hours_Background } from '../typings';


function Hourly( { hourlyBackground } ) {
  const background = urlFor(hourlyBackground).url()

  return (
    <div>
      <section id="hourly-bg" className='flex items-center justify-start py-[80px] pl-[0%] pr-[5%] min-h-[600px] bg-linen'>
        <style>
          {`
          #hourly-bg {
            background-image: url(${background});
          }
          `}
        </style>
        <div className="flex flex-col shrink items-stretch text-right justify-end p-[45px] xsm:w-[95%] md:w-[45%] min-h-[320px] bg-white">
          <div className='text-left xsm:text-right'>
            <h1 className='font-syne text-[24px] leading-[24px] font-bold text-gray-800 mt-0 mb-[15px]'>Aloha Moon Working Hours</h1>

            <div className="mt-[30px] w-[100%]">
              <div>
                <div className="flex flex-col text-start xsm:flex-row ites xsm:items-end xsm:justify-end mb-[10px]">
                  <h4 className="font-syne my-0 font-bold text-base leading-5 mr-5">
                    Monday to Friday
                  </h4>
                  <div className='shrink hidden xsm:flex w-[50px] h-[1px] bg-line-gray'>
                  </div>

                  <div className="xsm:ml-5">
                    <p className="text-dim-gray mr-[5px] mb-0 font-playfair italic text-[15px] leading-[23px]">
                      09:00 - 20:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-start xsm:flex-row ites xsm:items-end xsm:justify-end mb-[10px]">
                  <h4 className="font-syne my-0 font-bold text-base leading-5 mr-5">
                    Monday to Friday
                  </h4>
                  <div className='shrink hidden xsm:flex w-[50px] h-[1px] bg-line-gray'>
                  </div>

                  <div className="xsm:ml-5">
                    <p className="text-dim-gray mr-[5px] mb-0 font-playfair italic text-[15px] leading-[23px]">
                      09:00 - 20:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-start xsm:flex-row ites xsm:items-end xsm:justify-end mb-[10px]">
                  <h4 className="font-syne my-0 font-bold text-base leading-5 mr-5">
                    Monday to Friday
                  </h4>
                  <div className='shrink hidden xsm:flex w-[50px] h-[1px] bg-line-gray'>
                  </div>

                  <div className="xsm:ml-5">
                    <p className="text-dim-gray mr-[5px] mb-0 font-playfair italic text-[15px] leading-[23px]">
                      09:00 - 20:00 PM
                    </p>
                  </div>
                </div>


                <div className='flex justify-start xsm:justify-end'>
                  <button className="relative bg-burlywood mt-[30px] md:mb-0 py-3 px-5 md::px-5 rounded-md text-sm font-syne font-bold">
                    Book Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

  export default Hourly