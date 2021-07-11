import "./SmallProductDisplay.scss";
import { Link } from "react-router-dom";

const SmallProductDisplay = () => {
  return (
    <div id="small-product-home">
      <div id="small-product-image">
        <img src="./assets/home/desktop/image-earphones-yx1.jpg" alt="" />
      </div>
      <div id="small-product-text">
        <h2>YX1 Earphones</h2>
        <Link to="/earphones/yx1-earphones" target="_top">
          ><button>See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default SmallProductDisplay;
