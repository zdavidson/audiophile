import "./CheckoutSuccess.scss";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearExistingCart } from "../../store/cart";
import { resetTotalPrice } from "../../store/totalPrice";
import { resetCartCount } from "../../store/cartCount";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  return (
    <div id="checkout-success">
      <Container id="success-container">
        <div id="success-card">
          <h1>Thank you for your order</h1>
          <p>You will receive an email confirmation shortly.</p>
          <div></div>
          <button
            onClick={() => {
              dispatch(clearExistingCart());
              dispatch(resetTotalPrice());
              dispatch(resetCartCount());
            }}
          >
            <Link to="/" id="return-to-site">
              Back to home
            </Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutSuccess;
