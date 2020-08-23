import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {render, queries} from '@testing-library/react';
import Home from '.';
import configureStore from '../../configureStore';
import customQueries from './customQueries'
import {
    toBeInTheDocument,
    toHaveClass,
} from '@testing-library/jest-dom/matchers'

expect.extend({toBeInTheDocument, toHaveClass})

const renderComponent = (state = {}) => {
    const store = configureStore(state);

    return render(
        <Provider store={store}>
            <Home />
        </Provider>,
        {
            queries: {...queries, ...customQueries},
        }
    );
};

describe('Home', () => {
    describe('Rendering', () => {
        it('should render text area correctly', () => {
            const {getByName} = renderComponent();
            expect(getByName('snippet')).toBeInTheDocument();
        });

        it('should render save button correctly', () => {
            const {getByName} = renderComponent();
            expect(getByName('save')).toBeInTheDocument();
        });
    });
});
