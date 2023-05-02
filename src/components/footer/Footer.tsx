import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto py-10 px-4 flex max-sm:flex-col-reverse max-sm:gap-20 justify-between items-center text-white font-roboto">
        <div className="flex flex-col gap-5">
          <h2 className="font-roboto font-medium text-xl max-sm:text-center">
            ISR Labs
          </h2>
          <span className="font-roboto text-sm">{`© ${new Date().getFullYear()}. Всі права захищені.`}</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Контактна інформація</h2>
          <figure className="flex gap-3">
            <img
              src="/assets/telegram.svg"
              alt="telegram"
              className="h-7 w-7"
            />
            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`}>
              {import.meta.env.VITE_CONTACT_PHONE}
            </a>
          </figure>
          <figure className="flex gap-3">
            <img src="/assets/letter.svg" alt="letter" className="h-7 w-7" />
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
              {import.meta.env.VITE_CONTACT_EMAIL}
            </a>
          </figure>
        </div>

        <ul>
          <li>
            <a>
              <img src="/assets/letter-2.svg" alt="letter" />
            </a>
          </li>
          <li>
            <a>
              <img src="/assets/telegram-2.svg" alt="telegram" />
            </a>
          </li>
          <li>
            <a>
              <img src="/assets/card.svg" alt="bank card" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
