import { createSlice } from '@reduxjs/toolkit'
import { UserState } from '../redux.types';

const initialState: UserState = {
    users: []
};

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    reducers: { 
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        resetUsers: (state) => {
            return initialState;
        } 
    }
});

export const { addUser, resetUsers } = usersSlice.actions;
