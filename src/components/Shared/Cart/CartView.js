import "./CartView.scss";
import Cart from "./Cart";
import Container from "react-bootstrap/Container";

const CartView = ({ isGlobal }) => {
  return (
    <div id="cart-view">
      <Container className="cart-container">
        <Cart />
      </Container>
    </div>
  );
};

export default CartView;
