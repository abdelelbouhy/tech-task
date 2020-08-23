/* eslint-disable filenames/match-exported */
/* istanbul ignore file */
import Reactotron, {trackGlobalErrors} from 'reactotron-react-js';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const configureReactotron = () => {
    Reactotron.configure({name: 'Origination Portal'})
        .use(trackGlobalErrors())
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect();

    return Reactotron;
};

export default configureReactotron;
