import "./ItemDisplaySmall.scss";

const ItemDisplaySmall = ({ cartItem, checkout }) => {
  return (
    <div className={`cart-image-title ${checkout ? "summary-item" : ""}`}>
      <img
        className="cart-item-image"
        src={cartItem.item.image.mobile}
        alt="cart-item"
      />
      <div>
        <h6>{cartItem.item.name.split(` Headphones`)}</h6>
        <p>${cartItem.item.price}.00</p>
      </div>
    </div>
  );
};

export default ItemDisplaySmall;
