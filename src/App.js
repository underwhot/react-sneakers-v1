import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Favourites from './components/pages/Favourites';
import Orders from './components/pages/Orders';
import Cart from './components/Cart/Cart';
import AppContext from './context';

function App() {
  const [dataSneakers, setDataSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setDataSneakers(json);
    //   })
    //   .catch((err) => console.error(err));

    // axios
    //   .get('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart')
    //   .then((res) => {
    //     setCartItems(res.data);
    //   })
    //   .catch((err) => console.error(err));

    const loadingTimer = setTimeout(() => {
      axios
        .get('https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersData')
        .then((res) => {
          setDataSneakers(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }, 1000);

    const cartItemsFromLS = localStorage.getItem('cartItems');
    if (cartItemsFromLS && cartItemsFromLS.length > 0) {
      setCartItems(JSON.parse(cartItemsFromLS));
    }

    const favItemsFromLS = localStorage.getItem('favItems');
    if (favItemsFromLS && favItemsFromLS.length > 0) {
      setFavItems(JSON.parse(favItemsFromLS));
    }


    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favItems', JSON.stringify(favItems));
  }, [favItems]);

  const isCartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onAddToCart = (id) => {
    if (!cartItems.find((item) => item.id === id)) {
      const sneakers = dataSneakers.find((item) => item.id === id);
      setCartItems((prev) => [...prev, sneakers]);
    } else {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    // if (!cartItems.find((item) => item.id === id)) {
    //   let sneakers = dataSneakers.find((item) => item.id === id);
    //   axios.post(
    //     'https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart',
    //     sneakers
    //   );
    //   setCartItems((prev) => [...prev, sneakers]);
    // } else {
    //   axios
    //     .delete(
    //       `https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart/${id}`
    //     )
    //     .catch((err) => console.error(err));
    //   setCartItems((prev) => prev.filter((item) => item.id !== id));
    // }
  };

  const onRemoveFromCart = (id) => {
    // axios
    //   .delete(`https://654fb2ee358230d8f0cda05a.mockapi.io/sneakersCart/${id}`)
    //   .catch((err) => console.error(err));

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
    <AppContext.Provider
      value={{
        dataSneakers,
        isCartOpen,
        cartItems,
        favItems,
        isLoading,
        onAddToFavourits,
        onAddToCart,
        setCartItems,
      }}
    >
      <BrowserRouter>
        <div className="wrapper">
          <Cart
            isCartOpen={isCartOpen}
            onCloseCart={isCartOpenHandler}
            cartItems={cartItems}
            onRemoveFromCart={onRemoveFromCart}
          ></Cart>
          <Header onOpenCart={isCartOpenHandler} cartItems={cartItems}></Header>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoading={isLoading}
                  onAddToCart={onAddToCart}
                  onAddToFavourits={onAddToFavourits}
                  dataSneakers={dataSneakers}
                  cartItems={cartItems}
                  favItems={favItems}
                ></Home>
              }
            />
            <Route path="/favourites" element={<Favourites></Favourites>} />
            <Route path="/orders" element={<Orders></Orders>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
