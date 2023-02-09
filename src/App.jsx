import { useState } from "react";
import DayOne from "./dayone/DayOne";
import DayTwo from "./daytwo/Gallery";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    let enteredNumber = prompt("Enter number: ");
    if (!enteredNumber) handleClick();
    setCount(enteredNumber);
  };
  return (
    <>
      <DayOne />
      <DayTwo count={count} onPress={handleClick} />
    </>
  );
};

export default App;
