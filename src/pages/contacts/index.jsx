import styles from "./styles.module.css";
import React from "react";
import snapchat from "../../assets/icons/snapchat.svg.svg";
import facebook from "../../assets/icons/facebook.svg.svg";
import x_icons from "../../assets/icons/x_icons.svg.svg";

function Contacts() {
  return (
    <section className={styles.contacts_container}>
      <h1>Контакты</h1>
      <hr />

      <div className={styles.contacts}>
        <div className={styles.contactsContacts}>
          <ul>
            <li>8 800 000 00 00</li>
            <li>emailexample@email.com</li>
          </ul>
          <form className={styles.form_feedback}>
            <input type="email" name="email" placeholder="Ваш email" />
            <input type="text" name="name" placeholder="Ваше имя" />
            <br />
            <input type="text" name="text" placeholder="Ваше сообщение" />
            <br />
            <button>Отправить</button>
          </form>
        </div>
        <div className={styles.social_media}>
          <h4>Найдите нас: </h4>
          <div className={styles.link_socialMedia}>
            <a href="https://www.snapchat.com/">
              <img src={snapchat} alt="snapchat" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://x.com/">
              <img src={x_icons} alt="x_icons" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
