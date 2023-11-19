import React from 'react';
import Navbar from './components/navbar'; // Import the Navbar component you will create
import About from './components/about.jsx'
import './index.css'; // This is where TailwindCSS is imported
import VideoCarousel from './components/videocarousel'; // Import the VideoCarousel component
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>      {/* homepage  */}

        <div className="hidden md:flex md:flex-row justify-center items-start h-screen bg-cover bg-center background-desktop">
          <div className='w-4/6 lg:w-1/2 h-full'> </div>

          <div className="w-1/4 lg:w-2/3 h-full text-left">
            <div className='h-1/4  w-full'></div>
            <h1 className="inline-block text-5xl md:text-7xl lg:text-9xl tracking-wide font-black	"
              style={{
                color: 'rgba(255, 255, 255, 0.4)',
                borderBottom: '24px solid rgba(255, 255, 255, 0.4)'
              }}>
              LARRY <br /> CIOFFI
            </h1>
            <p className="italic text-5xl tracking-wide"
              style={{ color: 'rgba(255, 255, 255, 0.2)' }}>drummer</p>
          </div>
        </div>

        {/* Mobile Background */}
        <div className="lg:hidden flex flex-row justify-center items-center h-screen bg-cover bg-center background-mobile">
          {/* Assuming the Navbar component is absolutely positioned or otherwise taken out of the normal document flow */}
          <Navbar />
          <div className="h-1/6"></div>
          {/* Text container */}
          <div className=" flex flex-col  items-end justify-start w-full h-2/3 text-center p-5">
            <h1 style={{
              color: 'rgba(255, 255, 255, 0.4)',
              borderBottom: '12px solid rgba(255, 255, 255, 0.4)'
            }}
              className=" border-slate-200 border-b-2 border-double text-5xl tracking-widest font-bold">LARRY <br /> CIOFFI</h1>
            <p
              style={{ color: 'rgba(255, 255, 255, 0.2)' }}
              className="italic text-slate-400 text-3xl tracking-wide">drummer</p>
          </div>
        </div>

      </div>
      <About id='about' />
      <VideoCarousel id='media' />
      <Contact id='contact' />

    </div >
  );
}

export default App;