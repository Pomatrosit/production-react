import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div className="count">Counter: {count}</div>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
