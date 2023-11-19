import { Link } from 'react-router-dom';
import React from 'react';
import './Header.scss';

const Header = ({ onOpenCart, cartItems }) => {
  const itemsAmount = cartItems.length;

  return (
    <header className="header">
      <div className="header__container">
        <Link to="." className="header__logo logo-header">
          <img className="logo-header__img" src="img/logo.png" alt="logotype" />
          <div className="logo-header__text">
            <div className="logo-header__main-text">REACT SNEAKERS</div>
            <div className="logo-header__submain-text">
              Магазин лучших кроссовок
            </div>
          </div>
        </Link>
        <ul className="header__list">
          <li className="header__item">
            <button onClick={onOpenCart} type="button" className="header__link">
              <img src="img/header/cart.svg" alt="cart" />
              <span>
                {itemsAmount ? itemsAmount + ' шт.' : 'В корзине пусто'}
              </span>
            </button>
          </li>
          <li className="header__item">
            <Link to="favourites" className="header__link">
              <img src="img/header/heart.svg" alt="heart" />
              <span>Избранное</span>
            </Link>
          </li>
          <li className="header__item">
            <Link to="orders" className="header__item">
              <button type="button" className="header__link">
                <img src="img/header/user.svg" alt="user" />
                <span>Мой заказ</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
