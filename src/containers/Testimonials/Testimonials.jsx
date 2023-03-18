import React from 'react';
import { AppWrap } from '../../wrapper';
import '../Testimonials/Testimonials.scss';

const Testimonials = () => {
  return (
    <>
      <h2 className='head-text'>Client <span>Testimonials</span></h2>
    </>
  )
}

export default AppWrap(Testimonials, 'testimonials');