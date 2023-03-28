import React from 'react';
import { motion } from 'framer-motion';


const MotionWrap = (Component, ClassName) => {
  return (
    <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1]}}
        transition= {{duration: .5}}
          className={`${ClassName}`}
    >
        <Component/>
    </motion.div>
  )
}

export default MotionWrap