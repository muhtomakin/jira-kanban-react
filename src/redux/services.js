import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
        return res.data;
    }
);

export const addTodosAsync = createAsyncThunk(
    'todos/addTodosAsync',
    async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);
        return res.data;
    }
);

export const changeSituationTodosAsync = createAsyncThunk(
    'todos/changeSituationTodosAsync',
    async ({id, situation, data}) => {
        const res = await axios.patch(
            `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}/${situation}`,
            data,
        );
        return res.data;
    }
);

export const removeTodosAsync = createAsyncThunk(
    'todos/removeTodosAsync',
    async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`);
        return id;
    }
);

export const clearTodosAsync = createAsyncThunk(
    'todos/clearTodosAsync',
    async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/clear`);
        return res.data;
    }
);