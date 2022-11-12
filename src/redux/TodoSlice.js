import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },

  reducers: {
    addTodos(state, { payload }) {
      state.todos = [...state.todos, payload];
    },
    removeTodos(state, { payload }) {
      console.log(payload);
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
