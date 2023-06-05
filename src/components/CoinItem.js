import PropTypes from 'prop-types';

const CoinItem = ({ coin }) => {
  const {
    uuid, name, iconUrl, symbol,
  } = coin;

  return (
    <>
      <h2>{name}</h2>
      <img className="icon" src={iconUrl} alt={name + uuid} />
      <p>{symbol}</p>
    </>
  );
};

CoinItem.propTypes = {
  coin: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoinItem;
