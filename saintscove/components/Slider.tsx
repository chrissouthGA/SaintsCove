import React from 'react'
import { images } from '../utils/constants'
import Image from 'next/image'


const Slider = () => {
  return (
    <div className='grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
        <div className='w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl'>
            {images.map((pic,idx) =>(
                <div key={idx}>
                    <Image 
                    src={pic.src}
                    alt=""
                    width={350}
                    height={350}
                    className="w-full h-full object-cover rounded-t-3xl rounded-b-3xl" 
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider
