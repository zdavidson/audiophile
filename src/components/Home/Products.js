import "./Products.scss";
import Container from "react-bootstrap/Container";
import ProductCategories from "../Shared/ProductCategories";
import ProductDisplay from "./ProductDisplay";

const Products = () => {
  return (
    <div id="products-home">
      <Container>
        <ProductCategories />
        <ProductDisplay />
      </Container>
    </div>
  );
};

export default Products;
