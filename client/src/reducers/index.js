import { combineReducers } from 'redux';
import exchanges from './exchanges';

const appReducer = combineReducers({ exchanges });

export default (state, action) => appReducer(state, action);
