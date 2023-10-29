import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
export default function Counter(props) {
  let [count, setCount] = useState(0);
  let [clicked, setClicked] = useState(false);
  const incrementClickHandler = () => {
    setCount((oldValue) => oldValue + props.incrementNum);
  };

  const clearCounterHandler = (event) => {
    console.log(event.target.parentElement);
    return setCount(0);
  };

  const isClickedHandler = () => {
    setClicked((oldValue) => {
      console.log(clicked);
      return oldValue == false ? true : false;
    });
  };

  return (
    <div>
      <ButtonPrimary clickHandler={isClickedHandler}>I am button</ButtonPrimary>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementClickHandler}>+</button>
      <button onClick={clearCounterHandler}>Clear</button>
    </div>
  );
}
