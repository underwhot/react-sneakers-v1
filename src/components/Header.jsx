import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo logo-header">
          <img className="logo-header__img" src="img/logo.png" alt="logotype" />
          <div className="logo-header__text">
            <div className="logo-header__main-text">REACT SNEAKERS</div>
            <div className="logo-header__submain-text">
              Магазин лучших кроссовок
            </div>
          </div>
        </a>
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              <img src="img/header/cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              <img src="img/header/heart.svg" alt="heart" />
              <span>Закладки</span>
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              <img src="img/header/user.svg" alt="user" />
              <span>Профиль</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
