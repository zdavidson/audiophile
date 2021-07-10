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
        <a href="/" className="category-link">
          Shop
        </a>
        <div className="category-bg"></div>
      </div>
      <div className="category">
        <img
          className="category-image"
          src="./assets/shared/image-speakers.png"
          alt="headphones"
        />
        <h4 className="category-title">Speakers</h4>
        <a href="/" className="category-link">
          Shop
        </a>
        <div className="category-bg"></div>
      </div>
      <div className="category">
        <img
          className="category-image"
          src="./assets/shared/image-earphones.png"
          alt="headphones"
        />
        <h4 className="category-title">Earphones</h4>
        <a href="/" className="category-link">
          Shop
        </a>
        <div className="category-bg"></div>
      </div>
    </div>
  );
};

export default ProductCategories;
