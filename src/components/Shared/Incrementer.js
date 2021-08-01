import "./Incrementer.scss";
import { useSelector, useDispatch } from "react-redux";
import { increaseItems, decreaseItems } from "../../store/items";

const Incrementer = () => {
  const { count } = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  return (
    <div className="incrementer-container">
      <div className="minus">
        <button onClick={() => dispatch(decreaseItems(count))} type="button">
          -
        </button>
      </div>
      <div className="count">{count}</div>
      <div className="plus">
        <button onClick={() => dispatch(increaseItems(count))} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Incrementer;
