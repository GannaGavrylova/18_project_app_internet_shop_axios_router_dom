import styles from "./styles.module.css";
import banner from "../../assets/images/banner.png";
import CartList from "../../components/cartList";
import addToCardIcon from "../../assets/icons/addToCardIcon.svg";

function Main() {
  const stylesData = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    item: {
      display: "inline-flex",
      flexDirection: "column",
      gap: " 10px",
      border: "2px solid black",
      borderRadius: "8px",
      fontSize: "24px",
      color: "rgba(000, 000, 000, 0.5)",
      fontWeight: "100",
    },
    icon: {
      width: "30px",
      height: "30px",
    },
  };
  return (
    <div className={styles.main_container}>
      <img src={banner} width="100%" alt="banner" />
      <CartList
        path={"productData"}
        icon={addToCardIcon}
        stylesData={stylesData}
        title={"Товары"}
      />
    </div>
  );
}

export default Main;
