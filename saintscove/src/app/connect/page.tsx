'use client'

import { useState, useEffect } from 'react';
import Navbar from '../../../components/NavBar';
import { getBlogs, urlFor } from '../../../sanity/sanity-utils';
import { Blog } from '../../../types/Blogs';
import Image from 'next/image';
import Link from 'next/link';


interface Props {
  blogs: Blog[];
}

const ConnectPage = ({ }: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchData();
  }, [])

  return (
    <div className='bg-connectbg bg-cover bg-fixed w-full h-full flex items-center justify-center'>
      <Navbar />
      <div className='max-w-6xl mx-auto px-5'>
      <div className='mt-5 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8'>
      <h1 className='text-4xl font-bold text-black mt-10 mb-2'>Connect With Us</h1>
      <p className='text-lg text-gray-500 mb-10'>Take the time to read our blog</p>
      <h2 className='font-bold text-black text-3xl mb-5'>Blogs</h2>
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog?._id}>
            <div className='flex flex-col md:flex-row gap-10 bg-[#ebe5d8] rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-300'>
              <div className='w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative'>
                {blog.image && (
                  <Image
                    src={urlFor(blog.image)}
                    alt={blog.name}
                    style={{ maxWidth: 250 }}
                    width={200}
                    height={200}
                    className='w-full max-h-[350px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md'
                  />
                )}
                <div className='absolute top-0 left-0 bg-black/20 w-80 h-full group-hover:hidden duration-200' />
                <div className='absolute hidden group-hover:inline-flex bottom-0 left-0 w-45 bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200'>
                  <p className='text-lg font-semibold'>Read Me</p>
                </div>
              </div>
              <div className='w-8 md:w-2/5 flex flex-col md:flex-row justify-between py-4 px-1'>
                <div className='flex items-start gap-2'>
                  <h2 className='text-2xl font-semibold hover:text-orange-300 duration-200 cursor-pointer'>{blog?.name}</h2>
                  <p className='text-black/100'>{blog?.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )

}

export default ConnectPage



