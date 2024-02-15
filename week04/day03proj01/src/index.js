import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

const currentState = { 체중: 95, 키: 180 };

const reducer = (state = currentState, action) => {
  if (action.type === "체중증가") {
    state.체중++;
  }
  if (action.type === "체중감소") {
    state.체중--;
  }
  if (action.type === "키증가") {
    state.키++;
  }
  if (action.type === "키감소") {
    state.키--;
  }
  return { ...state };
};

let store = createStore(reducer);

root.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
);
