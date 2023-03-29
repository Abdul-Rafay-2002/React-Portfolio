import React, { useState } from 'react';
import './NavBar.scss';
import images from '../../constants/images';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';


const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav>
      <div className="container">
        <div className='app__navbar'>
          <div className='logo-wrapper'>
            <a href='/'><img src={images.footerLogo} alt='app__logo' /></a>
          </div>
          <ul>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
              (item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
            <li><a href='https://github.com/Abdul-Rafay-2002' target='_blank' rel='noreferrer'><FaGithub /></a></li>
            <li><a href='https://www.linkedin.com/in/abdul-rafay-3bb521231/' target='_blank' rel="noreferrer"><FaLinkedinIn /></a></li>
          </ul>
          <div className="app__navbar-menu">
            <HiOutlineMenuAlt3 className='Open'onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiOutlineX onClick={() => setToggle(false)} />
                <div className='mobile__logo-wrapper'>
                  <a href='/'><img src={images.logo} alt='app__logo' /></a>
                </div>
                {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  )
                )}

              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
