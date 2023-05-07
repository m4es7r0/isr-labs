import { FC } from "react";

import rules from "../../data/rules.json";

import styles from "./RulesSection.module.scss";

const RulesSection: FC = () => {
  return (
    <>
      <div id="rules" className="invisible h-0 -mt-[88px]"></div>
      <section className={styles.rules}>
        <h1>Правила гри</h1>
        <div>
          <ul>
            {rules.slice(0, 4).map((r) => (
              <li key={r.id}>{r.text}</li>
            ))}
          </ul>
          <img src="/assets/cats1.png" alt="cats" />
        </div>
        <div>
          <ul>
            {rules.slice(4).map((r) => (
              <li key={r.id}>{r.text}</li>
            ))}
          </ul>
          <img src="/assets/cat2.png" alt="cat" />
        </div>
      </section>
    </>
  );
};

export default RulesSection;
