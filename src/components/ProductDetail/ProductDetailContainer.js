import Container from "react-bootstrap/Container";
import ProductCard from "../Shared/ProductCard";
import "./ProductDetailContainer.scss";
import data from "../../assets/data/data.json";
import ProductCategories from "../Shared/ProductCategories";
import BestGear from "../Shared/BestGear";
import { Link } from "react-router-dom";

const ProductDetailContainer = (props) => {
  const itemName = props.match.params.name;
  let item = {};

  data.map((product) => {
    if (product.slug === itemName) {
      item = product;
    }
    return product;
  });

  return (
    <Container id="detail-container">
      <a href="/" alt="back">
        Go Back
      </a>
      <ProductCard
        item={item}
        detail={true}
        setCartItems={props.setCartItems}
      />
      <div className="product-info">
        <div id="features">
          <h3>Features</h3>
          {item.features.split("\n\n").map((paragraph) => {
            return <p key={item.id + Math.random()}>{paragraph}</p>;
          })}
        </div>
        <div id="box-contents">
          <h3>In The Box</h3>
          <ul>
            {item.includes.map((accessory) => {
              return (
                <li key={item.id + Math.random()}>
                  <span>{accessory.quantity}x </span>
                  {accessory.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="product-gallery">
        <div id="image-div">
          <img src={item.gallery.first.desktop} alt="" />
          <img src={item.gallery.second.desktop} alt="" />
        </div>
        <img src={item.gallery.third.desktop} alt="" />
      </div>
      <div className="other-products">
        <h3>You May Also Like</h3>
        <div className="product-list">
          {item.others.map((item) => {
            return (
              <div key={Math.random()} className="other-product">
                <img src={item.image.desktop} alt="" />
                <h4>{item.name}</h4>
                <Link to={item.slug} target="_top">
                  <button>See Product</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <ProductCategories />
      <BestGear />
    </Container>
  );
};

export default ProductDetailContainer;
