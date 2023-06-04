import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoinDetail } from '../redux/coins/detailSlice';
import '../assets/Details.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { coinData, isLoading, error } = useSelector((state) => state.coin);

  useEffect(() => {
    dispatch(fetchCoinDetail(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h2>Loading, please wait ...</h2>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  // console.log(coinDetail);
  return (
    <>
      <h2 className="det-title">
        Details
        <span>{coinData.name}</span>
      </h2>
      <img className="icon" src={coinData.iconUrl} alt={coinData.name} />
      <ul className="det-container">
        <li className="listDetail">
          <span>
            <strong>Name: </strong>
          </span>
          <span>{coinData.name}</span>
        </li>
        <li className="listDetail">
          <span>
            <strong>Symbol: </strong>
          </span>
          <span>{coinData.symbol}</span>
        </li>
        <li className="listDetail">
          <span>
            <strong>Descritpion: </strong>
          </span>
          <span className="det-des">{coinData.description}</span>
        </li>
        <li className="listDetail">
          <span>
            <strong>Website: </strong>
          </span>
          <a className="coinUrl" href={coinData.websiteUrl} target="_blank" rel="noreferrer">{coinData.websiteUrl}</a>
        </li>
        <li className="listDetail">
          <span>
            <strong>Market Capacity: </strong>
          </span>
          <span>{(coinData.marketCap * 1).toLocaleString('en-US')}</span>
        </li>
        <li className="listDetail">
          <span>
            <strong>Price: </strong>
          </span>
          <span>
            {(coinData.price * 1).toFixed(6).toLocaleString('en-US')}
            USD
          </span>
        </li>
        <li className="listDetail">
          <span>
            <strong>Rank: </strong>
          </span>
          <span>{coinData.rank}</span>
        </li>
      </ul>
    </>
  );
};

export default Details;
