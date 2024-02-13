import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);
  const [inputVal, setInputVal] = useState("");
  return (
    <>
      <h1>Hello world</h1>
      <div>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          type="text"
          value={inputVal}
        />
        <button
          onClick={function (e) {
            setFruits([...fruits, inputVal]);
          }}
        >
          추가하기
        </button>
      </div>
      <div>
        <ul>
          {fruits.map(function (value, index) {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
