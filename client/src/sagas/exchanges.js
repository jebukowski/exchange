import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';
import * as types from '../actions/typeConstants';

function* exchangeRatesRequest() {
  try {
    const bittrex = yield api.bittrex();
    const btcE = yield api.btcE();
    const poloniex = yield api.poloniex();

    const exchanges = {
      bittrex: { ...bittrex, best: [] },
      btcE: { ...btcE, best: [] },
      poloniex: { ...poloniex, best: [] },
    };

    const topDrawer = Object.keys(exchanges).reduce((acc, exchange) => {
      const ratesObject = exchanges[exchange];

      if (acc === null) {
        return {
          'BTC-DASH': { exchange, rate: ratesObject['BTC-DASH'] },
          'BTC-ETH': { exchange, rate: ratesObject['BTC-ETH'] },
          'BTC-LTC': { exchange, rate: ratesObject['BTC-LTC'] },
        };
      }

      Object.keys(acc).forEach(key => {
        if (ratesObject[key] < acc[key].rate) {
          acc[key].exchange = exchange;
          acc[key].rate = ratesObject[key];
        }
      });

      return acc;
    }, null);

    Object.keys(topDrawer).forEach(key => {
      exchanges[topDrawer[key].exchange].best.push(key);
    });

    yield put(actions.exchangeRatesSuccess(exchanges));
  } catch (err) {
    yield put(actions.exchangeRatesError(err));
  }
}

export function* watchExchangeRatesRequest() {
  yield* takeEvery(types.EXCHANGE_RATES_REQUEST, exchangeRatesRequest);
}
