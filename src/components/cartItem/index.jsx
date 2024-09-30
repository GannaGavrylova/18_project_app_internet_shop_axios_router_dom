import korsina from "../../assets/icons/korsina.svg";
import styles from "./styles.module.css";

function CartItem({
  name,
  price,
  image,
  icon,
  stylesItem,
  handleAdd,
  handleRemove,
  currentPage,
}) {
  console.log("CartItem rendering");
  return (
    <div style={stylesItem}>
      <img className={styles.sk} src={image} alt="product_image" />
      <hr />
      <h3>{name}</h3>
      <div className={styles.price_container}>
        <p>Цена: </p>
        <p>{price}</p>
      </div>
      {currentPage.includes("/cart") ? (
        <img onClick={handleRemove} src={icon} alt="remove_icon" />
      ) : (
        <img onClick={handleAdd} src={icon} alt="add_icon" />
      )}
    </div>
  );
}

export default CartItem;
