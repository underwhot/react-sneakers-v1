import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersFormLocalStorage = localStorage.getItem('orderItems');
    if (ordersFormLocalStorage && ordersFormLocalStorage.length > 0) {
      setOrders(JSON.parse(ordersFormLocalStorage));
    }
  }, []);

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem('orderItems');
  };

  return (
    <main
      className={
        orders.length === 0 ? 'main sneakers empty-fav' : 'main sneakers'
      }
    >
      {orders.length > 0 ? (
        <Cards
          clearOrders={clearOrders}
          title="Мой заказ"
          dataSneakers={orders}
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
      <div className="empty-fav__text">Вы ничего не заказали</div>
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

export default Orders;
