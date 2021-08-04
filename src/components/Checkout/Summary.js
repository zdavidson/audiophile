import "./Summary.scss";
import ItemDisplaySmall from "../Shared/ItemDisplaySmall";
import { useSelector } from "react-redux";

const Summary = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice.totalPrice);
  const checkout = true;
  const shippingCost = 40;
  console.log(cartItems);

  return (
    <div id="summary">
      <h3>Summary</h3>
      <div id="summary-cart-items">
        {cartItems.length > 1 ? (
          cartItems.map((cartItem) => {
            return (
              <div className="summary-item">
                <ItemDisplaySmall cartItem={cartItem} checkout={checkout} />{" "}
                <p className="summary-item-count">x{cartItem.itemCount}</p>
              </div>
            );
          })
        ) : (
          <ItemDisplaySmall cartItem={cartItems[0]} />
        )}
      </div>

      <div className="summary-details">
        <div className="summary-headers">
          <h6>Total</h6>
          <p>${totalPrice}.00</p>
        </div>

        <div className="summary-headers">
          <h6>Shipping</h6>
          <p>${shippingCost}.00</p>
        </div>

        <div className="summary-headers">
          <h6>Tax</h6>
          <p>{totalPrice * 1.07}</p>
        </div>

        <div id="grand-total" className="summary-headers">
          <h6>Grand Total</h6>
          <p>${totalPrice * 1.07 + shippingCost}</p>
        </div>

        <button>Continue & Pay</button>
      </div>
    </div>
  );
};

export default Summary;
