import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import first_menu from '../../images/menu-1.png';
import sec_menu from '../../images/menu-2.png';

function Menu() {
  return (
    <>
      <h1 align = "center" className = "title">Menu</h1>
      <p align = "center">Hint: at the bottom, you can also access our UberEats and Seamless 😊</p>

      <div className = "row">
        <div className = "column">
          <img alt = "first menu" src = {first_menu}></img>
        </div>
        <div className = "column">
          <img alt = "second menu" src = {sec_menu}></img>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Menu;