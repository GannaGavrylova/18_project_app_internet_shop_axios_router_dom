import styles from "./styles.module.css";
import axios from "axios";
import { useEffect } from "react";
import CartItem from "../cartItem";
import { connect } from "react-redux";
import { useState } from "react";
import { addItemInCart, removeItem } from "../../redux/actions";

function CartList({
  path,
  icon,
  stylesData,
  title,
  cartItems,
  addItemToCart,
  removeItemFromCart,
  currentPage,
}) {
  console.log("Товары в корзине:", cartItems);
  const [cartList, setCartList] = useState([]);

  // Используем useEffect для получения данных с сервера
  useEffect(() => {
    getCartItems(cartItems);
  }, []); // Запускаем только при монтировании компонента

  async function getCartItems() {
    try {
      const response = await axios.get(
        `https://66ced65d901aab24841fc4b8.mockapi.io/${path}`
      );
      setCartList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const totalPrice = cartList.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  function handleAddToCart(item) {
    console.log(item);
    addItemToCart(item);
  }

  function handleRemoveFromCart(id) {
    console.log(id);
    removeItemFromCart(id);
  }

  return (
    <div style={stylesData.container}>
      <h1>{title}</h1>
      <hr />
      {cartList.length === 0 ? (
        <h3>{title === "Корзина" ? "Ваша корзина пуста..." : "Товаров нет"}</h3>
      ) : (
        <div className={styles.cartItem_container}>
          <div>
            {cartList.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.id}
                  {...cartItem}
                  icon={icon}
                  stylesItem={stylesData.item}
                  handleAdd={() => handleAddToCart(cartItem)}
                  handleRemove={() => handleRemoveFromCart(cartItem.id)}
                  currentPage={currentPage}
                />
              );
            })}
          </div>
          {title === "Корзина" && (
            <div className={styles.total_order_container}>
              <h3>Итого</h3>
              {cartItems.map((item) => (
                <div key={item.id}>
                  {item.name} - {item.price}
                </div>
              ))}
              <hr />
              <h2>Цена: {totalPrice} </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Подключаем состояние корзины к компоненту
// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartItems,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemInCart(item)),
    removeItemFromCart: (id) => dispatch(removeItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartList);
// export default CartList;
