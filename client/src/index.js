import React from 'react';
import { render } from 'react-dom';
import { Root } from './components';
import routes from './routes';
import './index.css';

render(
  <Root routes={routes} />,
  document.getElementById('root')
);
