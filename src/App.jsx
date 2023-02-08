import { useState } from "react";
import MyButton from "./MyButton";
import "./App.css";

const App = () => {
  // !

  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const products = [
    { title: "Cabbage", id: 1, like: false, magic: true },
    { title: "Garlic", id: 2, like: true, magic: true },
    { title: "Apple", id: 3, like: true, magic: false },
  ];

  return (
    <>
      <div className="paragraphs__default">
        <p>Hello John.</p>
        <p>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                color: product.like ? "yellowgreen" : "orange",
                textDecoration: product.magic ? "underline" : null,
              }}
            >
              {product.title}
            </li>
          ))}
        </p>
        <MyButton count={count} onClick={handleButtonClick} />
        <MyButton count={count} onClick={handleButtonClick} />
        <MyButton count={count} onClick={handleButtonClick} />
        <MyButton count={count} onClick={handleButtonClick} />
      </div>
    </>
  );
};

export default App;
