import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../components/utils";
import { addTodosAsync, clearTodosAsync, getTodosAsync, removeTodosAsync, changeSituationTodosAsync } from "./services";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeStep: 1,
        addNewTodoLoading: false,
        addNewTodoError: null,
    },
    reducers: {
        changeActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
    },
    extraReducers: {
        [getTodosAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [addTodosAsync.pending]: (state) => {
            state.addNewTodoLoading = true;
        },
        [addTodosAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodoLoading = false;
        },
        [addTodosAsync.rejected]: (state, action) => {
            state.addNewTodoLoading = false;
            state.addNewTodoError = action.error.message;
        },
        [changeSituationTodosAsync.fulfilled]: (state, action) => {
            const { id, situation, item } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items[index].situation = situation;
        },
        [removeTodosAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items.splice(index, 1);
        },
        [clearTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {  
    changeActiveStep,
} = todosSlice.actions;
export default todosSlice.reducer;