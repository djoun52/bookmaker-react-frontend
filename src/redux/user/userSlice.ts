import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface initUser {
    id: number | null
    email: string | null | String
    pseudo: string | null | String
    status: boolean
}


// Define the initial state using that type
const initialState:initUser  = {
    id: null,
    email: null,
    pseudo: null,
    status: true
}

export const UserSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {
            state = {
                id: action.payload.id,
                email: action.payload.email,
                pseudo: action.payload.pseudo,
                status: true
            }
        },
        removeUser: (state) => {
            state = {
                id: null,
                email: null,
                pseudo: null,
                status: false
            }
        },
    },
})

export const {addUser, removeUser} = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default UserSlice.reducer