import CartList from "../../components/cartList";
import styles from "./styles.module.css";
import korsina from "../../assets/icons/korsina.svg";
import { connect } from "react-redux";
// import { removeItem } from "../../redux/actions";

function Cart({ cartItems }) {
  const currentPage = window.location.pathname;
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
        // removeItemFromCart={removeItemFromCart}
        cartItems={cartItems}
        // isInCart={true}
        currentPage={currentPage}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeItemFromCart: (id) => dispatch(removeItem(id)),
//   };
// };

export default connect(mapStateToProps)(Cart);
// export default Cart;
