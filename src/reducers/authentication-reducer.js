

const initailState = {
    email: '',
    password: '',
    user: {},
    error: '', 
    loading: false
};

export default (state = initailState, action) => {
    switch (action.type) {
        case 'AUTH_INPUT_CHANGE':
            return { ...state, [action.payload.field]: action.payload.value };

        case 'LOGIN_SUCESS':
            console.log("Sucess");
            //console.log(action.payload);
            return { ...state, user: action.payload, loading: false };

        case 'LOADING':
            return {...state, loading: true}
        case 'LOGIN _FAILURE':
            console.log("Failure");

            return { ...state, error: "AUTHENTICATION FAILED", loading: false };

        default:
            return state;
    }
}