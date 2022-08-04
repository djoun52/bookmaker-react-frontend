import {ADD_USER, REMOVE_USER} from "./actionTypes";

export function addUser(user: UserState) {
    const action: UserAction = {
        type: ADD_USER,
        user,
    }

    return simulateHttpRequest(action)
}

export function removeUser(user: UserState) {
    const action: UserAction = {
        type: REMOVE_USER,
        user,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: UserAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}