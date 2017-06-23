import React, { PropTypes } from 'react';
import { Button, Error } from '../';

const Rates = ({ isLoading, errorMessage, bittrex, btcE, poloniex, fetchExchangeRates }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Cryptocurrency Exchange Rates</h1>
    {errorMessage && <Error>{errorMessage}</Error>}
    <Button
      clickHandler={fetchExchangeRates}
      isDisabled={isLoading}
    >
      Get exchange rates
    </Button>
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
