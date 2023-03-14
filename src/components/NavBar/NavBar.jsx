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
            <img src={images.footerLogo} alt='app__logo' />
          </div>
          <ul>
            {['home', 'work', 'skills', 'testimonials', 'about', 'contact'].map(
              (item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
            <li><a href='/'><FaGithub /></a></li>
            <li><a href='/'><FaLinkedinIn /></a></li>
          </ul>
          <div className="app__navbar-menu">
            <HiOutlineMenuAlt3 className='Open'onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [400, 0] }}
                transition={{ duration: 0.85, ease: 'linear' }}
              >
                <HiOutlineX onClick={() => setToggle(false)} />
                <div className='mobile__logo-wrapper'>
                  <img src={images.logo} alt='app__logo' />
                </div>
                {['home', 'work', 'skills', 'testimonials', 'about', 'contact'].map(
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
