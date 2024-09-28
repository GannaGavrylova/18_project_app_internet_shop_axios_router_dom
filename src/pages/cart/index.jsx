import CartList from "../../components/cartList";
import styles from "./styles.module.css";
import korsina from "../../assets/icons/korsina.svg";

function Cart() {
  const stylesData = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "45px",
    },
    item: {
      display: "inline-flex",
      gap: "15px",
      alignItems: "center",
    },
  };
  return (
    <div className={styles.cart_container}>
      <CartList
        path={"cartItem"}
        icon={korsina}
        title={"Корзина"}
        stylesData={stylesData}
      />
    </div>
  );
}

export default Cart;
