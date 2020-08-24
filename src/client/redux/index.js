const snippet = (state = {}, action) => {

    switch (action.type) {
        case 'OP/ADD_SNIPPET/SUCCESS':
            return {
                ...state,
                ...action.payload.data,
                isEditing: false,
            };
        case 'OP/EDIT_SNIPPET/TRIGGER':
            return {...state, isEditing: true};
        case 'OP/ADD_SNIPPET/UPDATE':
            return {...state}
        default:
            return state;
    }
};

const reducers = {
    snippet,
};

export default reducers;
