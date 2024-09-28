import styles from "./styles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "../cartItem";

function CartList({ path, icon, stylesData, title }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);
  async function getCartItems() {
    try {
      const response = await axios.get(
        // "https://66ced65d901aab24841fc4b8.mockapi.io/cartItem"
        `https://66ced65d901aab24841fc4b8.mockapi.io/${path}` // создаем интерполяцию
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
                />
              );
            })}
          </div>
          {title === "Корзина" && (
            <div className={styles.total_order_container}>
              <h3>Итого</h3>
              {cartList.map((item) => (
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

export default CartList;
