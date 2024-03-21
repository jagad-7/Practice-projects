import React, { useState } from "react";
import "./AddCounter.css";

export default function AddCount() {
  const [counter, setCounter] = useState(0);
  const stock = 10;

  return (
    <>
      <h1>Counter App in ReactJs</h1>
      <div className="Wrapper">
        <button
          className="minus"
          disabled={counter === 0}
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>

        <p className="count">{counter}</p>

        <button
          className="plus"
          disabled={counter === stock}
          onClick={() => {
            if (counter < stock) {
              setCounter(counter + 1);
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
