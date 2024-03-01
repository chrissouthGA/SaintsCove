import { getBlog } from "../../../../sanity/sanity-utils";
import blog from "../../../../sanity/schemas/blog-schema";

type Props ={
    params: { content: string}
}

export default async function Blog({params}: Props){
    const slug = params.content;

    const content = await getBlog(slug)

    return <div>{blog.name}</div>
}