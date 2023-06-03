import { Route, Routes, NavLink } from 'react-router-dom';
import './assets/App.css';
import ListCoins from './components/ListCoins';
import Details from './components/Details';

const NotFound = () => <h2>Error 404 - Page not found</h2>;

const About = () => <h3>About me</h3>;

function App() {
  return (
    <div className="page">
      <header>
        <NavLink to="/" className="link">
          <div className="home">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M328 112L184 256l144 144"
              />
            </svg>
          </div>
        </NavLink>
        <img src="https://cdn.coinranking.com/assets/64374966bb4cd0691a9429341ae9b413.svg" alt="coinrank logo" />
        <h1>Crypto - Coinranking</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListCoins />} />
          ;
          <Route path="/details/:id" element={<Details />} />
          ;
          <Route path="/about" element={<About />} />
          ;
          <Route path="*" element={<NotFound />} />
          ;
        </Routes>
      </main>
      <footer>
        Created by Larry Villegas ©
      </footer>
    </div>
  );
}

export default App;
