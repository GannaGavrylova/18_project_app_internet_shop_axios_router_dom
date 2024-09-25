import korsina from "../../assets/icons/korsina.svg";

function CartItem({ id, name, price, image }) {
  return (
    <div>
      <img src={image} alt="product_image" />
      <h3>{name}</h3>
      <p>Цена</p>
      <p>{price}180 E</p>
      <img src={korsina} alt="remove_icon" />
    </div>
  );
}

export default CartItem;
