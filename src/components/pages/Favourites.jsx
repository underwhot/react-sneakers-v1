import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Home = ({ onAddToCart, dataSneakers, cartItems, onAddToFavourits, favItems }) => {
  return (
    <main
      className={
        dataSneakers.length === 0 ? 'main sneakers empty-fav' : 'main sneakers'
      }
    >
      {dataSneakers.length > 0 ? (
        <Cards
          title="Избранное"
          onAddToCart={onAddToCart}
          dataSneakers={dataSneakers}
          cartItems={cartItems}
          onAddToFavourits={onAddToFavourits}
          favItems={favItems}
        ></Cards>
      ) : (
        <EmptyFav></EmptyFav>
      )}
    </main>
  );
};

const EmptyFav = () => {
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

export default Home;
