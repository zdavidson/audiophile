import "./Summary.scss";

const Summary = () => {
  return (
    <div id="summary">
      <h3>Summary</h3>

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
          <p>$$$</p>
        </div>

        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Summary;
