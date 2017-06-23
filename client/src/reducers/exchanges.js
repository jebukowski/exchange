import { Map } from 'immutable';
import * as types from '../actions/typeConstants';

const init = Map({
  isLoading: false,
  errorMessage: '',
  bittrex: null,
  btcE: null,
  poloniex: null,
});

export default (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.EXCHANGE_RATES_REQUEST:
      return state
        .set('isLoading', true)
        .set('errorMessage', '')
        .set('bittrex', null)
        .set('btcE', null)
        .set('poloniex', null);

    case types.EXCHANGE_RATES_SUCCESS:
      return state
        .set('isLoading', false)
        .set('bittrex', payload.bittrex)
        .set('btcE', payload.btcE)
        .set('poloniex', payload.poloniex);

    case types.EXCHANGE_RATES_ERROR:
      return state
        .set('isLoading', false)
        .set('errorMessage', payload);

    default:
      return state;
  }
};
