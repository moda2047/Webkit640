// App.js

import React, { useEffect } from "react";
import { Switch, Route, Router, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./actions/todoActions";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>할 일 목록</h1>
      <Routes>
        <Route exact path="/" element={<TodoList />}></Route>
        <Route path="/add" element={<AddTodoForm />}></Route>
      </Routes>
    </div>
  );
};

export default App;
