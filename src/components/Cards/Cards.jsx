import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import Card from '../Card/Card';
import './Cards.scss';

const Cards = ({
  isLoading,
  dataSneakers,
  onAddToCart,
  cartItems,
  title,
  onAddToFavourits,
  favItems,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="sneakers__container">
      <div className="sneakers__top">
        <h1 className="sneakers__title title">{title}</h1>
        <input
          onChange={(e) => onChangeSearchInput(e.target.value)}
          value={searchValue}
          type="text"
          className="sneakers__search"
          placeholder="Поиск..."
        />
      </div>
      <div className="sneakers__cards">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, i) => <Skeleton key={i}></Skeleton>)
          : dataSneakers
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
                  cartItems={cartItems}
                  onAddToFavourits={onAddToFavourits}
                  favItems={favItems}
                ></Card>
              ))}
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      className="sneakers__card"
      height={280}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="30" y="36" rx="10" ry="10" width="150" height="91" />
      <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
      <rect x="30" y="162" rx="3" ry="3" width="93" height="15" />
      <rect x="30" y="199" rx="3" ry="3" width="80" height="15" />
      <rect x="148" y="184" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  );
};

export default Cards;
