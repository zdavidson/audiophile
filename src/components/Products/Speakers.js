import ProductCard from "./ProductCard";
import data from "../../assets/data/data.json";

const Speakers = () => {
  const speakers = [];
  let newItem = {};
  const otherItems = [];

  data.forEach((item) => {
    if (item.category === "speakers") {
      speakers.push(item);
    }
    return item;
  });

  speakers.map((item) => {
    if (item.new === true) {
      newItem = item;
    } else if (item.new === false) {
      otherItems.push(item);
    }
    return item;
  });

  return (
    <div id="speakers-container">
      <ProductCard item={newItem} />
      <ProductCard item={otherItems[0]} flip={true} />
    </div>
  );
};

export default Speakers;
