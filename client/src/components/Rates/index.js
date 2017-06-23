import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from '../';

const Rates = ({ fetchExchangeRates, bittrex, btcE, poloniex }) => (
  <div>
    <h1>Cryptocurrency Exchange Rates</h1>
    <Button clickHandler={fetchExchangeRates}>Get exchange rates</Button>
  </div>
);

const mapStateToProps = (state) => ({
  bittrex: state.exchanges.get('bittrex'),
  btcE: state.exchanges.get('btcE'),
  poloniex: state.exchanges.get('poloniex'),
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchangeRates: () => dispatch(actions.exchangeRatesRequest()),
});

Rates.propTypes = {
  fetchExchangeRates: PropTypes.func,
  bittrex: PropTypes.object,
  btcE: PropTypes.object,
  poloniex: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rates);
