import React from 'react';
import kit from '../assets/kit4.jpg'


import { FaDrum, FaMusic } from 'react-icons/fa'; // Example icon


const About = ({ id }) => {

  const TimelineItem = ({ date, description, subtitle, icon, isLastItem }) => (
    <li className={`list-none ${!isLastItem ? 'border-b-2 border-dashed border-slate-600' : ''} w-auto`}>
      <div className='flex p-3 w-full'>
        <div className='w-1/3 flex flex-col justify-center items-center text-slate-50 '>
          {icon}
          <span className="text-md  text-slate-400">{date}</span>
        </div>
        <div className="w-2/3 flex flex-col justify-start items-start ">
          <h3 className="text-slate-200  text-xl">{description}</h3>

          <p className="text-slate-400 text-md italic">{subtitle}</p>
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
    <div
      className="about-text md:w-full p-4 flex flex-col justify-start"
      style={{
        backgroundImage: `url(${kit})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className='lg:transform lg:-skew-y-6 lg:-skew-x-3 p-4 w-full lg:w-1/2 flex flex-col justify-center items-center lg:ml-9'
        style={{
          backgroundImage: `linear-gradient(to top right, rgb(152,0,209,0.2), rgb(33,84,78,0.2))`,
          backdropFilter: 'blur(40px)', // Adjust the pixel value to increase or decrease the blur effect
          WebkitBackdropFilter: 'blur(40px)' // This line is for better compatibility with Safari on iOS
        }}
      >
        <div className=" w-full  p-4 lg:transform lg:skew-y-6 lg:skew-x-3"> {/* Reverse the skew */}
          <h2 className="text-6xl md:text-7xl w-full flex justify-center font-bold"
            style={{ color: 'rgba(255, 255, 255, 0.5  )' }}> About Larry</h2> {/* Adjusted text color for readability */}
          <p className="mb-3 text-gray-400  text-center">An experienced and versatile drummer based in Charlotte, NC!</p>
          <div className='w-full border-l-4 border-slate-50'>
            <p className="text-4xl font-bold tracking-wider border-b-2 border-dashed border-slate-400 w-full text-center
                 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-300 ">

              Chicago
            </p>

            <div className=" w-full relative">
              {chicagoData.map((item, index) => (
                <TimelineItem
                  key={item.date}
                  date={item.date}
                  icon={index % 2 === 0 ? <FaDrum /> : <FaMusic />} // Alternate icons based on index
                  description={item.description}
                  subtitle={item.subtitle}
                  isLastItem={index === chicagoData.length} // Pass true if it's the last item
                />
              ))}
            </div>

            <p className="text-4xl p-2 font-bold tracking-wider border-b-2 border-dashed border-slate-400 w-full text-center
            
            text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500 
            ">Charlotte</p>

            <div className="w-full relative timeline-arrow">
              {charlotteData.map((item, index) => (
                <TimelineItem
                  key={item.date}
                  date={item.date}
                  icon={index % 2 === 0 ? <FaDrum /> : <FaMusic />} // Alternate icons based on index
                  description={item.description}
                  subtitle={item.subtitle}
                  isLastItem={index === charlotteData.length - 1} // Pass true if it's the last item

                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  </div >


  )

}

export default About;
