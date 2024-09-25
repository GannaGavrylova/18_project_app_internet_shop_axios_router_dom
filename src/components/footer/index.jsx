import styles from "./styles.module.css";
import facebook_white from "../../assets/icons/facebook_white.svg.svg";
import twiter from "../../assets/icons/twiter.svg.svg";
import instagram from "../../assets/icons/instagram.svg.svg";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer_left}>
        <p>Контакты</p>
        <div>
          8 800 000 00 00
          <br />
          emailexample@email.com
        </div>

        <div>2024 Сникер-магазин. Все права защищены </div>
      </div>
      <div className={styles.footer_right}>
        <div>
          <a href="link.domain">
            <img src={facebook_white} alt="facebook" />
          </a>
          <a href="link.domain">
            <img src={twiter} alt="twitter" />
          </a>
          <a href="link.domain">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <input type="text" placeholder="Введите свой email:" />
      </div>
    </footer>
  );
}

export default Footer;
