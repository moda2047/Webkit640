import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { app, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  async function getTodoList(db) {
    const todoListCol = collection(db, "car");
    const todoListSnapshot = await getDocs(todoListCol);
    const promiseObj = todoListSnapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });
    return promiseObj;
  }

  const [todoList, setTodoList] = useState([]);
  getTodoList(db).then((result) => {
    setTodoList(result);
  });
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

root.render(<App />);
