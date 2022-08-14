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
            <div id="postHero" className="flex mt-[70px] m-auto w-full py-16 align-middle text-center justify-center pt-12 xsm:pt-[70px] bg-slate-400">
                <div className="flex justify-center items-center py-32">
                <style>
                    {`#postHero{background-image: url(${backgroundImage});}`}
                </style>
                </div>
            </div>

            <article className="max-w-[1200px] m-auto pt-20">
                    <PortableText
                    className="max-w-[60%] m-auto font-playfair font-medium text-[16px] leading-[21px] text-dim-gray"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={post.body}
                    serializers={
                        {

                            h1: (props: any) => (
                                <h1 className="text-[32px] mb-2 text-black font-syne font-bold leading-normal " {...props} />
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
