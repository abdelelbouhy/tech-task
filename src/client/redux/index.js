const AddSnippet = (state = {data: []}, action) => {
    switch (action.type) {
        case 'OP/ADD_SNIPPET/TRIGGER':
            return {...state}
        default:
            return state;
    }
};

const editSnippet = (state = {data: {}}, action) => {
    switch (action.type) {
        case 'OP/ADD_SNIPPET/EDIT':
            return {...state}
        default:
            return state;
    }
};

const updateSnippet = (state = {data: {}}, action) => {
    switch (action.type) {
        case 'OP/ADD_SNIPPET/UPDATE':
            return {...state}
        default:
            return state;
    }
};

const reducers = {
    AddSnippet,
    editSnippet,
    updateSnippet,
};

export default reducers;
