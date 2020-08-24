import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home'
import Snippet from './components/Snippet'
import configureStore from './configureStore'

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const initialState = {};
const store = configureStore(initialState, history);

const App = () => <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Home} exact={true}  />
        <Route path="/:snippetId/edit" component={Home} />
        <Route path="/snippet/:snippetId" component={Snippet} />
    </Router>
</Provider>;

ReactDOM.render(<App />, document.querySelector('#container'));
