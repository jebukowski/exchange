import express from 'express';
import request from 'request-promise';

const router = express.Router();
const acceptableMarketNames = ["BTC-DASH", "BTC-ETH", "BTC-LTC"];

router.get('/bittrex', (req, res, next) => {
  request('https://bittrex.com/api/v1.1/public/getmarketsummaries')
    .then(response => {
      const { success, message, result } = JSON.parse(response);

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

export default router;
