import React from 'react';
import Navbar from './components/navbar'; // Import the Navbar component you will create
import About from './components/about.jsx'
import './index.css'; // This is where TailwindCSS is imported


function App() {
  return (
    <div className="App">
      {/* Desktop Background */}
      <div className="hidden md:flex justify-center items-center h-screen bg-cover bg-center background-desktop">
        <Navbar />
        <div className="text-center md:text-left">
          <h1 className="md:ml-56 text-slate-50   border-white md:border-b-2 border-double text-8xl tracking-widest font-bold">LARRY CIOFFI</h1>
          <h3 className="md:ml-60 text-slate-600   italic text-5xl tracking-wide">drummer</h3>
        </div>
      </div>

      {/* Mobile Background */}
      <div className="md:hidden flex flex-row justify-center items-center h-screen bg-cover bg-center background-mobile">
        {/* Assuming the Navbar component is absolutely positioned or otherwise taken out of the normal document flow */}
        <Navbar />
        <div className="h-1/6"></div>
        {/* Text container */}
        <div className=" flex flex-col  items-end justify-start w-full h-2/3 text-center p-5">
          <h1 className="text-slate-50  border-slate-200 border-b-2 border-double text-5xl tracking-widest font-bold">LARRY <br /> CIOFFI</h1>
          <h3 className="italic text-slate-600 text-3xl tracking-wide">drummer</h3>
        </div>
      </div>


      <About id='about' />
    </div>
  );
}

export default App;