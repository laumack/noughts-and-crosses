import "../styles.css";

function Square({ value }) {
  return (
    <button id="square" type="button">
      {value}
    </button>
  );
}

export default function Game() {
  return (
    <main>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </main>
  );
}
