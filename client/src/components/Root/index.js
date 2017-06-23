import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

const Root = ({ routes }) => (
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

Root.propTypes = {
  routes: PropTypes.object,
};

export default Root;
