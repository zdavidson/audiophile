import "./ProductCard.scss";

const ProductCard = ({ item, flip }) => {
  return (
    <div className="product-card">
      <img src={item.image.desktop} alt="" className={flip ? "flipImg" : ""} />
      <div className={`product-text ${flip ? "flipText" : ""}`}>
        {item.new === true ? <h3>New Product</h3> : <div></div>}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <button>See Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
