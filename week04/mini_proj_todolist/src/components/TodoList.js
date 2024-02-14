// components/TodoList.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
