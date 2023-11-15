import React, { useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';

const Cards = ({ dataSneakers, onAddToCart }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="sneakers">
      <div className="sneakers__container">
        <div className="sneakers__top">
          <h1 className="sneakers__title title">Все кроссовки</h1>
          <input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            value={searchValue}
            type="text"
            className="sneakers__search"
            placeholder="Поиск..."
          />
        </div>
        <div className="sneakers__cards">
          {dataSneakers
            .filter((sneakers) =>
              sneakers.title
                .toLowerCase()
                .includes(searchValue.trim().toLowerCase())
            )
            .map((sneakers) => (
              <Card
                {...sneakers}
                key={sneakers.id}
                onAddToCart={onAddToCart}
              ></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
