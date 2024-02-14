import "./App.css";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [count, setCount] = useState(5);
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    { no: 1, title: "치맥 하기", done: false },
    { no: 2, title: "방 청소 하기", done: false },
    { no: 3, title: "명상 하기", done: true },
    { no: 4, title: "착한 일 하기", done: false },
  ]);
  //체크박스
  const checkHandler = (todo) => {
    console.log(todo);
    const updatedTodoList = todoList.map((item) => {
      if (item.no === todo.no) {
        return { ...item, done: !item.done }; // 반대의 상태로 변경
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  // 값 추가할때 value 값 설정
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  //추가 버튼 클릭
  const addHandler = () => {
    const todo = { no: count, title: value, done: false };
    setTodoList([...todoList, todo]);
    setCount(count + 1);
    setValue("");
  };
  //삭제버튼
  const deleteHandler = (todo) => {
    const deleteTodoList = todoList.filter((item) => item.no !== todo.no);
    setTodoList(deleteTodoList);
  };
  //수정버튼
  const updateHandler = (todo) => {
    const newTitle = window.prompt("수정할 내용을 입력하세요", todo.title);
    if (newTitle !== null) {
      const updatedTodoList = todoList.map((item) => {
        if (item.no === todo.no) {
          return { ...item, title: newTitle }; // 값 업데이트
        }
        return item;
      });
      setTodoList(updatedTodoList);
    }
  };
  //엔터버튼으로 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (value === "") {
        return;
      }
      addHandler();
    }
  };
  return (
    <div>
      <div className="App-header">
        <h1>Todo List</h1>
      </div>
      <main>
        <h2>Welcome</h2>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={addHandler}>추가</button>
        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.no}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onClick={() => checkHandler(todo)}
                ></input>
                <label className={todo.done ? "done" : ""}>{todo.title}</label>
                <button onClick={() => updateHandler(todo)}>수정</button>
                <button onClick={() => deleteHandler(todo)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>(c) Comstudy school. since 2024</footer>
    </div>
  );
};

const AppHomework = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default AppHomework;
