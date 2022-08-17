import Image from "next/image"
import Link from "next/link"
import rocksIcon from '.././public/icons/rocks.png'
import { urlFor } from "../sanity"

function InformationPost({ post }) {

  return (
    <div>
      <div className='flex flex-col pt-0 md:px-[34px] pb-10 items-center justify-between'>
        <div className="inline-block w-[50px] max-w-full xsm:pb-3 h-auto">
          <img src={
            urlFor(post.mainImage).url()!} />
        </div>
        <div className='flex-1'>
          <h3 className="font-syne font-bold text-[19px] leading-[22px] mt-10 mb-[10px]">
            {post.title}
          </h3>
          <p className="font-playfair text-[17px] text-dim-gray leading-[23px] mb-[10px]">
            {post.description}
          </p>
          <Link href="/">
            <a className="font-syne font-bold text-sm leading-[17px] mt-5 underline">Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InformationPost