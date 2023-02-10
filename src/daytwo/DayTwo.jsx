import { useState } from "react";
import Profile from "./Profile";

const DayTwo = ({ count, onPress }) => {
  return (
    <>
      <section>
        <h1>Amazing Writers</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
      <button onClick={onPress}>{count}</button>
    </>
  );
};

export default DayTwo;
