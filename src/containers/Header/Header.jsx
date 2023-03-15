import React from 'react';
import './Header.scss';
import images from '../../constants/images';
import {  motion } from 'framer-motion';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <div id='home'>
      <div className="content-containe">
        <div className='header-wrapper'>
          <motion.div
            whileInView={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__header"
          >
            <div className="app__header-badge">
              <div className='app__header-bio'>
                <h3>Hi, I'm </h3><h1>Abdul Rafay.</h1><h3> A Frontend Web Developer.</h3>
              </div>
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
              >
                {[images.html, images.css, images.javascript, images.sass, images.react].map((circle, index) => (
                  <div className="circle-cmp app__flex" key={`circle-${index}`}>
                    {/* <img src={circle} alt="profile_bg" /> */}
                    <motion.img src={circle} alt='circles' 
                    animate={{
                      scale: [1, 1.1],
                      rotate: 360,
                      transition:{
                        delay: 0.6,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                      }
                    }} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            animate={{ scale: [1.5, .8] }}
            className="app__header-img"
          >
            <motion.img src={[images.blueVector]} alt='heart-vector' className='app__header-heartTop' />
            <div className="app__header-image">
              <img src={images.main} alt='Abdul Rafay' />
            </div>
            <motion.img src={[images.blueVector]} alt='heart-vector' className='app__header-heartBottom' />
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Header;