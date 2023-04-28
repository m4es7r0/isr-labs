import { FC, useState } from "react";

import Input from "../../components/inputs/Input";
import TextArea from "../../components/inputs/TextArea";

import Button from "../../components/button/Button";
import styles from "./ContactsSection.module.scss";

const ContactsSection: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  return (
    <>
      <div id="contacts" className="invisible h-0 -mt-[104px]"></div>
      <section className={styles.contacts}>
        <div className="container mx-auto px-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setName("");
              setEmail("");
              setAboutMe("");
            }}
            className="flex flex-col gap-5 items-center min-w-0"
          >
            <h1 className="font-montserrat font-semibold text-3xl text-center">
              Реєстрація на захід
            </h1>
            <Input
              value={name}
              onchange={(e: any) => setName(e.target.value)}
              placeholder="ПІБ"
              name="fullname"
              required
            />
            <Input
              value={email}
              onchange={(e: any) => setEmail(e.target.value)}
              placeholder="gmail@gmail.com"
              name="email"
              type="email"
              required
            />
            <TextArea
              value={aboutMe}
              onchange={(e: any) => setAboutMe(e.target.value)}
              placeholder="Напишіть трохи про себе"
              name="about-me"
              required
            ></TextArea>
            <Button form>Надіслати</Button>
          </form>
          <img src="/assets/form-cat1.png" alt="cat king" />
        </div>
      </section>
      <section className="container mx-auto py-20 px-4"></section>
    </>
  );
};

export default ContactsSection;
