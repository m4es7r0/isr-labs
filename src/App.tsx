import { FC } from "react";

import AboutSection from "./screens/about/AboutSection";
import HomeSection from "./screens/home/HomeSection";
import ProcessSection from "./screens/process/ProcessSection";
import RulesSection from "./screens/rules/RulesSection";

import "./App.css";
import ContactsSection from "./screens/contacts/ContactsSection";

const App: FC = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProcessSection />
      <RulesSection />
      <ContactsSection />
    </>
  );
};

export default App;
