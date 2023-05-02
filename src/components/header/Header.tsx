import { FC } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <a href="#" tabIndex={0}>
            Головна
          </a>
        </li>
        <li>
          <a href="#about">Про нас</a>
        </li>
        <li>
          <a href="#process">Процес</a>
        </li>
        <li>
          <a href="#rules">Правила</a>
        </li>
        <li>
          <a href="#contacts">Зв’язок</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
