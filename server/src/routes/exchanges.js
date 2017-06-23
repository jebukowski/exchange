import express from 'express';
import request from 'request-promise';

const router = express.Router();
const acceptableMarketNames = ['BTC-DASH', 'BTC-ETH', 'BTC-LTC'];

router.get('/bittrex', (req, res, next) => {
  request({
    uri: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
    json: true,
  })
    .then(response => {
      const { success, message, result } = response;

      if (!success) {
        throw Error(message);
      }

      const bittrex = result.reduce((acc, val) => {
        const { MarketName: marketName, Last: last } = val;

        if (acceptableMarketNames.includes(marketName)) {
          return {
            ...acc,
            [marketName]: last,
          };
        }

        return acc;
      }, {});

      res.json(bittrex);
    })
    .catch(err => {
      res.status(500).send(err.message);
      next(err);
    });
});

router.get('/btcE', (req, res, next) => {
  request({
    uri: 'https://btc-e.com/api/3/ticker/dsh_btc-eth_btc-ltc_btc',
    json: true,
  })
    .then(response => {
      const { dsh_btc, eth_btc, ltc_btc } = response;

      res.json({
        'BTC-DASH': dsh_btc.last,
        'BTC-ETH': eth_btc.last,
        'BTC-LTC': ltc_btc.last,
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
      next(err);
    });
});

router.get('/poloniex', (req, res, next) => {
  request({
    uri: 'https://poloniex.com/public?command=returnTicker',
    json: true,
  })
    .then(response => {
      const { BTC_DASH, BTC_ETH, BTC_LTC } = response;

      res.json({
        'BTC-DASH': Number(BTC_DASH.last),
        'BTC-ETH': Number(BTC_ETH.last),
        'BTC-LTC': Number(BTC_LTC.last),
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
      next(err);
    });
});

export default router;
