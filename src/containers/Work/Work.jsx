import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {BiLinkExternal} from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { AppWrap } from '../../wrapper/index';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([])
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWorks(data);
      });
  }, [])

  const filterHandler = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 400);
  };
  return (
    <>
      <h2 className='head-text'>
        My <span>Portfolio</span>
      </h2>
      <div className='app__work-filter'>
        {[
          'WordPress',
          'HTML5',
          'JavaScript',
          'CSS3',
          'React Js',
          'Next Js',
          'All',
        ].reverse().map((item, index) => (
          <button
            key={index}
            onClick={() => filterHandler(item)}
            className={`app__work-filter-item p-text ${activeFilter === item ? 'itemActive' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: .9, delayChildren: 0.9 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <a href={work.projectLink} target='_blank' rel='noreferrer' className='link'><BiLinkExternal/></a>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
              </motion.div>
            </div>
            <div className="app__work-content">
              <h6>{work.title}</h6>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
