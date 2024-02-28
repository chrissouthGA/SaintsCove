import { createClient } from "next-sanity";
import { Blog } from "../types/Blogs";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: 'bqz1l84d',
    dataset: 'production',
    apiVersion: '2024-02-21',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export async function getBlogs(): Promise<Blog[]> {
    const query = `*[_type == "blog"]{
        _id, 
        _createdAt,
        name,
        description,
        'slug': slug.current,
        mainImage,
        url, 
        content}`;
    const response = await client.fetch(query);
    return response;
}

export function urlFor(source: any) {
    if (source && source.asset && source.asset.url) {
        return builder.image(source).url();
    }
    return '';
}
