import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleRes = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleInc}>Incre</button>
      <button onClick={handleDec}>Dect</button>
      <button onClick={handleRes}>Res</button>
    </div>

    // <div>
    //   <h1>Counter : {count}</h1>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     Increment
    //   </button>
    //   <button
    //     onClick={() => {
    //       setCount(count - 1);
    //     }}
    //   >
    //     Decrement
    //   </button>
    //   <button
    //     onClick={() => {
    //       setCount(0);
    //     }}
    //   >
    //     Reset
    //   </button>
    // </div>
  );
};

export default Counter;
