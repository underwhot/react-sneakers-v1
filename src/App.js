import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Cards from './components/Cards/Cards';

function App() {
  const [dataSneakers, setDataSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakers')
      .then((res) => res.json())
      .then((json) => {
        setDataSneakers(json);
      })
      .catch((err) => console.error(err));
  }, []);

  const isCartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onAddtoCart = (id) => {
    const currItem = dataSneakers.find((item) => item.id === id);

    if (!cartItems.includes(currItem)) {
      setCartItems((prev) => [...prev, currItem]);
    } else {
      setCartItems((prev) => [...prev.filter((item) => item !== currItem)]);
    }
  };

  const onRemoveFromCart = (id) => {
    const currItem = dataSneakers.find((item) => item.id === id);
    setCartItems((prev) => [...prev.filter((item) => item !== currItem)]);
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
        <Cards onAddtoCart={onAddtoCart} dataSneakers={dataSneakers}></Cards>
      </main>
    </div>
  );
}

export default App;
