import { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import { fetchCoins } from "../redux/coins/coinsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListCoins = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { coinsData, isLoading, error } = useSelector((state) => state.coins);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading, please wait ...</h2>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  let dataFiltered=[];
  if(!search) {
    dataFiltered = coinsData;
  } else {
    dataFiltered = coinsData.filter((dato) => 
      dato.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  const handleClick = (id) => {
    if(id) navigate(`details/${id}`);
  }

  return (
    <>
      <section className="container-coins">
        <section className="container-search">
          <input
            type="text"
            className="search"
            placeholder="Search coin"
            value={search}
            onChange={handleSearch}
          />{' '}
        </section>
        <ul className="list-coin">
          {dataFiltered?.map((coin) => {
            return (
              <li
                key={coin.uuid}
                className="coin-item"
                onClick={() => handleClick(coin.uuid)}
              >
                <CoinItem coin={coin} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ListCoins;