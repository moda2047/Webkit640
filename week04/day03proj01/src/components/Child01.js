import { useSelector } from "react-redux";

export const Child01 = () => {
  const weight = useSelector(function (state) {
    return state.체중;
  });
  const key = useSelector(function (state) {
    return state.키;
  });
  return (
    <div>
      <p>몸무게 : {weight}</p>
      <p>키 : {key}</p>
    </div>
  );
};
