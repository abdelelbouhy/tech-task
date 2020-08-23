import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router';
import {routerReducer} from 'react-router-redux';
import reducers from './redux/reducers'
import {connectRouter} from 'connected-react-router';
import Home from './components/Home'

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
reducers.router = connectRouter(history);

const initialState = {};

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
, initialState);

const App = () => <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Home} />
        {/*<Route path="/post/:postId" component={}/>*/}
    </Router>
</Provider>;

ReactDOM.render(<App />, document.querySelector('#container'));
