import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ajgpt__navbar">
      <div className="ajgpt__navbar-links">
        <div className="ajgpt__navbar-links_logo">
          <h2 className='ajgpt__logo-link'>AJ-GPT</h2>
        </div>
        <div className="ajgpt__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wajgpt">What is AJGPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="ajgpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="ajgpt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ajgpt__navbar-menu_container scale-up-center">
          <div className="ajgpt__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wajgpt">What is AJGPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="ajgpt__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
