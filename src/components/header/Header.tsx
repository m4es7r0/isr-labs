import { FC, useEffect, useState } from "react";

import clsx from "clsx";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cleanUp = () => {
      setScrolled(window.scrollY >= window.innerHeight);
    };

    window.addEventListener("scroll", cleanUp);
    return () => window.removeEventListener("scroll", cleanUp);
  });

  return (
    <nav
      className={clsx(styles.header, {
        "text-[#323232]": scrolled,
        "[&>ul>*]:hover:after:bg-[#323232]": scrolled,
      })}
    >
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
