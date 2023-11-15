import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Cards from './components/Cards/Cards';

function App() {
  const [dataSneakers, setDataSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fetch('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setDataSneakers(json);
    //   })
    //   .catch((err) => console.error(err));

    axios
      .get('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersData')
      .then((res) => {
        setDataSneakers(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart')
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const isCartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onAddToCart = (id) => {
    const currItem = dataSneakers.find((item) => item.id === id);

    if (!cartItems.includes(currItem)) {
      setCartItems((prev) => [currItem, ...prev]);
      axios.post(
        'https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart',
        currItem
      );
    } else {
      setCartItems((prev) => prev.filter((item) => item !== currItem));
    }
  };

  const onRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios
      .delete(`https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart/${id}`)
      .catch((err) => console.error(err));
  };

  return (
    <div className="wrapper">
      <Cart
        isCartOpen={isCartOpen}
        onCloseCart={isCartOpenHandler}
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
      ></Cart>
      <Header onOpenCart={isCartOpenHandler}></Header>
      <main className="main">
        <Cards onAddToCart={onAddToCart} dataSneakers={dataSneakers}></Cards>
      </main>
    </div>
  );
}

export default App;
