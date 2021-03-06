import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-box'>
        <h1 className='title'>Yafa Cafe</h1>

        <h2>"Born in Yemen. Raised in Brooklyn."</h2>

        <p>4415 4TH AVENUE<br />SUNSET PARK<br />BROOKLYN, NEW YORK</p>
      </div>

      {/* Ubereats, seamless */}
      <div className="button-col">
        <div className='hero-btns'>
          <a href = "https://www.ubereats.com/store/yafa-cafe/">
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              UberEats <i class="fas fa-utensils"></i>
            </Button>
          </a>
          <a href = "https://www.seamless.com/menu/yafa-cafe-4415-4th-ave-brooklyn/2043300">
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
              Seamless <i class="fas fa-utensils"></i>
            </Button>
          </a>
          <a href = "https://www.shop.yafabrooklyn.com/">
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              Yafa Shop <i class="fas fa-shopping-cart"></i>
            </Button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default HeroSection;
