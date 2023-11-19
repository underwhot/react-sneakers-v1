import React, { useEffect, useState } from 'react';
import './Card.scss';

const Card = ({
  title,
  price,
  imgUrl,
  id,
  onAddToCart,
  cartItems,
  onAddToFavourits,
  favItems,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.some((item) => item.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
    if (favItems && favItems.some((item) => item.id === id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [cartItems, favItems]);

  const onClickPlus = () => {
    onAddToCart(id);
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    onAddToFavourits(id);
    setIsLiked(!isLiked);
  };

  return (
    <div className="sneakers__card">
      <div type="button" className="sneakers-card__body">
        {onAddToFavourits && (
          <button onClick={onClickLike} className="sneakers-card__favourite">
            <img
              className="sneakers-card__heart-like"
              src={`/img/card/${isLiked ? 'like' : 'unlike'}.svg`}
              alt="heart"
            />
          </button>
        )}
        <div className="sneakers-card__img">
          <img src={imgUrl} alt="sneakers" />
        </div>
        <div className="sneakers-card__title">{title}</div>
        <div className="sneakers-card__info">
          <div className="sneakers-card__cost">
            <div className="sneakers-card__text">Цена:</div>
            <div className="sneakers-card__value">{price} руб.</div>
          </div>
          {onAddToCart && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
