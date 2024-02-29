import React from 'react'
import { images } from '../utils/constants'

const Description = () => {
  return (
    <div className='grid place-items-start w-full bg-[#916d51] relative rounded-tr-3xl rounded-br-3xl'>
        <div className='uppercase text-sm absolute right-4 top-2 underline-offset-4 underline'>
            Meet The Team
            {images.map((elem, idx) => (
                <div className='block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out' key={idx}>
                    <div className='py-16 text-5xl font-extrabold'>{elem.title}</div>
                    <div className='leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600'>{" "}{elem.desc}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Description