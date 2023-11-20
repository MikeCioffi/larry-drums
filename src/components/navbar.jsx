import React, { useEffect, useState } from 'react';
import logoImage from "../assets/logo-black.png"

const Navbar = () => {


  const handleNavClick = (e, id) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const navbarHeight = document.querySelector('nav').offsetHeight; // Get the dynamic height of the navbar
    const element = document.getElementById(id);

    // Calculate position to scroll to by subtracting the navbar height
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight - 150) { // Checks if the scroll is past the first page (viewport height)
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const NavItemClass = `sm:text-xl tracking-wide sm:px-5 sm:py-4 rounded-md  font-semibold ${scrolled ? 'text-black hover:bg-slate-50 ' : 'text-white hover:bg-slate-600'}`

  return (
    <nav className={`fixed top-0 flex w-full justify-around items-center px-8 py-2 z-10 transition-all duration-500 ${scrolled ? 'bg-white  shadow-md' : 'bg-transparent'}`}>
      <img src={logoImage} alt="Logo" className="h-10 w-10 mr-2 mt-2"></img>

      <div className="hidden md:flex flex-grow-0  flex-row">
        <p className={`text-xl tracking-wide px-5 py-4 rounded-md  font-semibold ${scrolled ? 'text-black' : 'text-white'}`}>LARRY CIOFFI</p>
      </div>

      <ul className="flex space-x-12 text-sm md:text-xl ml-auto mr-0">
        <li><a href="#about" className={NavItemClass} onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a></li>
        <li><a href="#media" className={NavItemClass} onClick={(e) => handleNavClick(e, 'media')}>MEDIA</a></li>
        <li><a href="#contact" className={NavItemClass} onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a></li>
      </ul>
    </nav>


  );
};

export default Navbar;

