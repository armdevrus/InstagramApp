import {createSlice} from "@reduxjs/toolkit";

export const loggedInUserSlice = createSlice({
    name: 'loggedInUser',
    initialState: {
        value: '',
    },
    reducers: {
        addLoggedInUser: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {
    addLoggedInUser
} = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;