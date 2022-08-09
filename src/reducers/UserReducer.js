export const SIGN_IN ='SIGN_IN'
export const SIGN_UP ='SIGN_UP'
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS'


export const initialUserState = {
    users: [],
    loggedInUser: [],
}


const UserReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case SIGN_UP:
            return {
                ...state,
                users: [...state.users, payload.user]
            }
        case SIGN_IN:
            return {
                ...state,
                loggedInUser: payload.loggedInUser,
            }
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: payload.users
            }

        default:
            throw new Error('No case for type')
    }

}

export default UserReducer;
