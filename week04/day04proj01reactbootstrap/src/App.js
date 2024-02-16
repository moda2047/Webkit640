import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";

const App = () => {
  const [items, setItems] = useState([
    { id: "0", title: "ㅎㅇㅎㅇ1", done: true },
    { id: "1", title: "ㅎㅇㅎㅇ2", done: false },
    { id: "2", title: "ㅎㅇㅎㅇ3", done: false },
    { id: "3", title: "ㅎㅇㅎㅇ4", done: true },
  ]);

  let todoItems = items.map((item) => {
    return <Todo item={item} key={item.id} />;
  });

  return (
    <Paper className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <List>{todoItems}</List>
    </Paper>
  );
};

export default App;
