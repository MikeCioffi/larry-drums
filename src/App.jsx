import React from 'react';
import Navbar from './components/navbar'; // Import the Navbar component you will create
import About from './components/about.jsx'
import './index.css'; // This is where TailwindCSS is imported

function App() {

  const backgroundImagePath = 'src/assets/homepage.jpg'
  return (
    <div className="App">
      {/* Fullscreen background image with flexbox centering */}
      <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImagePath})` }}>

        {/* Navbar component */}
        <Navbar />

        {/* Content section now centered with flexbox */}
        <div className="text-center md:text-left ">
          <h1 className="md:ml-56 -mt-20  text-black text-8xl tracking-wide font-semibold">LARRY CIOFFI</h1>
          <h3 className="md:ml-60 italic text-5xl tracking-wide ">drummer</h3>

        </div>
      </div>


      {/* Additional content can go here */}
      <About id='about' />

    </div>
  );
}

export default App;