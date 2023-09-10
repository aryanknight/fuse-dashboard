import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: ["Make Breakfast"],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo!== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const selectTodoList = ({todoList}) => todoList.todos;
export default todoSlice.reducer;
