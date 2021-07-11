import "./LargeProductDisplay.scss";
import { Link } from "react-router-dom";

const LargeProductDisplay = () => {
  return (
    <div id="large-product-home">
      <div id="large-product-image">
        <img src="./assets/home/desktop/image-speaker-zx9.png" alt="" />
      </div>
      <div id="large-product-text">
        <h2>ZX9 Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/speakers/zx9-speaker" target="_top">
          <button>See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default LargeProductDisplay;
