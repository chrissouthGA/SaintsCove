'use client'

import { useState, useEffect } from 'react';
import Navbar from '../../../components/NavBar'
import { getBlogs } from '../../../sanity/sanity-utils'
import { Blog } from '../../../types/Blogs';
import Image from 'next/image';


const ConnectPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchData();
  }, [])


  return (
    <div>
      <Navbar />
      <h1>Connect With Us</h1>
      <p>Take the time to read our blog</p>
      <div className='max-w-5xl mx-auto py-20'>
        <h2 className='mt-24 font-bold text-black text-3xl'>Blogs</h2>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogs.map((blog) => (
          <div key={blog._id} className='border border-gray-500 rounded-lg p-3'>
            {blog.image && (
              <Image 
              src={blog.image}
              alt={blog.name}
              width={250}
              height={100}
              className='object-cover rounded-lg border border-gray-500' />
            )}
            <div className='font-extrabold'>{blog.name}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )

}

export default ConnectPage



