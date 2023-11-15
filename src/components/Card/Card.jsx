import React, { useState } from 'react';
import './Card.scss';

const Card = ({ title, price, imgUrl, id, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onAddToCart(id);
    setIsAdded(!isAdded)
  }

  return (
    <div className="sneakers__card sneakers-card">
      <div type="button" className="sneakers-card__body">
        <button className="sneakers-card__favourite">
          <img
            className="sneakers-card__heart-like"
            src="/img/card/heart-like.svg"
            alt="heart"
          />
          <img
            className="sneakers-card__heart-unlike"
            src="/img/card/heart-unlike.svg"
            alt="heart"
          />
        </button>
        <div className="sneakers-card__img">
          <img src={imgUrl} alt="sneakers" />
        </div>
        <div className="sneakers-card__title">{title}</div>
        <div className="sneakers-card__info">
          <div className="sneakers-card__cost">
            <div className="sneakers-card__text">Цена:</div>
            <div className="sneakers-card__value">{price} руб.</div>
          </div>
          <button
            onClick={onClickPlus}
            type="button"
            className="sneakers-card__add"
          >
            <img
              className="sneakers-card__plus"
              src={`/img/card/${isAdded ? 'check' : 'plus'}.svg`}
              alt="plus"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
