import "./MyButton.css";

const MyButton = ({ count, onClick }) => {
  return (
    <>
      <button onClick={onClick}>Count: {count}</button>
    </>
  );
};

export default MyButton;
