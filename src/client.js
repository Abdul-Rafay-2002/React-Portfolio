import { createClient } from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'g1ssbo0g',
    dataset: 'production',
    apiVersion: '2023-03-16',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source); 