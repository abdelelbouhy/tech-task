import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router';
import Home from './components/Home'
import configureStore from './configureStore'

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const initialState = {};
const store = configureStore(initialState, history);

const App = () => <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Home} />
        {/*<Route path="/post/:postId" component={}/>*/}
    </Router>
</Provider>;

ReactDOM.render(<App />, document.querySelector('#container'));
