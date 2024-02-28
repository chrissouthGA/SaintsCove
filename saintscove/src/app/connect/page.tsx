'use client'

import { useState, useEffect} from 'react';
import Navbar from '../../../components/NavBar';
import { getBlogs, urlFor } from '../../../sanity/sanity-utils';
import { Blog } from '../../../types/Blogs';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  blogs: Blog[];
}

const ConnectPage = ({}:Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchData();
  }, [])

  return (
    <div className='bg-connectbg bg-cover bg-fixed w-screen h-screen flex items-center justify-center'>
      <Navbar />
      <h1>Connect With Us</h1>
      <p>Take the time to read our blog</p>
      <div className='bg-gray-100 py-20 px-10 flex flex-col gap-10'>
        <h2 className='mt-24 font-bold text-black text-3xl'>Blogs</h2>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogs.map((blog) => (
          <Link href={'/'} key={blog?._id}>
          <div className='flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-300'>
            <div className='w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative'>
            {blog.mainImage && (
              <Image 
              src={urlFor(blog.mainImage).url()}
              alt={blog.name}
              width={500}
              height={500}
              className='w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md' 
              />
            )}
            <div className='absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200'/>
            <div className='absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200'>
              <p className='text-lg font-semibold'>Read Me</p>
            </div>
            </div>
            <div className='w-full md:w-2/5 flex flex-col justify-between py-10 px-4'>
              <div className='flex items-center gap-3'>
              </div>
            </div>
          </div>
          <div className='font-extrabold'>{blog.name}</div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )

}

export default ConnectPage



