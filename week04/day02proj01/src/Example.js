import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  useEffect(() => {
    console.log("Component update");
  }, [count]);
  const onClickHandler = (e) => {
    setCount(count + 1);
  };
  return (
    <>
      <h3>Count Example</h3>
      <p>Count: {count}</p>
      <button onClick={onClickHandler}>증가하기</button>
    </>
  );
}

export default Example;
