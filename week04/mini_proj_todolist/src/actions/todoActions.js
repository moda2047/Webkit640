// actions/todoActions.js

import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://api.example.com/todos");
      const todos = response.data;
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: todos });
    } catch (error) {
      dispatch({ type: "FETCH_TODOS_ERROR", payload: error.message });
    }
  };
};

export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const newTodo = { text, completed: false };
      const response = await axios.post(
        "https://api.example.com/todos",
        newTodo
      );
      const addedTodo = response.data;
      dispatch({ type: "ADD_TODO_SUCCESS", payload: addedTodo });
    } catch (error) {
      dispatch({ type: "ADD_TODO_ERROR", payload: error.message });
    }
  };
};

export const toggleTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.put(`https://api.example.com/todos/${id}/toggle`);
      dispatch({ type: "TOGGLE_TODO_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "TOGGLE_TODO_ERROR", payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://api.example.com/todos/${id}`);
      dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_TODO_ERROR", payload: error.message });
    }
  };
};
