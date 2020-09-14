import React from 'react';
import logo from '../images/logo.svg';
import '../index.css';

function Header(props) {
  return (
      <header className="header">
        <img className="header__logo hover-style"
          src={logo} alt="логотип Mesto Russia" />
      </header>
  );
}

export default Header;