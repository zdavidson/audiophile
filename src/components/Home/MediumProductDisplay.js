import "./MediumProductDisplay.scss";
import { Link } from "react-router-dom";

const MediumProductDisplay = () => {
  return (
    <div id="medium-product-home">
      <div id="medium-product-text">
        <h2>ZX7 Speaker</h2>
        <Link to="/speakers/zx7-speaker" target="_top">
          <button>See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default MediumProductDisplay;
