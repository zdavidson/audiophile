import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-bg">
      <div className="cart-headers">
        <h6>Cart</h6>
        <p>Remove All</p>
      </div>

      <div className="cart-headers">
        <h6>Total</h6>
        <p>$$$</p>
      </div>
      <Link to="/checkout" target="_top">
        <button>Checkout</button>
      </Link>
    </div>
  );
};
export default Cart;
