'use client'

import React, { useEffect, useState } from 'react'
import { images } from '../utils/constants'
import Image from 'next/image'
import Description from './Description'


const Slider = () => {
    const [activeImage, setActiveImage] = useState(0)

    const clickNext = () => {
        activeImage === images.length - 1 
        ? setActiveImage(0)
        : setActiveImage(activeImage + 1)
    }; 

    const clickPrev = () => {
        activeImage === 0 
        ? setActiveImage(images.length - 1)
        : setActiveImage(activeImage - 1)
    };

    useEffect(() => {
        const timer = setTimeout (() => {
            clickNext()
        }, 20000);
        return () => {
            clearTimeout(timer)
        }
    }, [activeImage])

  return (
    <div className='grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#866b5b]'>
        <div className='w-full flex justify-center items-center gap-2 transition-transform ease-in-out duration-500 rounded-2xl'>
            {images.map((pic,idx) =>(
                <div className={`${idx === activeImage ? 'block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out': 'hidden'}`} key={idx}>
                    <Image 
                    src={pic.src}
                    alt=""
                    style={{maxWidth:500}}
                    width={500}
                    height={500}
                    className="w-screen h-full object-cover rounded-t-3xl rounded-b-3xl" 
                    />
                </div>
            ))}
            <Description 
                activeImgIndex={activeImage}
                clickNext={clickNext}
                clickPrev={clickPrev}
            />
        </div>
    </div>
//     <div className='grid place-items-center w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#866b5b]'>
//     <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full'>
//         {images.map((pic, idx) => (
//             <div className={`${idx === activeImage ? 'block w-full h-[80vh] md:h-full object-cover transition-all duration-500 ease-in-out' : 'hidden'}`} key={idx}>
//                 <Image
//                     src={pic.src}
//                     alt=""
//                     layout="fill"
//                     objectFit="center"
//                     className="rounded-t-2xl rounded-b-2xl"
//                 />
//             </div>
//         ))}
//         <div className='flex flex-col justify-center items-center p-6 md:p-12 gap-4 bg-white rounded-2xl md:rounded-tr-none md:rounded-br-2xl'>
//             <Description
//                 activeImgIndex={activeImage}
//                 clickNext={clickNext}
//                 clickPrev={clickPrev}
//             />
//         </div>
//     </div>
// </div>

  )
}

export default Slider
