import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoins } from './redux/coins/coinsSlice';
import CoinItem from './components/CoinItem';



const ListCoins = () => {
  const dispatch = useDispatch();
  const { coinsData, isLoading, error } = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading, please wait ...</h2>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section className="container-coins">
        <ul className="list-coin">
          {coinsData?.map((coin) => {
            return (
              <li key={coin.uuid} className="coin-item">
                <CoinItem coin={coin} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

const NotFound = () => <h2>Error 404 - Page not found</h2>;

const About = () => <h3>About me</h3>;

function App() {
  return (
    <>
      <h1>Coins - Coinranking</h1>
      <Routes>
        <Route path="/" element={<ListCoins />} />;
        {/* <Route path="/details/:name" element={} />; */}
        <Route path="/about" element={<About />} />;
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </>
  );
}

export default App;
