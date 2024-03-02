import Video from 'next-video'
import Navbar from '../../../components/NavBar'
import Dance from '/videos/Dance.mp4'
import Game from '/videos/Game.mp4'



const MediaPage = () => {
    return (
        <div className='bg-mediabg bg-cover bg-fixed w-screen h-screen flex flex-col items-center'>
            <Navbar />
            <div className='mt-96 mb-20 w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative'>
                <div className='flex flex-row justify-evenly w-full'>
                    <Video src={Dance}
                        style={{maxWidth:500}}
                        width={500}
                        height={500}
                    />
                    <Video src={Game}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>

    )
}

export default MediaPage