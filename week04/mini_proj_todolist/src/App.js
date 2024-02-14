// App.js

import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <TodoList />
        </Route>
        <Route path="/add">
          <AddTodoForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
