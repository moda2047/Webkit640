import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 같은 index.js 페이지 내부에 부모-자식 컴포넌트 선언
const Child = (props) => {
  // 부모 컴포넌트의 이벤트 핸들러와 state를 props로 받는다.
  return (
    <>
      <button className="btn btn-warning" onClick={props.onClickHandler}>
        메시지 변경하기
      </button>
      <h3>{props.message}</h3>
    </>
  );
};

const Parent = () => {
  // state와 이벤트 핸들러를 부모 컴포넌트에 선언한다.
  const [message, setMessage] = useState("버튼을 눌러 보세요!");
  const onClickHandler = (data) => {
    setMessage("버튼을 클릭했다.");
  };
  return (
    <>
      <h1 className="jumbotron">Hello world</h1>
      <Child message={message} onClickHandler={onClickHandler} />
    </>
  );
};

const Pro123 = () => {
  return (
    <>
      <div className="col-sm-4">
        <h1>금오공대</h1>
        <p>반갑습니다.</p>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
