import { App, Rates } from '../components';

export default {
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/exchange-rates'),
  },
  childRoutes: [
    {
      path: 'exchange-rates',
      component: Rates,
    },
  ],
};
