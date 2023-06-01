import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
  const { uuid, name, iconUrl, symbol } = coin;
  console.log('aqui');
  return (
    <>
      <h2>{name}</h2>
      <Link>
        <span>{'->'}</span>
      </Link>
      <img className="icon" src={iconUrl} alt={name} />
      <p>{symbol}</p>
    </>
  );
};

export default CoinItem;