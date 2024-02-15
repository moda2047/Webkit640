import { Child01 } from "./components/Child01";
import { Child02 } from "./components/Child02";
import { Child03 } from "./components/Child03";

export const App = () => {
  return (
    <div>
      <h1>안녕 세계</h1>
      <hr />
      <Child01 />
      <hr />
      <Child02 />
      <hr />
      <Child03 />
    </div>
  );
};
