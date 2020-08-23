import {expectSaga} from 'redux-saga-test-plan';
import {clientApi} from '../api';
import {
    addSnippetWorker,
    updateSnippetWorker,
    editSnippetWorker,
} from './sagas';
import {addSnippet, updateSnippet, editSnippet} from './actions';

jest.mock('../api');

const action = {
    payload: {
        values: {
            snippet: 'this is a text',
        },
    },
};


const error = {
    message: 'error message',
};

describe('Snippet Sagas', () => {
    describe.each([
        [addSnippetWorker, clientApi.addSnippet, addSnippet],
        [updateSnippetWorker, clientApi.updateSnippet, updateSnippet],
        [editSnippetWorker, clientApi.editSnippet, editSnippet],
    ])('%p', (worker, api, routine) => {
        it(`should call ${api.name} with the correct arguments`, async () => {
            await expectSaga(worker, action).run();

            expect(api).toHaveBeenCalledWith(action.payload);
        });

        it(`should dispatch success when the api call is successful`, async () => {
            api.mockResolvedValueOnce('success');

            await expectSaga(worker, action)
                .put(routine.request())
                .put(routine.success('success'))
                .put(routine.fulfill())
                .run();
        });

        it('should dispatch failure when there is an error', async () => {
            api.mockRejectedValueOnce(error);

            await expectSaga(worker, action)
                .put(routine.request())
                .put(routine.failure({error}))
                .put(routine.fulfill())
                .run();
        });
    });
});
