import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Cart></Cart>
      <Header></Header>

      <main className="main sneakers">
        <div className="sneakers__container">
          <div className="sneakers__top">
            <h1 className="sneakers__title title">Все кроссовки</h1>
            <input
              type="text"
              className="sneakers__search"
              placeholder="Поиск..."
            />
          </div>
          <div className="sneakers__cards">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
