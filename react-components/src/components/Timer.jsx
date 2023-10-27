import { useState } from "react";
export default function Timer(props) {
  let [time, setTime] = useState(props.startTime); // Pass initial state (0, true...);

  //   let [time, setTime] = useState(() => {
  // const result = someFunc();
  //Or some logic here...
  // result = 2 + 3 ...
  // return result;
  //   });

  //Don't use setTimeout -> useEffect
  setTimeout(() => {
    setTime(time + 1); // Change state build in function. State is immutable we should use function to change state.
    console.log(`Time is ${time}!`);
  }, 1000);

  return (
    <div>
      <h3>Timer</h3>
      <p>{time}</p>
    </div>
  );
}
