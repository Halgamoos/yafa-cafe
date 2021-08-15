import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className = 'hero-box'>
        <h1>Yafa Cafe</h1>

        <h2>"Born in Yemen. Raised in Brooklyn."</h2>

        <p>4415 4TH AVENUE<br/>SUNSET PARK<br/>BROOKLYN, NEW YORK</p>        
      </div>

      <div>
        {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
      </div>

      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Shop
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
