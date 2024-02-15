import { useDispatch } from "react-redux";

export const Child02 = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch({ type: "체중증가" });
  };
  const onClickHandler2 = () => {
    dispatch({ type: "체중감소" });
  };
  return (
    <div>
      <button onClick={onClickHandler}>체중 증가</button>
      <button onClick={onClickHandler2}>체중 감소</button>
    </div>
  );
};
