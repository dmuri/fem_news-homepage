import styles from "./Navbar.module.css";
import logo from "../../public/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menubutton} onClick={toggleMenu}>
        <button className={isMenuVisible ? styles.active : ""}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </button>
      </div>
      <div
        className={`${styles.modal} ${isMenuVisible ? styles.visible : ""}`}
        onClick={toggleMenu}
      ></div>
      <ul className={`${styles.menu} ${isMenuVisible ? styles.visible : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
