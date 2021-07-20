import "./Cart.scss";
import Incrementer from "../Incrementer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const { items } = useSelector((state) => state.items);

  return (
    <div className="cart-bg">
      <div className="cart-headers">
        <h6>Cart</h6>
        <p>Remove All</p>
      </div>
      <div className="cart-items">
        {/* {items.map((item) => {
          return (
            <div>
              <div>{item.image.desktop}</div>
              <div>
                <h6>{item.name}</h6>
                <p>{item.price}</p>
              </div>
              <Incrementer />
            </div>
          );
        })} */}

        <div>
          <div>{/* <img src={items.image.desktop} alt="" /> */}[PIC]</div>
          <div>
            <h6>{items.name}</h6>
            <p>${items.price}.00</p>
          </div>
          <Incrementer />
        </div>
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
