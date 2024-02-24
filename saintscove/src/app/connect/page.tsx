'use client'

import { createClient } from "next-sanity";
import { useState, useEffect } from 'react';
import Navbar from '../../../components/NavBar'
import { getBlogs } from '../../../sanity/sanity-utils'
import { Blog } from '../../../types/Blogs';


const ConnectPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() =>{
    const fetchData = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchData();
  },[])


  return (
    <div>
      Connect With Us 
      <Navbar />
      <div>
        {blogs.map((blog)=>(
          <div key={blog._id}>{blog.name}</div>
        ))}
      </div>
    </div>
  )
    
}

export default ConnectPage



