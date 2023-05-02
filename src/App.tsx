import { FC } from "react";

import Footer from "./components/footer/Footer";
import AboutSection from "./screens/about/AboutSection";
import ContactsSection from "./screens/contacts/ContactsSection";
import HomeSection from "./screens/home/HomeSection";
import ProcessSection from "./screens/process/ProcessSection";
import RulesSection from "./screens/rules/RulesSection";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProcessSection />
      <RulesSection />
      <ContactsSection />
      <Footer />
    </>
  );
};

export default App;
