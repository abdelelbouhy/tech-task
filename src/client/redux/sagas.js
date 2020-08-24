import {put, takeLatest, call} from 'redux-saga/effects';
import {clientApi} from '../api';
import {addSnippet, updateSnippet, editSnippet} from './actions';

export const addSnippetWorker = function*({payload: {values: {snippet}}}) {
    let result;

    yield put(addSnippet.request());

    try {
        result = yield call(clientApi.addSnippet, snippet);
    } catch (error) {
        yield put(addSnippet.failure({error}));
    }

    if (result) {
        yield put(addSnippet.success(result));
    }

    yield put(addSnippet.fulfill());
};

export const editSnippetWorker = function*({payload}) {
    yield put(editSnippet.request());
    yield put(updateSnippet.fulfill());
};

export const watchAddSnippet = function*() {
    yield takeLatest(addSnippet.TRIGGER, addSnippetWorker);
};

export const watchEditSnippet = function*() {
    yield takeLatest(editSnippet.TRIGGER, editSnippetWorker);
};

export default [
    watchAddSnippet,
    watchEditSnippet,
];
