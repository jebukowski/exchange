import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bittrex, btcE, poloniex }) => {
  const mapRates = (exchange) => (
    Object.keys(exchange).map((key, index) => { // eslint-disable-line
      if (exchange.best.includes(key)) {
        return <p key={index}><strong>{exchange[key]}</strong></p>;
      } else if (key !== 'best') {
        return <p key={index}>{exchange[key]}</p>;
      }
    })
  );

  return (
    <div style={{ display: 'flex', textAlign: 'left', justifyContent: 'space-between' }}>
      <div style={{ order: 1 }}>
        <h4>Currency</h4>
        <p>DASH</p>
        <p>Ethereum</p>
        <p>Litecoin</p>
      </div>
      <div style={{ order: 2 }}>
        <h4>Bittrex</h4>
        {bittrex && mapRates(bittrex)}
      </div>
      <div style={{ order: 3 }}>
        <h4>BTC-E</h4>
        {btcE && mapRates(btcE)}
      </div>
      <div style={{ order: 4 }}>
        <h4>Poloniex</h4>
        {poloniex && mapRates(poloniex)}
      </div>
    </div>
  );
};

Display.propTypes = {
  bittrex: PropTypes.object,
  btcE: PropTypes.object,
  poloniex: PropTypes.object,
};

export default Display;
