import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header__top">
        <div className="header__container">
          <a href="/" className="header__logo">
            <Logo />
          </a>
          <nav className="header__nav">
            <a
              href="/catalog"
              className="header__nav-link header__nav-link--dropdown"
            >
              КАТАЛОГ
            </a>
            <a href="/about" className="header__nav-link">
              ПРО НАС
            </a>
            <a href="/contacts" className="header__nav-link">
              КОНТАКТИ
            </a>
          </nav>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__container"></div>
      </div>
    </header>
  );
};

export default Header;
