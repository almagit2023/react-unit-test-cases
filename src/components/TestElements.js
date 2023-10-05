import React from "react";

const TestElements = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1 data-testid='counter'>{counter}</h1>
      <h2 data-testid='counter2'>1</h2>
      <button data-testid='button-up' onClick={() => setCounter(counter + 1)}>
        {" "}
        Up
      </button>
      <button
        disabled
        data-testid='button-down'
        onClick={() => setCounter(counter - 1)}>
        Down
      </button>
    </>
  );
};

export default TestElements;