import React from 'react';

import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <>
    <div style={{textAlign: 'center', padding: '20px', borderTop: '1px solid #444'}}>
      <p>© {new Date().getFullYear()} All Right Reserved - React Portfolio By Rafay Dev.</p>
    </div>
    </>
  )
}

export default Footer;