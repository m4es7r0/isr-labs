import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

const Button: FC<PropsWithChildren<{ glow?: boolean; form?: boolean }>> = ({
  glow = false,
  form,
  children,
}) => {
  return (
    <>
      {!form ? (
        <a href="#" tabIndex={-1} style={{ width: `${form ? "100%" : ""}` }}>
          <button className={glow ? styles.glow_button : styles.button}>
            {children}
          </button>
        </a>
      ) : (
        <button
          className="font-montserrat font-medium px-9 py-3 bg-[#212121] hover:bg-[#323232] transition-all rounded-full text-white text-center min-w-[200px] w-full"
          type="submit"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
