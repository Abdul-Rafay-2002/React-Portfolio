import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { AppWrap } from '../../wrapper';
import './Skills.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkill(data);
    });
  }, []);
  return (
    <>
      <h2 className='head-text'>
        My <span>Skills</span> & <span>Experience</span>
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skill.map((skills) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              className='app__item'
              key={skills.name}>
              <div
                className='app__skills-icon'
                style={{
                  backgroundColor: skills.bgColor,
                  boxShadow: `0px 0px 25px 1px ${skills.bgColor}`,
                }}>
                <img src={urlFor(skills.icon)} alt={skills.name} />
              </div>
              <p className='p-text'>{skills.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skill-experience'>
          {experiences?.map((experience) => (
            <motion.div className='app__skill-experience-item' key={experience.year}>
              <div className="app__skill-experience-year">
                <p>{experience.year}</p>
              </div>
              <motion.div>
                {experience.works.map((work) =>(
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.8 }}
                      className='app__skill-experience-item'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h5 className=''>{work.name}</h5>
                      <p>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#eee'
                      className='toolTip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </> 
                ))}
              </motion.div>
            </motion.div>
          
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
