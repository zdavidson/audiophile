import "./ProductDisplay.scss";
import LargeProductDisplay from "./LargeProductDisplay";
import MediumProductDisplay from "./MediumProductDisplay";
import SmallProductDisplay from "./SmallProductDisplay";

const ProductDisplay = () => {
  return (
    <div id="product-display-home">
      <LargeProductDisplay />
      <MediumProductDisplay />
      <SmallProductDisplay />
    </div>
  );
};

export default ProductDisplay;
