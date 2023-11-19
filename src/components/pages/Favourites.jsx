import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { useContext } from 'react';
import AppContext from '../../context';

const Favourites = () => {
  const { onAddToCart, onAddToFavourits, dataSneakers, cartItems, favItems } =
    useContext(AppContext);

  return (
    <main
      className={
        favItems.length === 0 ? 'main sneakers empty-fav' : 'main sneakers'
      }
    >
      {favItems.length > 0 ? (
        <Cards
          title="Избранное"
          onAddToCart={onAddToCart}
          dataSneakers={favItems}
          cartItems={cartItems}
          onAddToFavourits={onAddToFavourits}
          favItems={favItems}
        ></Cards>
      ) : (
        <Empty></Empty>
      )}
    </main>
  );
};

const Empty = () => {
  return (
    <div className="empty-fav__container">
      <div className="empty-fav__title">Пусто</div>
      <div className="empty-fav__text">Вы ничего не добавляли в закладки</div>
      <Link
        to="#"
        onClick={() => window.history.back()}
        type="button"
        className="empty-fav__back button-green"
      >
        Вернуться назад
      </Link>
    </div>
  );
};

export default Favourites;
