import {createClient} from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cqnby4bn',
    apiVersion: "2022-07-26",
    


    useCdn: process.env.NODE_ENV === "production",
};

console.log(config)

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(sanityClient).image(source);