import {expectSaga} from 'redux-saga-test-plan';
import {clientApi} from '../api';
import {
    addSnippetWorker,
} from './sagas';
import {addSnippet, updateSnippet, editSnippet} from './actions';

jest.mock('../api');

const action = {
    payload: {
        values: {
            snippet: 'this is a text',
            hash: 'somehash'
        },
    },
};

describe('Snippet Sagas', () => {
    describe.each([
        [addSnippetWorker, clientApi.addSnippet, addSnippet],
    ])('%p', (worker, api, routine) => {
        it(`should call ${api.name} with the correct arguments`, async () => {
            await expectSaga(worker, action).run();

            expect(api).toHaveBeenCalledWith('this is a text');
        });

        it(`should dispatch success when the api call is successful`, async () => {
            api.mockResolvedValueOnce('success');

            await expectSaga(worker, action)
                .put(routine.request())
                .put(routine.success('success'))
                .put(routine.fulfill())
                .run();
        });
    });
});
