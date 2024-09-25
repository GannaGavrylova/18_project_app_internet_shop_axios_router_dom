import styles from "./styles.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.left_container_nav}>
        <h4>Сникер - магазин</h4>
      </div>
      <div className={styles.right_container_nav}>
        <NavLink
          to="/"
          style={{
            color: "white",
            paddingRight: "64px",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Главна
        </NavLink>
        <NavLink
          to="/cart"
          style={{
            color: "white",
            paddingRight: "64px",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Корзина
        </NavLink>
        <NavLink
          to="/contacts"
          style={{ color: "white", textDecoration: "none", fontSize: "15px" }}
        >
          Контакты
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
