import React from 'react';

const Cart = () => {
  return (
    <div style={{ display: 'none' }} className="cart">
      <div className="cart__overlay"></div>
      <div className="cart__body">
        <div className="cart__top">
          <h2 className="cart__title">Корзина</h2>
          <button type="button" className="cart__close">
            <img src="/img/cart/close.svg" alt="close" />
          </button>
        </div>
        <div className="cart__cards">
          <div className="cart__card card-cart">
            <div className="card-cart__img">
              <img src="/img/sneakers/01.jpg" alt="sneakers" />
            </div>
            <div className="card-cart__info">
              <div className="card-cart__title">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="card-cart__cost">12 999 руб.</div>
            </div>
            <button type="button" className="card-cart__delete">
              <img src="/img/cart/delete.svg" alt="delete" />
            </button>
          </div>
        </div>

        <div className="cart__bottom bottom-cart">
          <div className="bottom-cart__row">
            <div className="bottom-cart__text">Итого:</div>
            <span className="bottom-cart__span"></span>
            <div className="bottom-cart__total">21 498 руб.</div>
          </div>
          <div className="bottom-cart__row">
            <div className="bottom-cart__text">Налог 5%: </div>
            <span className="bottom-cart__span"></span>
            <div className="bottom-cart__total">1074 руб. </div>
          </div>
          <button
            type="button"
            className="bottom-cart__order button-green arrow-right"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
