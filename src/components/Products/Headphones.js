import ProductCard from "./ProductCard";
import data from "../../assets/data/data.json";

const Headphones = () => {
  const headphones = [];
  let newItem = {};
  const otherItems = [];

  data.forEach((item) => {
    if (item.category === "headphones") {
      headphones.push(item);
    }
  });

  headphones.map((item) => {
    if (item.new === true) {
      newItem = item;
    } else if (item.new === false) {
      otherItems.push(item);
    }
  });

  return (
    <div id="headphones-container">
      <ProductCard item={newItem} />
      <ProductCard item={otherItems[1]} flip={true} />
      <ProductCard item={otherItems[0]} />
    </div>
  );
};

export default Headphones;
