import { useDispatch } from "react-redux";

export const Child03 = () => {
  const dispatch = useDispatch();

  const h1 = () => {
    dispatch({ type: "키증가" });
  };
  const h2 = () => {
    dispatch({ type: "키감소" });
  };
  return (
    <div>
      <button onClick={h1}>키 증가</button>
      <button onClick={h2}>키 감소</button>
    </div>
  );
};
