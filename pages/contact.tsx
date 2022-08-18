import Image from "next/image"
import Header from "../components/Header"
import flowerIcon from '../public/icons/hero-flower-5.png'
import emailIcon from '../public/icons/email.png'
import phoneIcon from '../public/icons/phone.png'
import heroDots from '../public/icons/dots.png'
import heroFlowers from '../public/icons/flower-p-500.png'
import { useForm } from "react-hook-form";
import { sanityClient } from "../sanity"
import { Price_Menu } from "../typings"
import emailjs from '@emailjs/browser';


interface Props {
    priceMenu: [Price_Menu];
}

emailjs 
export function orderPriceMenu(priceMenu: [Price_Menu]) {
    return priceMenu.sort((a, b) => {
        return a.menuNumber - b.menuNumber
    })
}


function Contact({ priceMenu }: Props) {
    const orderedPriceMenu = orderPriceMenu(priceMenu)
    const { register, handleSubmit, setError, formState: { errors }, reset } = useForm();

    function onSubmitForm(values) {
          emailjs.send("service_04vgzdt", "template_h9qrq6y", values, "6AcWruXZrDrVF70Yq").then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        reset();
    }

    return (
        <div className="relative">
            <Header />
            <div id="" className="flex flex-col relative top-0 items-center justify-center mt-4 md:mt-[70px] bg-linen m-auto py-[60px] px-[5%] w-full">
                <div className="flex-1 m-auto z-40">
                    <div className="flex flex-col items-center text-center justify-start max-w-[1200px]">
                        <div className="max-w-[100%] ml-0 m-auto mr-2">
                            <div className="flex-shrink w-[70px] m-auto md:mb-5 pb-2">
                                <Image className='max-w-100% z-40' src={flowerIcon} alt="header" width={400} height={429} />
                            </div>

                            <h1 className="md:mt-5 mb-[15px] flex-shrink font-syne font-extrabold text-3xl xsm:text-4xl  md:text-[53px] md:leading-[57px]">
                                Contact Us
                            </h1>

                            <p className="font-playfair flex-shrink md:mb-[10px] text-base xsm:text-xl md:text-[22px] leading-[25px] text-dim-gray">
                                Book an appointment
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute opacity-40 md:opacity-100 flex-shrink z-20 right-3 top-0 w-28 md:w-[200px] md:max-w-[100%]'>
                    <Image src={heroDots} alt="header" width={500} height={353} />
                </div>

                <div className='absolute flex-1 left-0 bottom-0 right-auto top-auto w-28 md:w-[190px] md:max-w-[100%]'>
                    <Image src={heroFlowers} alt="header" width={700} height={746} />
                </div>
            </div>
            <section className="relative z-30 py-[80px] px-[5%] top-auto bottom-auto left-auto right-auto">
                <div className="max-w-[1140px] m-auto">
                    <div className="grid grid-cols-2 justify-items-stretch place-content-stretch justify-evenly max-w-[520px] m-auto">
                        <div className="px-[12%] col-span-1 row-span-1 text-center">
                            <div className="w-[60px] max-w-[100%] mb-[15px] m-auto">
                                <Image className='max-w-100% z-40' src={emailIcon} alt="header" width={348} height={310} />
                            </div>
                            <p className="font-playfair font-normal text-[17px] text-dim-gray">
                                reservation@relax.com
                            </p>
                        </div>

                        <div className="px-[12%] col-span-1 row-span-1 text-center">
                            <div className="w-[60px] max-w-[100%] mb-[15px] m-auto">
                                <Image className='max-w-100% z-40' src={phoneIcon} alt="header" width={348} height={348} />
                            </div>
                            <p className="font-playfair font-normal text-[17px] text-dim-gray">
                                +1-808-652-1993
                            </p>
                        </div>
                    </div>

                    <div className="mt-[50px]">
                        <div className="max-w-[520px] m-auto">
                            <form onSubmit={handleSubmit(onSubmitForm)} id="contactForm" className="grid grid-cols-2 grid-rows-2 auto-cols-fr gap-5 items-stretch justify-items-stretch content-evenly justify-evenly">
                                <div>
                                    <input name="name" className={`font-syne w-full placeholder-dim-gray text-black pl-4 pr-[12px] py-2 mb-0 h-[55px] border rounded-sm border-light-gray focus:border-blue-500 outline-none ${errors.name ? 'ring-2 ring-red-500 border-none' : null}`}
                                        id="name" type="text"
                                        placeholder="Name" {...register('name', { required: true, })} />
                                    {errors.name && <p className="text-red-500 text-xs italic z-50">Name is required</p>}
                                </div>

                                <div>
                                    <input id="email" name="email" className={`font-syne w-full placeholder-dim-gray text-black pl-4 pr-[12px] py-2 mb-0 h-[55px] border rounded-sm border-light-gray focus:border-blue-500 outline-none ${errors.email ? 'ring-2 ring-red-500 border-none' : null}`} type="Email"
                                     {...register('email', { required: true })} placeholder="Email" />
                                    {errors.email && <p className="text-red-500 text-xs italic z-50">Email is required</p>}
                                </div>

                                <div>
                                    <input id="phone" name="number" className="font-syne w-full placeholder-dim-gray text-black pl-4 pr-[12px] py-2 mb-0 h-[55px] border rounded-sm border-light-gray focus:border-blue-500 outline-none" type="text" {...register('number', { required: true })} placeholder="Phone" />
                                </div>

                                <div>
                                    <select id="service" className="font-syne w-full placeholder-dim-gray text-dim-gray pl-4 pr-[12px] py-2 mb-0 h-[55px] border rounded-sm border-light-gray focus:border-blue-500 outline-none" {...register('service', { required: true })}>
                                        {orderedPriceMenu.reverse().map((item, index) => (
                                            <option key={index} value={item.title}>{item.title}</option>
                                        ))}
                                    </select>
                                    {errors.service && <p className="text-red-500 text-xs italic z-50">Service is required</p>}
                                </div>
                            </form>
                            <div className="mt-5">
                                <textarea name="message" className="font-syne h-full pt-[17px] pb-[74px] w-full placeholder-dim-gray text-black pl-4 pr-[12px] py-2 mb-0 border rounded-sm border-light-gray focus:border-blue-500 outline-none" {...register('message', { required: false })} placeholder="Additional Comments . . . " />
                            </div>

                            <div className="mt-5">
                                <button type="submit" formMethod="get" form="contactForm" className="font-syne bg-burlywood font-bold text-sm leading-5 w-full py-[12px] px-5 rounded-md focus:outline-none">
                                    Book an Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const getServerSideProps = async () => {
    const priceMenuQuery = `
    *[_type == "price-menu"] {
      _id,
      title,
      }`;
    const priceMenu = await sanityClient.fetch(priceMenuQuery);

    return {
        props: {
            priceMenu
        }
    }
}

export default Contact