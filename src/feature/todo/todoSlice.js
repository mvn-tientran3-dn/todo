import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'counter',
    initialState: {
        todo: JSON.parse(localStorage.getItem('todoList')) ?? [],
        itemShow: 0,
        loggedIn: localStorage.getItem('loggedIn') ?? '',
    },
    reducers: {
        add: (state, action) => {
            let listTodo = state.todo;
            let item = {...action.payload};

            state.todo = [...listTodo, item];
            localStorage.setItem('todoList', JSON.stringify(state.todo));
        },
        update: (state, action) => {
            let listTodo = state.todo;
            let index = listTodo.findIndex((listTodo => listTodo.id === action.payload.id));
            let newTodo = [...listTodo];

            newTodo[index].name = action.payload.name;
            newTodo[index].isUpdate = false;
            state.todo = newTodo;
        },
        deleteAction: (state, action) => {
            state.todo  = [...state.todo].filter(todo => todo.id !== action.payload);
        },
        show: (state, action) => {
            state.itemShow = action.payload;
        },
        edit: (state, action) => {
            state.todo = action.payload;
        },
        login: (state, action) => {
            localStorage.setItem('loggedIn', action.payload);
            state.loggedIn = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('todoList');
            state.loggedIn = '';
        }
    },
});

// Action creators are generated for each case reducer function
export const { add, show, update, deleteAction, edit, login, logout } = todoSlice.actions;

export default todoSlice.reducer
