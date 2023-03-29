import React, { useState } from 'react';
import { client } from '../../client';
import { AppWrap } from '../../wrapper';
import images from '../../constants/images';
import '../Contact/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmmited, setIsFormSubmmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmmited(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Let's <span>Contact</span> With me</h2>
      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.mail} alt='mail' />
          <a href="mailto:rafaymalick68@gmail.com">rafaymalick68@gmail.com</a>
        </div>
        <div className="app__contact-card">
          <img src={images.phone} alt='mail' />
          <a href="tel:0334-3667235">+92334-3667235</a>
        </div>
      </div>
      {!isFormSubmmited ?
        <div className="app__contact-form">
          <div className="app__contact-form-head">
            <input type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name='name' />
            <input type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
          </div>
          <div className="app__contact-form-body">
            <textarea name="message" id="" cols="10" rows="7" onChange={handleChangeInput} placeholder='Your Message' value={message} />
            <div className="app__contact-form-body-buttons">
              <button type="button" onClick={handleSubmit}> {loading ? 'Sending...' : 'Send Message'} </button>
              <a href='https://resume.io/r/vJ7gmfEbe' rel="noreferrer" target='_blank'> Download CV</a>
            </div>
          </div>
        </div>
        :
        <h4 style={{ textAlign: 'center', margin: "40px 0px", lineHeight: '1.3em' }}>Thanks for reaching out! We'll get back to you as soon as possible!</h4>
      }
    </>
  )
}

export default AppWrap(Contact, 'contact');