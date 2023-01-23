import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Simple example:</h3>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span style={{ padding: `1rem` }}>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
};
export default UseState;
