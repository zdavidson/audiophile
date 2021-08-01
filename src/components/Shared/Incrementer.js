import "./Incrementer.scss";
import { useSelector, useDispatch } from "react-redux";
import { increaseItems, decreaseItems } from "../../store/items";
import { addToGlobalCount } from "../../store/globalCount";

const Incrementer = ({ isGlobal }) => {
  const { itemCount } = useSelector((state) => state.items.items);
  const { globalCount } = useSelector((state) => state.globalCount);
  const dispatch = useDispatch();

  return (
    <div className="incrementer-container">
      <div className="minus">
        <button
          onClick={() => dispatch(decreaseItems(itemCount))}
          type="button"
        >
          -
        </button>
      </div>
      <div className="count">{globalCount}</div>
      <div className="plus">
        <button
          onClick={() => {
            dispatch(addToGlobalCount(globalCount));
            dispatch(increaseItems(itemCount));
          }}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Incrementer;
