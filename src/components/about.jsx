import React from 'react';
import kit from '../assets/kit.jpg'


import { FaDrum, FaMusic } from 'react-icons/fa'; // Example icon


const About = ({ id }) => {

  const TimelineItem = ({ date, description, subtitle, icon }) => (
    <li className='list-none border-b-2 border-dashed border-gray-100  w-auto '>
      <div className='flex w-full'>
        <div className='w-1/3 flex flex-col justify-center items-center p-2'>
          {icon}
          <span className="text-md font-bold text-gray-400">{date}</span>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start ">
          <h2 className="text-black font-bold text-xl">{description}</h2>

          <p className="text-gray-400 text-md italic">{subtitle}</p>
        </div>
      </div>
    </li>
  );
  const chicagoData = [
    { date: "2001 - 2003", description: "Dollhouse", subtitle: "Female Rock" },
    { date: "2003 - 2005", description: "Livin Large", subtitle: "Classic to Modern Rock" },
    { date: "2005 - 2009", description: "Kimberly Kane and Big Trouble ", subtitle: "Aretha to Led Zep" },
    { date: "2009 - 2011", description: "Scarlet Fever", subtitle: "Female classic to modern rock" },
    { date: "2013 - 2017", description: "Final Groove", subtitle: "Motown, disco, classic rock, current hits" },
  ];

  const charlotteData = [
    { date: "2020 - 2021", description: "Chasing Phoenix Band", subtitle: "Female-fronted variety band" },
    { date: "2021 - 2022", description: "3 Savile Row", subtitle: "Best of the 60s and 70s British rock." },
    { date: "2017 - Present", description: "Walter Finley", subtitle: "Accompony on the cajon kit." },
    { date: "2021 - Present", description: "Wagon Load a Trouble", subtitle: "Classic country, western swing, rockabilly, current country." }]
  return (<div id={id} className="about-container min-h-screen flex flex-wrap md:flex-nowrap overflow-hidden">

    {/* Left column for images - hidden on mobile */}
    <div className="md:flex-1 bg-cover bg-center h-auto md:h-128" style={{ backgroundImage: `url(${kit})` }}>
    </div>
    <div className="about-text md:w-1/2 p-4 flex flex-col justify-center">
      <h2 className="text-5xl font-bold mb-3">About Larry</h2>
      <p className="mb-2">An experienced and versatile drummer based in Charlotte NC, Larry has performed at clubs and festivals!</p>
      <h3 className="text-2xl font-bold mt-3">Chicagoland Area</h3>
      <h4 className="text-lg italic text-gray-500">2001 - 2017</h4>
      <div className="border-l-2 p-2 border-gray-200">
        {chicagoData.map((item, index) => (
          <TimelineItem
            key={item.date}
            date={item.date}
            icon={index % 2 === 0 ? <FaDrum /> : <FaMusic />} // Alternate icons based on index
            description={item.description}
            subtitle={item.subtitle}
            backgroundColor={index % 2 === 0 ? "rgb(243, 244, 246)" : "rgb(0,0,0)"}
          />
        ))}


      </div>


      <h3 className="text-2xl font-bold mt-3">Charlotte Area</h3>
      <h3 className="text-lg italic text-gray-500">2020 - Present</h3>
      <div className="border-l-2 p-2 border-gray-200">
        {charlotteData.map((item, index) => (
          <TimelineItem
            key={item.date}
            date={item.date}
            icon={index % 2 === 0 ? <FaDrum /> : <FaMusic />} // Alternate icons based on index
            description={item.description}
            subtitle={item.subtitle}
          />
        ))}


      </div>
    </div>
  </div>


  )

}

export default About;
