import NewProductCard from "./NewProductCard";
import data from "../../assets/data/data.json";

const Speakers = () => {
  const speakers = [];
  let newItem = {};

  data.forEach((item) => {
    if (item.category === "speakers") {
      speakers.push(item);
    }
  });

  speakers.map((item) => {
    if (item.new === true) {
      newItem = item;
      console.log(newItem);
    }
  });

  return (
    <div id="speakers-container">
      <NewProductCard item={newItem} />
    </div>
  );
};

export default Speakers;
