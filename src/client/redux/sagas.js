import {put, takeLatest} from 'redux-saga/effects';
import {addSnippet, updateSnippet, editSnippet} from './actions';

export const addSnippetWorker = function*({payload}) {

};

export const editSnippetWorker = function*({payload}) {

};

export const updateSnippetWorker = function*({payload}) {

};

export const watchAddSnippet = function*() {
    yield takeLatest(addSnippet.TRIGGER, addSnippetWorker);
};

export const watchUpdateSnippet = function*() {
    yield takeLatest(updateSnippet.TRIGGER, updateSnippetWorker);
};

export const watchEditSnippet = function*() {
    yield takeLatest(editSnippet.TRIGGER, editSnippetWorker);
};

export default [
    watchAddSnippet,
    watchUpdateSnippet,
    watchEditSnippet,
];
