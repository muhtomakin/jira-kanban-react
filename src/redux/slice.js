import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeStep: 1,
    },
    reducers: {
        changeActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
    },
    extraReducers: {}
});

export const {  
    changeActiveStep,
} = todosSlice.actions;
export default todosSlice.reducer;