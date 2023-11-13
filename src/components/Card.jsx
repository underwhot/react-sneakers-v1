import React from 'react'

const Card = () => {
  return (
    <div className="sneakers__card sneakers-card">
    <div type="button" className="sneakers-card__body">
      <button className="sneakers-card__favourite">
        <img
          className="sneakers-card__heart-like"
          src="img/card/heart-like.svg"
          alt="heart"
        />
        <img
          className="sneakers-card__heart-unlike"
          src="img/card/heart-unlike.svg"
          alt="heart"
        />
      </button>
      <div className="sneakers-card__img">
        <img src="img/sneakers/01.jpg" alt="sneakers" />
      </div>
      <div className="sneakers-card__title">
        Мужские Кроссовки Nike Blazer Mid Suede
      </div>
      <div className="sneakers-card__info">
        <div className="sneakers-card__cost">
          <div className="sneakers-card__text">Цена:</div>
          <div className="sneakers-card__value">12 999 руб.</div>
        </div>
        <button type="button" className="sneakers-card__add">
          <img
            className="sneakers-card__plus"
            src="img/card/plus.svg"
            alt="plus"
          />
          <img
            className="sneakers-card__check"
            src="img/card/check.svg"
            alt="check"
          />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Card