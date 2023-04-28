import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

const Button: FC<PropsWithChildren<{ glow?: boolean }>> = ({
  glow = false,
  children,
}) => {
  return (
    <a href="#" tabIndex={-1}>
      <button className={glow ? styles.glow_button : styles.button}>
        {children}
      </button>
    </a>
  );
};

export default Button;
