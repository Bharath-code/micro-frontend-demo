import React, { useState } from "react";
import "./counter.scss";
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount(count + 1);
  };
  return (
    <div className="p-5 rounded-xl border-blue-500 m-5 jio">
      <div>Counter: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
