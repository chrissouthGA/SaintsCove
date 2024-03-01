import { PortableTextBlock } from "sanity"

export type Blog = {
    _id: string,
    _createdAt: Date,
    name: string,
    slug: string,
    image: {
        asset: {
            _ref: string
        }
    },
    url: string,
    description: string,
    content: PortableTextBlock[]
}