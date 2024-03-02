import Image from "next/image";
import { getBlog, urlFor } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Navbar from "../../../../components/NavBar";
import Link from "next/link";

type Props = {
    params: { content: string }
}

export default async function Blog({ params }: Props) {
    const slug = params.content;

    const content = await getBlog(slug)

    return (
        <div className="bg-connectbg bg-cover bg-fixed w-full h-full flex flex-col items-center">
            <Navbar />
            <div className="md:px-10">
                <div className="mt-5 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8">
                    <div className="flex flex-col md:flex-row gap-10 bg-[#ebe5d8] rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-300">
                        <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
                            {content.image && (
                                <Image
                                    src={urlFor(content.image)}
                                    alt={content.name}
                                    style={{ maxWidth: 250 }}
                                    width={200}
                                    height={200}
                                    className="w-full max-h-[350px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
                                />
                            )}
                        </div>
                        <div className="w-8 md:w-2/5 flex flex-col md:flex-row justify-between py-4 px-1">
                            <div className="flex items-start gap-2">
                                <h2 className="text-2xl font-semibold hover:text-orange-300 duration-200 cursor-pointer">{content?.name}</h2>
                                <p className="text-black/100">{content?.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}