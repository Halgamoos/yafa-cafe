import React from 'react';
import './Footer.css';
import seamless_icon from '../images/seamless.png';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Order on UberEats or Seamless and follow the socials!
        </p>
        <button href = "https://www.seamless.com/menu/yafa-cafe-4415-4th-ave-brooklyn/2043300">
          <img src={seamless_icon} style = {{height: 30, width: 80}} alt="seamless" />
        </button>
        
      </section>
    </div>
  );
}

export default Footer;
