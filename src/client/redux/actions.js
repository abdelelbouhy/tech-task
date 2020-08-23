import {createRoutine, bindRoutineToReduxForm} from 'redux-saga-routines';

export const addSnippet = createRoutine('OP/ADD_SNIPPET');
export const editSnippet = createRoutine('OP/EDIT_SNIPPET');
export const updateSnippet = createRoutine('OP/UPDATE_SNIPPET');

export const submitSnippetHandler = bindRoutineToReduxForm(
    addSnippet
);
