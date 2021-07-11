import NewProductCard from "./NewProductCard";
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
      console.log(newItem);
    }
  });

  return (
    <div id="earphones-container">
      <NewProductCard item={newItem} />
    </div>
  );
};

export default Earphones;
