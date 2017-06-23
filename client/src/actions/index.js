import * as types from './typeConstants';

export const exchangeRatesRequest = () => ({
  type: types.EXCHANGE_RATES_REQUEST,
});

export const exchangeRatesSuccess = (payload) => ({
  type: types.EXCHANGE_RATES_SUCCESS,
  payload,
});

export const exchangeRatesError = (err) => ({
  type: types.EXCHANGE_RATES_ERROR,
  payload: err.message,
  error: true,
});
