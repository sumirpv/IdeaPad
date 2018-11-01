

const initailState = {};

export default (state = initailState, action) => {
    switch (action.type) {
        case 'GET_IDEAS':
            return action.payload;

        default:
            return state;
    }
}