import { FC } from "react";
import styles from "./Button.module.scss";

const Button: FC<{ glow?: boolean }> = ({ glow = false }) => {
  return (
    <a href="#" tabIndex={-1}>
      <button className={glow ? styles.glow_button : styles.button}>
        Capture
      </button>
    </a>
  );
};

export default Button;
