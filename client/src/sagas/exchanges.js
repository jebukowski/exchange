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

    yield put(actions.exchangeRatesSuccess({ bittrex, btcE, poloniex }));
  } catch (err) {
    yield put(actions.exchangeRatesError(err));
  }
}

export function* watchExchangeRatesRequest() {
  yield* takeEvery(types.EXCHANGE_RATES_REQUEST, exchangeRatesRequest);
}
