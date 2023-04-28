import { FC } from "react";

import Button from "../../components/button/Button";
import Header from "../../components/header/Header";

import styles from "./HomeSection.module.scss";

const HomeSection: FC = () => {
  return (
    <header
      className={styles.header}
      style={{
        background: "url(/assets/header-cats.png) no-repeat center scroll",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <h1 className="text-2xl max-sm:text-lg text-white font-montserrat font-medium">
        ISR Labs
      </h1>
      <p className="text-5xl max-sm:text-3xl text-white font-montserrat font-extrabold px-4">
        Продемонструй свій талант
      </p>
      <Button glow>Capture</Button>
    </header>
  );
};

export default HomeSection;
