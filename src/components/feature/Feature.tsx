import { FC } from "react";
import styles from "./Feature.module.scss";

export interface IFeatureComponent {
  id: number;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  text: string;
}

const Feature: FC<IFeatureComponent> = ({ image, text, title }) => {
  return (
    <div className={styles.feature}>
      <img
        src={`/assets/${image.url}`}
        alt={image.alt}
        className="max-w-[120px]"
      />
      <div>
        <h2>{title}</h2>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
