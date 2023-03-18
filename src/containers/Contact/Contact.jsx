import React from 'react';
import { AppWrap } from '../../wrapper';
import '../Contact/Contact.scss';

const Contact = () => {
  return (
    <>
      <h2 className='head-text'>Let's <span>Contact</span> With me</h2> 
    </>
  )
}

export default AppWrap(Contact, 'contact');