import React, { useReducer } from 'react';

const intialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function UseReducerEx1() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h3>Counter : {state.count}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        Add +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        Add -1
      </button>
    </div>
  );
}
