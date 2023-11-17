import Cards from '../Cards/Cards';

const Home = ({
  onAddToCart,
  dataSneakers,
  cartItems,
  onAddToFavourits,
  favItems,
}) => {
  return (
    <main className="main sneakers">
      <Cards
        title="Все кроссовки"
        onAddToCart={onAddToCart}
        dataSneakers={dataSneakers}
        cartItems={cartItems}
        onAddToFavourits={onAddToFavourits}
        favItems={favItems}
      ></Cards>
    </main>
  );
};

export default Home;
