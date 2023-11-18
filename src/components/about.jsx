import React from 'react';
import kit from '../assets/kit3.jpg'


import { FaDrum, FaMusic } from 'react-icons/fa'; // Example icon


const About = ({ id }) => {

  const TimelineItem = ({ date, description, subtitle, icon }) => (
    <li className='list-none border-b-2 border-dashed border-slate-400  w-auto '>
      <div className='flex w-full'>
        <div className='w-1/3 flex flex-col justify-center items-center text-slate-600 p-2'>
          {icon}
          <span className="text-md  text-slate-600">{date}</span>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start ">
          <h3 className="text-slate-800  text-xl">{description}</h3>

          <p className="text-slate-600 text-md italic">{subtitle}</p>
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
    {/* <div className="md:flex-1 bg-cover bg-center h-auto md:h-128" style={{ backgroundImage: `url(${kit})` }}>
    </div> */}
    <div
      className="about-text md:w-full p-4 flex flex-col justify-start"
      style={{
        backgroundImage: `url(${kit})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className=' w-full lg:w-1/2 p-5 flex flex-col justify-center items-center rounded-xl bg-white bg-opacity-90 md:bg-opacity-90	 '> {/* Semi-transparent white background */}
        <h2 className="text-5xl text-slate-800 font-bold mb-3">About Larry</h2> {/* Adjusted text color for readability */}
        <p className="mb-2 text-slate-700">An experienced and versatile drummer based in Charlotte NC, Larry has performed at clubs and festivals!</p>
        <div className='w-full border-l-4 border-slate-900'>
          <p className="text-3xl p-2 tracking-wider text-slate-800 border-b-2 border-dashed border-slate-800 w-full text-center">Chicago</p>

          <div className=" p-2 w-fullrelative">
            {chicagoData.map((item, index) => (
              <TimelineItem
                key={item.date}
                date={item.date}
                icon={index % 2 === 0 ? <FaDrum /> : <FaMusic />} // Alternate icons based on index
                description={item.description}
                subtitle={item.subtitle}
                backgroundColor={index % 2 === 0 ? "bg-gray-200" : "bg-black"}
              />
            ))}
          </div>

          <p className="text-3xl p-2 tracking-wider text-slate-800 border-b-2 border-dashed border-slate-800 w-full text-center">Charlotte</p>

          <div className="p-2 w-full relative timeline-arrow">
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
    </div >
  </div>


  )

}

export default About;
