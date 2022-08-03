import { createContext, useReducer } from "react";


export const UserContext = createContext();

export const UserProvider = props => {

    const [state, dispatch] = useReducer();

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {props.children}
        </UserContext.Provider>
    )
}