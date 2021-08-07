import "./Checkout.scss";
import Container from "react-bootstrap/Container";
import Summary from "./Summary";
import CheckoutSuccess from "./CheckoutSuccess";
import { useState } from "react";

const Checkout = () => {
  const [viewSuccessScreen, setViewSuccessScreen] = useState(false);
  return (
    <div id="checkout-bg">
      {viewSuccessScreen && <CheckoutSuccess />}

      <Container id="checkout-container">
        <div id="checkout">
          <h2>Checkout</h2>
          <form>
            <h3>Billing Details</h3>
            <div id="billing-details">
              <div>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Alexei Ward" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input name="email" placeholder="alexei@mail.com" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input name="phone" placeholder="+1 202-555-0136" />
              </div>
            </div>

            <h3 id="header-shipping">Shipping Info</h3>
            <div id="shipping-info">
              <div>
                <label htmlFor="address">Address</label>
                <input
                  id="address-input"
                  name="address"
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <div>
                <label htmlFor="zip-code">Zip Code</label>
                <input name="zip-code" placeholder="10001" />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input name="city" placeholder="New York" />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input name="country" placeholder="United States" />
              </div>
            </div>

            <h3 id="header-payment">Payment Details</h3>
            <div id="payment-info">
              <div id="payment">
                <label htmlFor="payment-method" id="payment-method-label">
                  Payment Method
                </label>
                <div id="payment-method">
                  <div>
                    <input
                      className="payment-method-input"
                      name="payment"
                      type="radio"
                      value="e-money"
                    />
                    <label for="e-money">e-Money</label>
                  </div>
                  <div>
                    <input
                      className="payment-method-input"
                      name="payment"
                      type="radio"
                      value="cash"
                    />
                    <label for="cash">Cash on Delivery</label>
                  </div>
                </div>
              </div>
              <div id="e-money-info">
                <div className="e-money-param">
                  <label htmlFor="e-money-number">e-Money Number</label>
                  <input name="e-money-number" placeholder="238521993"></input>
                </div>
                <div className="e-money-param">
                  <label htmlFor="e-money-pin">e-Money PIN</label>
                  <input name="e-money-pin" placeholder="6891"></input>
                </div>
              </div>
            </div>
          </form>
        </div>

        <Summary
          setViewSuccessScreen={setViewSuccessScreen}
          viewSucessScreen={viewSuccessScreen}
        />
      </Container>
    </div>
  );
};

export default Checkout;
