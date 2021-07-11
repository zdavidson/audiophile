import NewProductCard from "./NewProductCard";
import data from "../../assets/data/data.json";

const Headphones = () => {
  const headphones = [];
  let newItem = {};

  data.forEach((item) => {
    if (item.category === "headphones") {
      headphones.push(item);
    }
  });

  headphones.map((item) => {
    if (item.new === true) {
      newItem = item;
      console.log(newItem);
    }
  });

  return (
    <div id="headphones-container">
      <NewProductCard item={newItem} />
    </div>
  );
};

export default Headphones;
