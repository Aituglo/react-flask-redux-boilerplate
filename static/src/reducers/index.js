import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import auth from './auth';
import data from './data';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    /* your reducers */
    auth,
    data,
});

export default rootReducer;
