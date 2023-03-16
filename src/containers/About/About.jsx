import React, { useEffect, useState } from 'react';
import {AppWrap} from '../../wrapper';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client'
import './About.scss';

// const aboutContent = [
//   { title: 'Web Development', description: 'I am a good web developer', imageUrl:  images.WebDevelopment  },
//   { title: 'Web Design', description: 'I am a good web developer', imageUrl:  images.webDesign  },
//   { title: 'UI / UX', description: 'I am a good web developer', imageUrl:  images.UIUX  },
//   { title: 'Web Animations', description: 'I am a good web developer', imageUrl: images.WebAnimation  },
// ]


const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data));
  }, [])

  return (
    <>
      <div className='About-content'>
        <h2 className='head-text'>
          i Know that <span>Good Design</span><br /> means <span>Good Busniess</span>
        </h2>
        <motion.div
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2 }}
        >
        <div className="about-profile">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1, }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="about-profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h6>{about.title}</h6>
              <p>{about.description}</p>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </>
  )
};

export default AppWrap(About, 'about');