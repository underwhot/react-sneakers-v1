import React from 'react';
import './Header.scss';

const Header = ({ onOpenCart }) => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo logo-header">
          <img
            className="logo-header__img"
            src="/img/logo.png"
            alt="logotype"
          />
          <div className="logo-header__text">
            <div className="logo-header__main-text">REACT SNEAKERS</div>
            <div className="logo-header__submain-text">
              Магазин лучших кроссовок
            </div>
          </div>
        </a>
        <ul className="header__list">
          <li className="header__item">
            <button onClick={onOpenCart} type="button" className="header__link">
              <img src="/img/header/cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </button>
          </li>
          <li className="header__item">
            <button type="button" className="header__link">
              <img src="/img/header/heart.svg" alt="heart" />
              <span>Закладки</span>
            </button>
          </li>
          <li className="header__item">
            <button type="button" className="header__link">
              <img src="/img/header/user.svg" alt="user" />
              <span>Профиль</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
