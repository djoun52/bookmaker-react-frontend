import {PayloadAction} from "@reduxjs/toolkit";

interface  User{
    id: number | null
    email: string | null
    pseudo: string | null
    status: boolean
}

const INITIAL_STATE:User = {
    id: 8,
    email: "exmple@mail.com",
    pseudo: "Djoun",
    status: true
}


export function usersReducer(state = INITIAL_STATE, action:PayloadAction<User> ) {

    switch (action.type) {
        case 'ADDUSER':{
            return{
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                pseudo: action.payload.pseudo,
                status : true
            }
        }
        case 'REMOVEUSER':{
            return{
                ...state,
                id: null,
                email: null,
                pseudo: null,
                status: false
            }
        }
    }
    return state;


}

