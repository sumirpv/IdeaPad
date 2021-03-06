

const initailState = {
    title: '',
    idea: ''
};

export default (state = initailState, action) => {
    switch (action.type) {
        case 'IDEA_INPUT_CHANGE':
            return { ...state, [action.payload.field]: action.payload.value };

        case 'NEW_IDEA':
            return initailState;

        case 'IDEA_UPDATE':
            return initailState;

        case 'IDEA_DELETE':
            return initailState;

        default:
            return state;
    }
}