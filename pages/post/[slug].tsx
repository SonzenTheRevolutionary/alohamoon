import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import PortableText from "react-portable-text"

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    let backgroundImage = urlFor(post.backgroundImage).url()!

    return (
        <div className="flex flex-col">
            <Header />
            <div id="postHero" className="flex relative flex-col xsm:mt-[70px] m-auto w-full py[60px] align-start tex justify-center items-start xsm:items-center pt-16 xsm:pt-[100px] bg-linen">

                <div className="flex ml-2 xsm:ml-0 relative flex-col justify-start items-start xsm:justify-center md:items-center py-20">
                    <style>
                        {`#postHero::before{
                        background-image: url(${backgroundImage});
                        }`
                        }
                    </style>
                    <h1 className="font-syne stroke-black stroke-2 relative pb-4 text-burlywood font-extrabold text-[32px] xsm:text-[53px] leading-[57px]">{post.title}</h1>
                    <div className="flex flex-col xsm:flex-row mt-2 xsm:mt-10 mb-20">
                        <button className="relative bg-white text-burlywood mb-2 md:mb-0 py-3 px-6 xsm:px-7 rounded-md text-sm font-syne font-bold">Make Reservation</button>
                        <button className='relative bg-burlywood text-black mr-4 xsm:mr-0 xsm:ml-5 mb-4 md:mb-0 py-3 px-8 xsm:px-7 rounded-md text-sm font-syne font-bold'>Our Treatments</button>
                    </div>
                </div>
            </div>

            <article className="max-w-[1200px] m-auto pt-5 xsm:pt-20">
                <div className="pb-20">
                    <PortableText
                        className=" max-w-[90%] xsm:max-w-[60%] m-auto font-playfair mb-[10px] font-medium text-[17px] leading-[23px] text-dim-gray"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        serializers={
                            {
                                h1: (props: any) => (
                                    <h1 className="text-[32px] mt-5 mb-2 text-black font-syne font-bold leading-normal " {...props} />
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
                                    <li className="ml-[40px] font-syne font-medium list-disc" >{children}</li>
                                ),
                            }
                        }

                    />
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
        fallback: 'blocking'
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
    }`

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
            post
        },
        revalidate: 86400
    }
}
