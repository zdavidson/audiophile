import "./Checkout.scss";
import Container from "react-bootstrap/Container";
// import Summary from "./Summary";

const Checkout = () => {
  return (
    <div id="checkout-bg">
      <Container id="checkout-container">
        <div id="checkout">
          <h2>Checkout</h2>
          <form>
            <h3>Billing Details</h3>
            <div id="billing-details">
              <div>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Alexei Ward"></input>
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input name="email" placeholder="alexei@mail.com"></input>
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input name="phone" placeholder="+1 202-555-0136"></input>
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
                ></input>
              </div>
              <div>
                <label htmlFor="zip-code">Zip Code</label>
                <input name="zip-code" placeholder="10001"></input>
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input name="city" placeholder="New York"></input>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input name="country" placeholder="United States"></input>
              </div>
            </div>
          </form>
        </div>

        {/* <Summary /> */}
      </Container>
    </div>
  );
};

export default Checkout;
