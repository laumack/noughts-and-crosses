import { useState } from "react";
import "../styles.css";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Game() {
  return (
    <main>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </main>
  );
}
