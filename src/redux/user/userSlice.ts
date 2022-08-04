import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {ADD_USER, REMOVE_USER} from "../actionTypes";


// Define the initial state using that type
const initialState: UserState = {
    id: 8,
    email: "exmple@mail.com",
    pseudo: "Djoun",
    status: true
}

export const UserSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        ADD_USER: (state, action: PayloadAction<UserState>) => {
            state = {
                id: action.payload.id,
                email: action.payload.email,
                pseudo: action.payload.pseudo,
                status: true
            }
        },
        REMOVE_USER: (state) => {
            state = {
                id: null,
                email: null,
                pseudo: null,
                status: false
            }
        },

    },
})

export const {ADD_USER, REMOVE_USER} = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.value

export default UserSlice.reducer