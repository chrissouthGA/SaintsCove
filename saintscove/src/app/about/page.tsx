import Navbar from '../../../components/NavBar'


const AboutPage = () => {
    return (
        <div className='bg-aboutbg bg-center bg-fixed w-screen h-screen overflow-hidden flex flex-col items-center'>
            <Navbar />
            <div className='mt-60 px-5 overflow-y-auto'>

                <h1 className='text-5xl text-center font-bold text-black subpixel-antialiased items-center uppercase'>About Us</h1>

                <div className='mt-5'>
                    <div className='mb-5'>
                        <p className='font-bold text-lg'>About Us:</p>
                        Welcome to C.O.P Queens PIWC, a Bible-believing, Christ-centered, Holy Spirit-filled family, unleashed to transform the world through Christ. Join us online and in person every Sunday at 10 am to 12:30 pm at 99-14 43rd Avenue, Queens, New York, 11368. See you in church!
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Our Mission:</p>
                        Our goal is to reach a new audience and transform lives through social media. We are one family, dedicated to transforming lives through Jesus Christ, our savior.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>What We Do:</p>
                        <ul className='list-disc'>
                            <li>We introduce ourselves and invite you to get to know us on-site.</li>
                            <li>We focus on genuine impact, not for show.</li>
                            <li>We stay current with trends to maximize exposure and impact.</li>
                            <li>We create meaningful content to engage our target audience.</li>
                            <li>We extend a warm invitation to join us for church services.</li>
                            <li>We feature our choir's involvement in our events.</li>
                            <li>We share messages and snippets of preaching to inspire and uplift.</li>
                            <li>We offer program ads to support our mission.</li>
                            <li>We share prayers of the month to encourage spiritual growth.</li>
                            <li> We provide a "Secret Place Playlist" for quiet times with God.</li>
                        </ul>
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Invitation to Church:</p>
                        Join us this Sunday and experience the transformative power of Christ in our community.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Ads:</p>
                        Our ads are designed to reach hearts and minds, not just eyes and ears.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Choir Involvement:</p>
                        Our choir plays a vital role in our ministry, uplifting spirits and spreading joy.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Messages:</p>
                        Our messages are crafted to inspire, encourage, and challenge you on your spiritual journey.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Snippets of the Preaching:</p>
                        Experience the power of God's word in bite-sized portions, perfect for sharing and reflection.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Prayers of the Month:</p>
                        Join us in prayer as we seek God's guidance and blessing for our community.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Secret Place Playlist:</p>
                        Find peace and solace in our curated playlist for quiet times with God.
                    </div>

                    <div className='mb-5'>
                        <p className='font-bold text-lg'>Announcements:</p>
                        Stay updated on upcoming events, programs, and opportunities to get involved.
                    </div>

                    <div className='mb-5'>
                        Join us at C.O.P Queens PIWC and be a part of our family's mission to transform lives through Jesus Christ.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutPage
