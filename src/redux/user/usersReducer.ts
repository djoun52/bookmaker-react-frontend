import {PayloadAction} from "@reduxjs/toolkit";
import {ADD_USER, REMOVE_USER} from "../actionTypes";



const initialState:UserState = {
    id: 8,
    email: "exmple@mail.com",
    pseudo: "Djoun",
    status: true
}


//export function usersReducer(state = INITIAL_STATE, action:PayloadAction<UserState> ) {
    const usersReducer = (
        state: UserState = initialState,
        action: UserAction
    ):{ id: number | null; pseudo: string | null;  email: string | null; status: boolean } => {
    switch (action.type) {
        case ADD_USER:{

            const newUser: UserState = {
                id: action.user.id,
                email: action.user.email,
                pseudo: action.user.pseudo,
                status : true
            }
            return{
                ...state,
                user: newUser
            }
        }
        case REMOVE_USER:{
            const newUser: UserState = {
                id: null,
                email: null,
                pseudo: null,
                status: false
            }
            return{
                ...state,
                user: newUser

            }
        }
    }
    return state;


}

