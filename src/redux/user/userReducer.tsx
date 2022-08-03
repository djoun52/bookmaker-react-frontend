import {PayloadAction} from "@reduxjs/toolkit";

interface  User{
    id: number
    email: string
    pseudo: string
    statue: boolean
}

const INITIAL_STATE:User = {
    id: 8,
    email: "exmple@mail.com",
    pseudo: "Djoun",
    statue: true
}


function userReducer(state = INITIAL_STATE, action:PayloadAction<User> ) {

    switch (action.type) {
        case 'ADDUSER':{
            return{
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                pseudo: action.payload.pseudo,
                statue : true
            }
        }
        case 'REMOVEUSER':{
            return{
                ...state,
                id: action.payload,
                email: action.payload,
                pseudo: action.payload,
                statue: false
            }
        }
    }
    return state;


}

