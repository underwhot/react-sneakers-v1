import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './components/pages/Home';
import Favourites from './components/pages/Favourites';

function App() {
  const [dataSneakers, setDataSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

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
    if (!cartItems.find((item) => item.id === id)) {
      let sneakers = dataSneakers.find((item) => item.id === id);
      axios.post(
        'https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart',
        sneakers
      );
      setCartItems((prev) => [...prev, sneakers]);
    } else {
      axios
        .delete(
          `https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart/${id}`
        )
        .catch((err) => console.error(err));
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const onRemoveFromCart = (id) => {
    axios
      .delete(`https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart/${id}`)
      .catch((err) => console.error(err));

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavourits = (id) => {
    if (!favItems.find((item) => item.id === id)) {
      let sneakers = dataSneakers.find((item) => item.id === id);
      setFavItems((prev) => [...prev, sneakers]);
    } else {
      setFavItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Cart
          isCartOpen={isCartOpen}
          onCloseCart={isCartOpenHandler}
          cartItems={cartItems}
          onRemoveFromCart={onRemoveFromCart}
        ></Cart>
        <Header onOpenCart={isCartOpenHandler}></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToCart={onAddToCart}
                onAddToFavourits={onAddToFavourits}
                dataSneakers={dataSneakers}
                cartItems={cartItems}
                favItems={favItems}
              ></Home>
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                onAddToCart={onAddToCart}
                onAddToFavourits={onAddToFavourits}
                dataSneakers={favItems}
                cartItems={cartItems}
                favItems={favItems}
              ></Favourites>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
