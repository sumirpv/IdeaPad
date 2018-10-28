

const initailState = {
    email: '',
    password:''
};

export default( state = initailState, action) =>{
    switch(action.type){
        case 'AUTH_INPUT_CHANGE':
        return { ...state, [action.payload.field]: action.payload.value};

        default:
        return state;
    }
}