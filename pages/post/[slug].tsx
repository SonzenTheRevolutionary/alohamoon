import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post, Price_Menu } from "../../typings";
import PortableText from "react-portable-text"
import PriceMenu from "../../components/PriceMenu";
import { orderPriceMenu } from "..";

interface Props {
    post: Post;
    priceMenu: [Price_Menu];
}

function Post({ post, priceMenu }: Props) {
    let backgroundImage = urlFor(post.backgroundImage).url()!

    const orderedPriceMenu = orderPriceMenu(priceMenu)
    return (
        <div className="flex flex-col">
            <Header />
            <div id="postHero" className="flex relative flex-col xsm:mt-[70px] m-auto w-full py[60px] px-4 align-start justify-center items-start xsm:items-center pt-32 md:pt-[100px] bg-linen">

                <div className="max-w-[90%]">
                    <style>
                        {`#postHero::before{
                        background-image: url(${backgroundImage});
                        }`
                        }
                    </style>
                    <h1 className="font-syne relative pb-2 text-white font-extrabold text-[32px] xsm:text-[53px] leading-[57px]">{post.title}</h1>
                    <div className="flex flex-col xsm:flex-row mt-2 xsm:mt-10 mb-[100px]">
                        <button className="relative bg-burlywood text-black mb-2 md:mb-0 py-3 px-6 xsm:px-7 rounded-md text-sm font-syne font-bold">Make Reservation</button>
                        <button className='relative bg-white text-burlywood mr-6 xsm:ml-4 mb-2 md:mb-0 py-3 px-6 xsm:px-7 rounded-md text-sm font-syne font-bold'>Our Treatments</button>
                    </div>
                </div>
            </div>

            <article className="max-w-[1200px] m-auto pt-10 xsm:pt-20">
                <div className="max-w-[90%] md:max-w-[60%] m-auto">
                    <PortableText
                        className=" font-playfair font-medium text-[17px] leading-[23px] text-dim-gray"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        serializers={
                            {
                                h1: (props: any) => (
                                    <h1 className="text-[32px] leading-9 mt-5 mb-2 text-black font-syne font-bold md:leading-normal " {...props} />
                                ),
                                h2: (props: any) => (
                                    <h2 className="text-3xl font-syne font-bold leading-normal" {...props} />
                                ),
                                h3: (props: any) => (
                                    <h3 className="text-2xl font-syne font-bold leading-normal" {...props} />
                                ),
                                h4: (props: any) => (
                                    <h4 className="text-lg text-black font-syne font-bold leading-normal my-2" {...props} />
                                ),
                                li: ({ children }: any) => (
                                    <li className="ml-[40px] text-base font-syne font-medium list-disc" >{children}</li>
                                ),
                            }
                        }

                    />
                </div>
                {/* PRICING GRID */}
                <div className='grid max-w-[90%] md:max-w-full m-auto mt-4 md:mt-[100px] mb-14 md:w-full md:grid-rows-4 md:grid-cols-2 gap-y-8 md:gap-x-[70px] items-stretch justify-items-stretch content-evenly content-justify-evenly pt-14 md:pt-28'>
                        {orderedPriceMenu.map((price) => {
                            return (
                                <PriceMenu price={price} />
                            )
                        }
                        )}
                    </div>
            </article>

        </div>
    )
}

export default Post

export const getStaticPaths = async () => {
    const query = `
    *[_type == "service-post"] {
      _id,
      slug{
        current
      }
     }`;
    const posts = await sanityClient.fetch(query);



    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug ? post.slug.current : "home"
        }
    }));
    return {
        paths,
        fallback: 'blocking',
    }
};

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "service-post" && !(_id in path('drafts.**')) && slug.current == $slug][0]{
        _id,
        title,
        description,
        mainImage,
        body,
        backgroundImage,
        slug,
    }`;
    const priceMenuQuery = `
    *[_type == "price-menu"] {
        title,
        description,
        price,
        menuNumber,
        Image
        }`;
    const priceMenu = await sanityClient.fetch(priceMenuQuery);

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
            priceMenu
        },
        revalidate: 86400
    }
}
