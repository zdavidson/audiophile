import "./Summary.scss";
import ItemDisplaySmall from "../Shared/ItemDisplaySmall";
import { useSelector } from "react-redux";

const Summary = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice.totalPrice);
  console.log(cartItems);

  return (
    <div id="summary">
      <h3>Summary</h3>
      <div id="summary-cart-items">
        {cartItems.length > 1 ? (
          cartItems.map((cartItem) => {
            return <ItemDisplaySmall cartItem={cartItem} />;
          })
        ) : (
          <ItemDisplaySmall cartItem={cartItems[0]} />
        )}
      </div>

      <div className="summary-details">
        <div className="summary-headers">
          <h6>Total</h6>
          <p>$$$</p>
        </div>

        <div className="summary-headers">
          <h6>Shipping</h6>
          <p>$$$</p>
        </div>

        <div className="summary-headers">
          <h6>Tax</h6>
          <p>$$$</p>
        </div>

        <div className="summary-headers">
          <h6>Grand Total</h6>
          <p>{totalPrice}</p>
        </div>

        <button>Continue & Pay</button>
      </div>
    </div>
  );
};

export default Summary;
