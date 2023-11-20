import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import kit from '../assets/kit5.jpg';

const videoIds = [
    { band: 'Walter & Larry', id: 'ZdatbRFSqm0' },
    { band: 'Final Groove', id: '8I2cI5DqvC4' },
    { band: 'Chasing Phoenix', id: 'f3h1ZC3dzNM' },
    { band: 'Wasted Space', id: '3et3a7mJuEg' }

];

const VideoButton = ({ title, id, onClick, isActive }) => (
    <button
        className={`w-4/12 m-2 p-4 border-2 border-white border-opacity-5 bg-white text-white  rounded-md
         ${isActive ? 'bg-opacity-50 text-white' : ' hover:bg-opacity-20 bg-opacity-10 bg-white'}`}
        onClick={() => onClick(id)}
    // style={{ backgroundColor: 'rgba(255, 255, 255, 0.5  )' }}
    >
        {title}
    </button>
);

const VideoCarousel = ({ id }) => {
    const [currentVideo, setCurrentVideo] = useState('ZdatbRFSqm0');

    if (videoIds.length === 0) {
        console.error('No video IDs are provided for the carousel.');
        return <div>No videos to display</div>;
    }

    return (
        <div id={id} className='w-full min-h-[75vh] justify-center items-center p-5
         '
            style={{
                backgroundImage: `url(${kit})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div

                className='p-4 md:p-20 m-auto w-full md:w-3/4 xl:w-1/2 rounded-md justify-center items-center
                lg:transform lg:skew-y-3 lg:skew-x-1 '
                style={{
                    backgroundImage: `linear-gradient(to top right, rgb(152,0,209,0.2), rgb(33,84,78,0.2))`,
                    backdropFilter: 'blur(40px)', // Adjust the pixel value to increase or decrease the blur effect
                    WebkitBackdropFilter: 'blur(40px)' // This line is for better compatibility with Safari on iOS
                }}>
                <div className=' lg:transform lg:-skew-y-3 lg:-skew-x-1 '>
                    <h2 className="text-5xl md:text-7xl  w-full flex justify-center font-bold mb-4 border-b-8 border-slate-400 p-4"
                        style={{ color: 'rgba(255, 255, 255, 0.5  )' }}> Highlights:</h2>
                    <div className='flex w-full justify-around flex-wrap'>
                        {videoIds.map((video) => (
                            //    button container
                            <VideoButton
                                key={video.id}
                                title={video.band}
                                id={video.id}
                                onClick={setCurrentVideo}
                                isActive={currentVideo === video.id} // Check if the button is for the current video

                            />
                        ))}
                    </div>
                    <ReactPlayer
                        playing={true}
                        width={'80%%'}

                        controls={true}
                        url={`https://www.youtube.com/watch?v=${currentVideo}`} />
                </div>
            </div>
        </div>


    );
};

export default VideoCarousel;
