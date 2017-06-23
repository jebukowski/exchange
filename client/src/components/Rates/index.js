import React, { PropTypes } from 'react';
import { Button, Error } from '../';

const Rates = ({ isLoading, errorMessage, bittrex, btcE, poloniex, fetchExchangeRates }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Cryptocurrency Exchange Rates</h1>
    <Button clickHandler={fetchExchangeRates}>
      Get exchange rates
    </Button>
    {isLoading && <p>...loading</p>}
    {errorMessage && <Error>{errorMessage}</Error>}
  </div>
);

Rates.propTypes = {
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  bittrex: PropTypes.object,
  btcE: PropTypes.object,
  poloniex: PropTypes.object,
  fetchExchangeRates: PropTypes.func,
};

export default Rates;
