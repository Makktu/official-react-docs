// import { useState } from "react";
// import DayOne from "./dayone/DayOne";
// import DayTwo from "./daytwo/DayTwo";
// import "./App.css";

// const App = () => {
//   // !
//   const [count, setCount] = useState(1);

//   const handleClick = () => {
//     let enteredNumber = prompt("Enter number: ");
//     if (!enteredNumber) handleClick();
//     setCount(enteredNumber);
//   };

//   return (
//     <>
//       <DayOne />
//       <DayTwo count={count} onPress={handleClick} />
//     </>
//   );
// };

// export default App;

// function Avatar({ person, style }) {
//   return (
//     <img
//       name={person.name}
//       imageId={person.imageId}
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       style={style}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
//       style={{ height: "500px", width: "500px", borderRadius: "500px" }}
//     />
//   );
// }

import People from "./People";

const App = () => {
  return <People />;
};

export default App;
