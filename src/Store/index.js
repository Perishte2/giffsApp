import {createStore, applyMiddleware} from 'redux';
import {giffReducer} from '../Store/giffReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';






export const store = createStore(giffReducer, composeWithDevTools(applyMiddleware(thunk)));