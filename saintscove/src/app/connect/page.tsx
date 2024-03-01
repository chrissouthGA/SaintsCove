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
    <div className='bg-connectbg bg-cover bg-fixed w-full h-full flex items-center justify-center'>
      <Navbar />
      <h1 className='text 4xl font-bold text-black mt-10'>Connect With Us</h1>
      <p className='text-lg text-gray-500 mt-2'>Take the time to read our blog</p>
      <div className='bg-slate-500 py-20 px-10 flex flex-row gap-10 mt-10'>
        <h2 className='mt-24 font-bold text-black text-3xl'>Blogs</h2>
        <div className='mt-5 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8'>
        {blogs.map((blog) => (
          <Link href={`/connect/${blog?._id}`} key={blog?._id}>
          <div className='flex flex-col md:flex-row gap-5 bg-stone-500 rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-300'>
            <div className='w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative'>
            {blog.image && (
              <Image 
              src={urlFor(blog.image)}
              alt={blog.name}
              style={{maxWidth:300}}
              width={300}
              height={300}
              className='w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md' 
              />
            )}
            <div className='absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200'/>
            <div className='absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200'>
              <p className='text-lg font-semibold'>Read Me</p>
            </div>
            </div>
            <div className='w-8 md:w-1/3 flex flex-col justify-between py-6 px-2'>
              <div className='flex items-center gap-2'>
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



