import { Link } from "react-router-dom";
import "./ProductCategories.scss";

const ProductCategories = () => {
  return (
    <div id="product-categories">
      <div className="category">
        <img
          className="category-image"
          src="./assets/shared/image-headphones.png"
          alt="headphones"
        />

        <h4 className="category-title">Headphones</h4>
        <Link to="/headphones" className="category-link" target="_top">
          Shop
        </Link>
        <div className="category-bg"></div>
      </div>
      <div className="category">
        <img
          className="category-image"
          src="./assets/shared/image-speakers.png"
          alt="headphones"
        />
        <h4 className="category-title">Speakers</h4>
        <Link to="/speakers" className="category-link" target="_top">
          Shop
        </Link>
        <div className="category-bg"></div>
      </div>
      <div className="category">
        <img
          className="category-image"
          src="./assets/shared/image-earphones.png"
          alt="headphones"
        />
        <h4 className="category-title">Earphones</h4>
        <Link to="/earphones" className="category-link" target="_top">
          Shop
        </Link>
        <div className="category-bg"></div>
      </div>
    </div>
  );
};

export default ProductCategories;
