import React from 'react';
import { images } from '../utils/constants';
import left from '../public/left.svg';
import right from '../public/right.svg'
import Image from 'next/image';

type Props = {
    clickNext: any,
    clickPrev: any,
    activeImgIndex: any
}

const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
    return (
        <div className='grid place-items-start w-full h-full bg-[#bf977c] relative rounded-tr-3xl rounded-br-3xl'>
            <div className='uppercase text-sm absolute right-4 top-2 underline-offset-4 underline'>
                Meet The Team
                {images.map((elem, idx) => (
                    <div className={idx === activeImgIndex ? 'block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out' : 'hidden'} key={idx}>
                        <div className='py-16 text-5xl font-extrabold'>
                            {elem.title}
                        </div>
                        <div className='leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600'>
                            {" "}{elem.desc}
                        </div>
                        <div className='absolute bottom-1 w-full flex justify-center items-center'>
                            <div className='flex'>
                                <div onClick={clickPrev} className='absolute bottom-2 left-1 cursor-pointer'>
                                    <Image src={left} alt="" width={30} height={100} />
                                </div>
                                <div onClick={clickNext} className='absolute bottom-2 right-2 cursor-pointer'>
                                    <Image src={right} alt="" width={50} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Description