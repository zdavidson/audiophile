import "./Incrementer.scss";
import { useState } from "react";

const Incrementer = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="incrementer-container">
      <div className="minus">
        <button onClick={() => setCount(count - 1)} type="button">
          -
        </button>
      </div>
      <div className="count">{count}</div>
      <div className="plus">
        <button onClick={() => setCount(count + 1)} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Incrementer;
