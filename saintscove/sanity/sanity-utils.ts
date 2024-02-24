import { createClient, groq } from "next-sanity";
import { Blog } from "../types/Blogs";


export async function getBlogs():Promise<Blog[]> {
    const client = createClient({
        projectId: 'bqz1l84d',
        dataset: 'production',
        apiVersion: '2024-02-21',
    });

    return client.fetch(
        groq `*[_type = 'blog']{
            _id, 
            _createAt,
            name,
            'slug': slug.current,
            'image': image.asset -> url, 
            url, 
            content
        }`
    )
}
