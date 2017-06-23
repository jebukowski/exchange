import React from 'react';
import { render } from 'react-dom';
import { Root } from './components';
import store from './configureStore';
import routes from './routes';
import './index.css';

render(
  <Root store={store} routes={routes} />,
  document.getElementById('root')
);
