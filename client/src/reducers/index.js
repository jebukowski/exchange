import { combineReducers } from 'redux';
import rates from './rates';

const appReducer = combineReducers({ rates });

export default (state, action) => appReducer(state, action);
