export const SET_NAME = 'SET_NAME'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_DOB = 'SET_DOB'
export const SET_JOBROLE = 'SET_JOBROLE'

export const INITIAL_STATE = {
    // signingUpUser: {
    //     name: '',
    //     email: '',
    //     jobRole: '',
    //     dob: '',
    //     password: ''
    // },
    name: '',
    email: '',
    password: '',
    dob: '',
    jobRole: ''

}

const SignUpReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    console.log('payload', payload);

    switch (type) {
        case SET_NAME:
            return {
                ...state,
                name: { ...state.name, ...payload }
            };
        case SET_EMAIL:
            return {
                ...state,
                email: { ...state.email, ...payload }
            };
        case SET_PASSWORD:
            return {
                ...state,
                email: { ...state.password, ...payload }
            };
        case SET_DOB:
            return {
                ...state,
                email: { ...state.dob, ...payload }
            };
        case SET_JOBROLE:
            return {
                ...state,
                email: { ...state.jobRole, ...payload }
            };
        default:
            break;
    }

}

export default SignUpReducer;