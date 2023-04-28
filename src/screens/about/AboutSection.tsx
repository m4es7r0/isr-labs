import { FC } from "react";
import Feature from "../../components/feature/Feature";

import styles from "./AboutSection.module.scss";

import Button from "../../components/button/Button";
import features from "../../data/feature.json";

const AboutSection: FC = () => {
  return (
    <section className={styles.about} id="about">
      <h1 className="font-montserrat font-bold text-4xl px-4 w-1/2 max-xl:w-full max-lg:w-full">
        Ми стовимо платформу для вашої командної гри
      </h1>
      <p className="font-montserrat text-[#999] px-4 -mt-10 w-1/2 max-xl:w-full max-lg:w-full">
        У нашому заході ми плануємо підняти в хмарі машину, яка буде головним
        об'єктом гри для двох команд - синіх та червоних. Головна мета гравців
        полягатиме у тому, щоб якомога швидше захопити машину та забезпечити
        безперешкодний доступ до неї.
      </p>
      <div>
        {features.map((props) => {
          return <Feature key={props.id} {...props} />;
        })}
      </div>
      <Button>Game</Button>
    </section>
  );
};

export default AboutSection;
