import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Rates } from '../';

const RatesContainer = (props) => (
  <Rates {...props} />
);

const mapStateToProps = (state) => ({
  isLoading: state.exchanges.get('isLoading'),
  errorMessage: state.exchanges.get('errorMessage'),
  bittrex: state.exchanges.get('bittrex'),
  btcE: state.exchanges.get('btcE'),
  poloniex: state.exchanges.get('poloniex'),
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchangeRates: () => dispatch(actions.exchangeRatesRequest()),
});

RatesContainer.propTypes = {
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  bittrex: PropTypes.object,
  btcE: PropTypes.object,
  poloniex: PropTypes.object,
  fetchExchangeRates: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RatesContainer);
