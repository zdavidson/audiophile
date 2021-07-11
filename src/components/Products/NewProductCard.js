import "./NewProductCard.scss";

const NewProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image.desktop} alt="" />
      <div className="product-text">
        <h3>New Product</h3>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button>See Product</button>
      </div>
    </div>
  );
};

export default NewProductCard;
