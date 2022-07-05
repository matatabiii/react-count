import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((count) => count + 1);
  };

  const countDown = () => {
    setCount((count) => count - 1);
  };

  const countReset = () => {
    setCount((count) => (count = 0));
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={countDown}>カウント -1</button>
      <button onClick={countReset}>リセット</button>
      <button onClick={countUp}>カウント +1</button>
      <div id="text" style={{ color: count === 10 && "red" }}>
        {count === 10 ? "10だよ" : "10以外だよ"}
      </div>
    </div>
  );
}
