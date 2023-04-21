import React, { useState, useReducer } from 'react'
import reducer from "./reducer";

const initialState = { count: 0 };
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <button onClick={() => setToggle(!toggle)} >
          Toggle hiden
      </button>
      {toggle && (
        <div>
          <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
          <p>{state.count}</p>
          <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </div>
      )}
    </>
  );
};

export default App;