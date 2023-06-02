const CoinItem = ({ coin }) => {
  const { uuid, name, iconUrl, symbol } = coin;
 
  return (
    <>
      <h2>{name}</h2>
      <img className="icon" src={iconUrl} alt={name} />
      <p>{symbol}</p>
    </>
  );
};

export default CoinItem;