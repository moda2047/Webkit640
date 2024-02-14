// reducers/todoReducer.js

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_TODOS_ERROR":
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        error: null,
      };
    case "ADD_TODO_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "TOGGLE_TODO_SUCCESS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        error: null,
      };
    case "TOGGLE_TODO_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        error: null,
      };
    case "DELETE_TODO_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
