import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {connectRouter} from 'connected-react-router';
import homeReducer from './redux'

export default (history) => {
    const reducers = {
        form,
        ...homeReducer,
    };

    if (history) {
        reducers.router = connectRouter(history);
    }

    return combineReducers(reducers);
};
