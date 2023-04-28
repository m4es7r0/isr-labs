import { FC } from "react";

import styles from "./ProcessSection.module.scss";

import icons from "../../data/process-icons.json";

const ProcessSection: FC = () => {
  return (
    <>
      <div id="process" className="invisible h-0 -mt-[104px]"></div>
      <section className={styles.process}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-12">
            <h1 className="font-montserrat font-bold text-4xl text-[#323232]">
              King of the Hill
            </h1>
            <p className="font-montserrat text-[#282828] mt-6">
              У цій грі немає стандартних правил та обмежень щодо використання
              програмного забезпечення, що дає більшу свободу дій учасникам та
              створює додатковий виклик для їхніх навичок та креативності.
            </p>
            <a
              href="#rules"
              className="underline font-montserrat font-medium text-[#4985ff] w-fit"
            >
              Детальніше про правила гри
            </a>
          </div>
          <div>
            <img src="/assets/cat-on-a-cat.png" alt="cat on a cat" />
          </div>
        </div>
        <div className="container mx-auto h-[2px] rounded-full bg-[#E0E0E0]"></div>
        <div className="container mx-auto px-4 grid gap-[156px] grid-flow-col max-lg:flex flex-wrap justify-center items-center py-20">
          {icons.map((icon) => {
            return (
              <img
                src={`/assets/${icon.url}`}
                alt={icon.alt}
                key={icon.id}
                style={{ minWidth: 48 }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
