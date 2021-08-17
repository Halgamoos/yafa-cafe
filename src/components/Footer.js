import React from 'react';
import './Footer.css';
import {Button} from './Button';

function Footer() {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact us on Facebook or Instagram. Order on UberEats and Seamless.
        </p>

        <div className = "foot-row">
          <div className = "foot-column">
            <a href = "https://www.facebook.com/yafabrooklyn/"><Button><i class="fab fa-facebook"> Facebook</i></Button></a>
          </div>
          <div className = "foot-column">
            <a href = "https://www.instagram.com/yafabrooklyn/?hl=en"><Button><i class="fab fa-instagram-square"> Instagram</i></Button></a>
          </div>
          <div className = "foot-column">
            <a href = "https://www.ubereats.com/store/yafa-cafe/"><Button><i class="fas fa-utensils"> UberEats</i></Button></a>
          </div>
          <div className = "foot-column">
            <a href = "https://www.seamless.com/menu/yafa-cafe-4415-4th-ave-brooklyn/2043300"><Button><i class="fas fa-utensils"> Seamless</i></Button></a>
          </div>
        </div>

        
      </section>
    </div>
  );
}

export default Footer;
