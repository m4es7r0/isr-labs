import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../components/button/Button";
import styles from "./ContactsSection.module.scss";

interface Inputs {
  name: string;
  email: string;
  text: string;
}

const ContactsSection: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post("http://localhost:4000/registration", data);
    reset();
  };

  return (
    <>
      <div id="contacts" className="invisible h-0 -mt-[104px]"></div>
      <section className={styles.contacts}>
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 items-center min-w-0"
          >
            <h1 className="font-montserrat font-semibold text-[#323232] text-3xl text-center">
              Реєстрація на захід
            </h1>

            <input
              placeholder="ПІБ"
              autoComplete="off"
              minLength={3}
              {...register("name", {
                required: "this field is required",
                minLength: {
                  message: "min length 3",
                  value: 3,
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <input
              placeholder="gmail@gmail.com"
              type="email"
              {...register("email", {
                required: "this field is required",
                minLength: {
                  message: "min length 5",
                  value: 5,
                },
                pattern: {
                  message: "invalid email",
                  // eslint-disable-next-line
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <textarea
              autoComplete="off"
              placeholder="Напишіть трохи про себе"
              onInput={(e) => {
                e.currentTarget.style.height = "";
                e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
              }}
              {...register("text", {
                required: "this field is required",
                maxLength: {
                  message: "max length 152",
                  value: 152,
                },
              })}
            ></textarea>
            {errors.text && <span>{errors.text.message}</span>}

            <Button form>Надіслати</Button>
          </form>
          <img src="/assets/form-cat1.png" alt="cat king" />
        </div>
      </section>
    </>
  );
};

export default ContactsSection;
