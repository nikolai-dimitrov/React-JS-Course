import { useState } from "react";
export default function Counter(props) {
  let [count, setCount] = useState(0);
  const incrementClickHandler = () => {
    setCount((oldValue) => oldValue + 1);
  };

  const clearCounterHandler = (event) => {
    console.log(event.target.parentElement);
    return setCount(0);
  };
  
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementClickHandler}>+</button>
      <button onClick={clearCounterHandler}>Clear</button>
    </div>
  );
}
