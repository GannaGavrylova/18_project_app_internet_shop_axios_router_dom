import korsina from "../../assets/icons/korsina.svg";
import styles from "./styles.module.css";

function CartItem({ id, name, price, image, icon, stylesItem }) {
  return (
    <div style={stylesItem}>
      <img className={styles.sk} src={image} alt="product_image" />
      <hr />
      <h3>{name}</h3>
      <div className={styles.price_container}>
        <p>Цена: </p>
        <p>{price}</p>
      </div>

      <img src={icon} alt="remove_icon" />
    </div>
  );
}

export default CartItem;
