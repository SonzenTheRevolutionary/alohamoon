import Head from 'next/head'
import { sanityClient } from '../sanity'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import flowerIcon from '.././public/icons/flower-4.png'
import rocksIcon from '.././public/icons/rocks.png'
import bambooIcon from '.././public/icons/bamboo icon.png'
import candleIcon from '.././public/icons/candle icon.png'
import oilsImg from '.././public/oils img.jpeg'
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
import Link from 'next/link'
import Menu from '../components/Menu'
import { Post, Price_Menu } from '.././typings'
import Hourly from '../components/Hourly'
import InformationPost from '../components/InformationPost'
import PriceMenu from '../components/PriceMenu'


export interface Props {
  posts: [Post];
  informationPosts: [Post];
  priceMenu: [Price_Menu];
}


function orderPosts(posts: [Post]) {
  return posts.sort((a, b) => {
    return a.postNumber - b.postNumber
  })
}

export function orderPriceMenu(priceMenu: [Price_Menu]) {
  return priceMenu.sort((a, b) => {
    return a.menuNumber - b.menuNumber
  })
}



export function getCategory(post) {
  let category = post.categories.map(category => category.title).toString()
  return category
}



export default function Home({ posts, informationPosts, priceMenu }: Props) {

  const orderedPosts = orderPosts(posts)
  const orderedInformationPosts = orderPosts(informationPosts)
  const orderedPriceMenu = orderPriceMenu(priceMenu)


  //console.log(typeof posts.map(post => post.categories.map(category => category.title)).toString())

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <Header />
        <Hero />

        <div className='relative grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-3 items-stretch place-content-stretch justify-items-stretch justify-evenly mx-auto px-[10px] pt-[10px]'>
          {orderedPosts.map((post) => {
            if (getCategory(post) == "service" || getCategory(post) == "service-image") {
              let category = getCategory(post)

              return (
                <Services key={post._id} post={post} postNumber={post.postNumber} />
              )
              console.log(post)
            }
            else {
              return
            }
          }
          )}


        </div>

        {/*<Services posts={posts} />*/}

        <section className="relative py-20 m-auto px-[5%]">
          <div className='flex-1 max-w-[1200px] m-auto text-center'>
            <div className="m-auto max-w-[95%] md:max-w-[65%] mb-[60px]">
              <div className="w-[70px] mx-auto md:mb-5">
                <Image src={flowerIcon} alt="header" width={511} height={420} />
              </div>
              <h2 className='my-[10px] font-syne font-bold text-[30px] leading-8 md:text-[39px] md:leading-[42px]'>
                Outcall Services
              </h2>
            </div>

            {/*InformationPosts*/}
            <div className='grid grid-flow-row xsm:grid-cols-2 base:grid-cols-3 items-stretch justify-items-stretch content-evenly justify-evenly'>
              {orderedInformationPosts.map((post) => {
                return (<InformationPost key={post._id} post={post} />)
              }
              )}
            </div>

            <div className='grid md:grid-cols-2 text-justify items-center justify-items-stretch content-evenly justify-evenly gap-14 xsm:gap-[100px] mt-20'>
              <div className="w-auto h-auto max-w-full">
                <Image src={headshot} alt="header" width={3024} height={4032} />
              </div>

              <div className="max-w-[80%] mx-auto my-0 text-left">
                <div className="w-[70px] max-w-full -mb-5 xsm:mb-[-30px]">
                  <Image src={flowerIcon2} alt="header" width={502} height={370} />
                </div>

                <h2 className='font-syne my-6 xsm:my-10 font-bold text-[39px] leading-[42px]'>
                  About Aloha Moon
                </h2>

                <p className="mb-[10px] font-playfair text-[17px] leading-[23px] text-dim-gray">
                  My name is Michelle Soto, I am the Owner and Operator of Aloha Moon Massage. I moved to the beautiful Island of Kauai over twenty years ago, where I have practiced as a Bodyworker and Esthetician.
                  I am the Former Trainer and Lead Therapist of the Hale Lea Spa
                  in both massage and facials at St. Regis Resort, where we received an Award for “Best Spa” While I was Trainer. I was also recognized with a Diamond award for Excellence.
                  <br />
                  <br />
                  I’ve worked with Professional Athletes, Celebrities, Elderly People with Chronic Pain, Pregnant Women  and Honeymooners. I absolutely Love what I do. I have been fortunate enough to learn from highly skilled Teachers from all over the World and  I’m Trained in many Modalities and always learning more. In 2017 I was able Take all the things Ive learned and open my own Day Spa “Aloha Moon” in Old Town Kapaa, Where I can bring  The Quality service from Luxury Spas and offer customized services at an affordable price
                  The Therapists that Work with Me at Aloha Moon are all highly trained and Skilled technicians with Years of experience. We customize the service to your individual needs.
                </p>

                <button className="mt-[50px] relative bg-burlywood mb-4 md:mb-0 py-3 px-8 md:px-5 rounded-md text-sm font-syne font-bold">Make Reservation</button>
              </div>
            </div>







            {/* PRICING GRID */}
            <div className='grid md:grid-rows-4 md:grid-cols-2 gap-y-8 xsm:gap-x-[70px] items-stretch justify-items-stretch content-evenly content-justify-evenly pt-14 ml-4  xsm:pt-28'>
            {orderedPriceMenu.map((price) => {
              return (
                <PriceMenu price={price} />
              )
            }
            )}
            </div>
          </div>
        </section>
        <Hourly />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
  *[_type == "service-post"] {
    _id,
    categories[]->{
    title
  },
  postNumber,
  
    title,
  description,
  mainImage,
    slug
   }`;
  const posts = await sanityClient.fetch(query);


  const informationQuery = `
  *[_type == "information-section"] {
    _id,
    categories[]->{
    title
  },
  postNumber,

    title,
  description,
  mainImage,
    slug
    }`;
  const informationPosts = await sanityClient.fetch(informationQuery);

  const priceMenuQuery = `
  *[_type == "price-menu"] {
    title,
    description,
    price,
    menuNumber,
    Image
    }`;
  const priceMenu = await sanityClient.fetch(priceMenuQuery);

  return {
    props: {
      posts,
      informationPosts,
      priceMenu
    }
  }
} 