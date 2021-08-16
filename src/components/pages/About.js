import React from 'react';
import './About.css';
import Footer from '../Footer';
import yafa_img from '../../images/yafa_village.jpg';
import farmers from '../../images/yafa_farmers.png';
import deli from '../../images/yafa_deli.png';
import yafa_bros from '../../images/yafa_fam.jpg';

function About() {
  return (
    <>
      <h1 align = "center" className = "about-title">From <em>Y</em>emen to The World.</h1>

      <div className = "about-row">
        <div className = "about-col">
          <p>Our Story begins in a remote village in the lush tribal highlands of Yafa, South Yemen.</p>
        </div>
        <div className = "about-col">
          <img alt = "yafa img" src = {yafa_img}></img>
        </div>
      </div>

      <div className = "about-row">
        <div className = "about-col">
          <img alt = "yafa farmers" src = {farmers}></img>
        </div>        
        <div className = "about-col">
          <p>Here, an eclectic family of farmers and merchants make their living in the midst of a warring period of national unification; an event that would come to alter the future of Yemenis forever.  </p>
        </div>

      </div>
      
      <div className = "about-row">
        <div className = "about-col">
          <p>With dreams of a brighter future, the family finally fled the crippling grip of dictatorship in our home country of Yemen. In 1995, the family of Yafai migrants found themselves a new home in Brooklyn, New York. </p>
        </div>
        <div className = "about-col">
          <img alt = "yafa deli" src = {deli}></img>
        </div>
      </div>

      <div className = "about-row">
        <div className = "about-col">
          <img alt = "yafa brothers" src = {yafa_bros}></img>
        </div>        
        <div className = "about-col">
          <p>Bringing with them an inherent understanding of trade and hustle, our family set up Yafa Deli, a bustling quick-stop bodega in Sunset Park with a namesake honoring our roots.  Through a culture of hard work, care, and friendliness, we have had the pleasure of serving the lovely constituents of our Sunset Park community for over twenty years.</p>
        </div>

      </div>

      <Footer/>
    </>
  );
}

export default About;