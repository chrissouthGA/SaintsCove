import Video from 'next-video'
import Navbar from '../../../components/NavBar'
import Dance from '/videos/Dance.mp4'
import Game from '/videos/Game.mp4'
import Games from '/videos/Games.mp4'


const MediaPage = () => {
    return (
        <div className='bg-mediabg bg-cover bg-fixed w-screen h-screen flex flex-col items-center justify-center'>
            <Navbar />
            <div className='flex flex-col items-center mt-10'>
                <p className='text-4xl'>Step Into The Saint's Media Cove</p>
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
        </div>
    )
}

export default MediaPage









