import "./CartView.scss";
import Cart from "./Cart";
import Container from "react-bootstrap/Container";

const CartView = ({ cartItems }) => {
  return (
    <div id="cart-view">
      <Container className="cart-container">
        <Cart cartItems={cartItems} />
      </Container>
    </div>
  );
};

export default CartView;
