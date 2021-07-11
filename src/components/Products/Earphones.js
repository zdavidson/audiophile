import ProductCard from "./ProductCard";
import data from "../../assets/data/data.json";

const Earphones = () => {
  const earphones = [];
  let newItem = {};

  data.forEach((item) => {
    if (item.category === "earphones") {
      earphones.push(item);
    }
  });

  earphones.map((item) => {
    if (item.new === true) {
      newItem = item;
    }
    return product;
  });

  return (
    <div id="earphones-container">
      <ProductCard item={newItem} />
    </div>
  );
};

export default Earphones;
