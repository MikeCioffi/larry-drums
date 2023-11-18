import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kit from '../assets/kit5.jpg'


const videoIds = [
    '3et3a7mJuEg', // Add your video IDs here
    'f3h1ZC3dzNM',
    'O1Eus03fDis',
    'zEO4k6rO5tk'
    // ...more video IDs
];
const VideoCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (videoIds.length === 0) {
        console.error('No video IDs are provided for the carousel.');
        return <div>No videos to display</div>;
    }

    return (<div className='w-full  p-5' style={{
        backgroundImage: `url(${kit})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
        <div className="w-full  p-8   bg-white bg-opacity-50	 rounded-lg md:w-3/5 mx-auto"> {/* 60% width on desktop, 100% on mobile */}
            <Slider {...settings}>
                {videoIds.map((id) => (
                    <div key={id} className="w-full h-auto">
                        <iframe
                            className="w-full"
                            style={{ height: '56.25vw', maxHeight: '80vh' }} // 16:9 aspect ratio, max height to avoid oversized player on larger screens
                            src={`https://www.youtube.com/embed/${id}`}
                            frameBorder="0"
                            allowFullScreen
                            title={`video-${id}`}
                        ></iframe>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    );
};

export default VideoCarousel;