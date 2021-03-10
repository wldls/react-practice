import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  // const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncreate = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    dispatch({ type: "INCREMENT" });
  };
  const onDecreate = () => {
    // setNumber((prevNumber) => prevNumber - 1);
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncreate}>+1</button>
      <button onClick={onDecreate}>-1</button>
    </div>
  );
};

export default Counter;
