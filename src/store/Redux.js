import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myVariable: null,
};

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        setMyVariable: (state, action) => {
            state.myVariable = action.payload;
        },
    },
});

export const { setMyVariable } = mySlice.actions;
export default mySlice.reducer;