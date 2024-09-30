import styles from "./styles.module.css";
import banner from "../../assets/images/banner.png";
import CartList from "../../components/cartList";
import addToCardIcon from "../../assets/icons/addToCardIcon.svg";
// import { connect } from "react-redux";
// import { addItemInCart } from "../../redux/actions";

function Main({ currentPage }) {
  // console.log("Main component");
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
        currentPage={currentPage}
        // addItemToCart={addItemToCart}
        // cartItems={cartItems}
      />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   cartItems: state.cartItems,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItemToCart: (item) => dispatch(addItemInCart(item)),
//   };
// };

// export default connect(mapStateToProps)(Main);

export default Main;
