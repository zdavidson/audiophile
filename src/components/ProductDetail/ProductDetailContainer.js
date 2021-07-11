import Container from "react-bootstrap/Container";
import ProductCard from "../Products/ProductCard";
import "./ProductDetailContainer.scss";
import data from "../../assets/data/data.json";

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
      <ProductCard item={item} detail={true} />
      <div className="product-info">
        <div id="features">
          <h3>Features</h3>
          <p>{item.features}</p>
        </div>
        <div id="box-contents">
          <h3>In The Box</h3>
          <ul>
            {item.includes.map((accessory) => {
              return (
                <li>
                  <span>{accessory.quantity}x </span>
                  {accessory.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailContainer;