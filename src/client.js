import { createClient } from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'g1ssbo0g',
    dataset: 'production',
    apiVersion: '2023-03-16',
    useCdn: true,
    token: 'skhpGASuK5zAzGqmCGv9TnfTMYd3Gv8BnFXCVEehDR0jPcA8bYS8yhnSCzHpJCqzV6C2xXkJ2IoiE98nqpGceFFTCXLfAyLkDiL8LOStvdDcTkgm3fj36NkJiMMRwjEvVc8mZlyWs1YuJ5mf5A6jkcfLONSkCv71Ra8EDb7AcNEd5qEoNI3M',
    // token: process.env.SANITY_PROJECT_KEY,
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source); 