import {createStore, applyMiddleware} from 'redux';
import {routinePromiseWatcherSaga} from 'redux-saga-routines';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './redux/rootSagas';
import configureReactotron from './configureReactotorn'

export default function configureStore(initialState = {}, history) {
    let sagaMiddlewareOptions;
    const enhancers = [];

    const Reactotron = configureReactotron();

    enhancers.push(Reactotron.createEnhancer());
    const sagaMonitor = Reactotron.createSagaMonitor();

    sagaMiddlewareOptions = {
        sagaMonitor,
    };


    const sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);
    const middlewares = [
        sagaMiddleware,
    ];

    if (history) {
        middlewares.push(routerMiddleware(history));
    }

    enhancers.unshift(applyMiddleware(...middlewares));
    const composeEnhancers = composeWithDevTools({});

    const store = createStore(
        createReducer(history),
        initialState,
        composeEnhancers(...enhancers)
    );

    sagaMiddleware.run(routinePromiseWatcherSaga);
    sagaMiddleware.run(rootSaga);

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {};
    store.injectedSagas = {};

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;
}
