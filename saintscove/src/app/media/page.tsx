import Video from 'next-video'
import Navbar from '../../../components/NavBar'
import Dance from '/videos/Dance.mp4'
import Game from '/videos/Game.mp4'
import Games from '/videos/Games.mp4'
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'



const MediaPage = () => {
    return (
        <div className='bg-mediabg bg-cover bg-fixed w-screen h-screen flex flex-col items-center justify-center'>
            <Navbar />
            <div className='flex flex-col items-center mt-10'>
                <p className='text-5xl text-center font-bold text-black subpixel-antialiased items-center uppercase'>Step Into The Saint's Media Cove</p>
            </div>
            <div className='mt-10 flex flex-row justify-center'>
                <div className='mr-6'>
                    <Video src={Dance} width={500} height={500} />
                </div>
                <div className='mr-6'>
                    <Video src={Game} width={500} height={500} />
                </div>
                <div>
                    <Video src={Games} width={500} height={500} />
                </div>
            </div>
            <p className='text-lg mt-6 animate-bounce'>For More Videos Follow Us Here</p>
            <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-black text-4xl lg:text-5xl'>
                <Link className='text-black/90 hover:text-stone-500' href={'https://www.youtube.com/@piwcqueens'}>
                    <FaYoutube />
                </Link>
                <Link className='text-black/90 hover:text-stone-500' href={'https://instagram.com/cop.queenspiwc'}>
                    <FaInstagram />
                </Link>
                <Link className='text-black/90 hover:text-stone-500' href={'https://www.tiktok.com/@piwcqueens'}>
                    <FaTiktok />
                </Link>
                <Link className='text-black/90 hover:text-stone-500' href={'https://facebook.com/profile.php?id=61550518343386'}>
                    <FaFacebook />
                </Link>
            </div>
        </div>
    )
}

export default MediaPage









