import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handel = () => {
    if (count <= 4) {
      setCount(count + 1);
    } else {
      setCount((count = 4));
    }
  };
  const change = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      setCount((count = 0));
    }
  };
  const zero = () => {
    setCount(count * 0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count: {count}</h2>
        <div className="card__btns">
          <button onClick={handel} className="btn card__btn">
            +
          </button>
          <button onClick={change} className="btn card__btn">
            -
          </button>
          <button onClick={zero} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
