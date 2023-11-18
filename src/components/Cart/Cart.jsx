import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import AppContext from '../../context';

const Cart = ({ isCartOpen, onCloseCart, cartItems, onRemoveFromCart }) => {
  const { setCartItems, orderedItems, setOrderedItems } =
    useContext(AppContext);
  const [isOrdered, setIsOrdered] = useState(false);
  let total;
  let tax;

  if (cartItems && cartItems.length > 0) {
    const total = cartItems.reduce((acc, item) => (acc += +item.price), 0);
    const tax = Math.round(total * 0.05);
  }

  const orderHandler = () => {
    localStorage.setItem('orderItems', JSON.stringify(cartItems));
    setOrderedItems(cartItems);
    setCartItems([]);
    setIsOrdered(true);
  };

  useEffect(() => {
    const resetCartOrdered = setTimeout(() => {
      setIsOrdered(false);
    }, 5000);

    return () => {
      clearTimeout(resetCartOrdered);
    };
  }, [orderedItems]);

  return (
    <div className={isCartOpen ? 'cart active' : 'cart'}>
      <div onClick={onCloseCart} className="cart__overlay"></div>
      <div className="cart__body">
        <div className="cart__top">
          <h2 className="cart__title">Корзина</h2>
          <button onClick={onCloseCart} type="button" className="cart__close">
            <img src="/img/cart/close.svg" alt="close" />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <View isOrdered={isOrdered} onCloseCart={onCloseCart}></View>
        ) : (
          <>
            <div className="cart__cards">
              {cartItems.map((item) => (
                <CartItem
                  {...item}
                  key={item.id}
                  onRemoveFromCart={onRemoveFromCart}
                ></CartItem>
              ))}
            </div>
            <div className="cart__bottom bottom-cart">
              <div className="bottom-cart__row">
                <div className="bottom-cart__text">Итого:</div>
                <span className="bottom-cart__span"></span>
                <div className="bottom-cart__total">
                  {cartItems.length === 0 ? 0 : total} руб.
                </div>
              </div>
              <div className="bottom-cart__row">
                <div className="bottom-cart__text">Налог 5%: </div>
                <span className="bottom-cart__span"></span>
                <div className="bottom-cart__total">
                  {cartItems.length === 0 ? 0 : tax} руб.{' '}
                </div>
              </div>
              <button
                onClick={orderHandler}
                type="button"
                className="bottom-cart__order button-green arrow-right"
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartItem = ({ title, price, imgUrl, id, onRemoveFromCart }) => {
  return (
    <div className="cart__card card-cart">
      <div className="card-cart__img">
        <img src={imgUrl} alt="sneakers" />
      </div>
      <div className="card-cart__info">
        <div className="card-cart__title">{title}</div>
        <div className="card-cart__cost">{price} руб.</div>
      </div>
      <button
        onClick={() => onRemoveFromCart(id)}
        type="button"
        className="card-cart__delete"
      >
        <img src="/img/cart/delete.svg" alt="delete" />
      </button>
    </div>
  );
};

const View = ({ isOrdered, onCloseCart }) => {
  return (
    <div className="cart__empty empty-cart">
      <img
        src={`/img/cart/${isOrdered ? 'complite' : 'empty'}.png`}
        alt="empty box"
        className="empty-cart__img"
      />
      <div className="empty-cart__title">
        {isOrdered ? 'Заказ оформлен!' : 'Корзина пустая'}
      </div>
      <div className="empty-cart__text">
        {isOrdered
          ? 'Ваш заказ скоро будет передан курьерской доставке'
          : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
      </div>
      <button
        onClick={onCloseCart}
        className="empty-cart__back button-green"
        type="button"
      >
        Вернуться назад
      </button>
    </div>
  );
};

export default Cart;
