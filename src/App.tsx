import { FC } from "react";

import AboutSection from "./screens/about/AboutSection";
import HomeSection from "./screens/home/HomeSection";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
    </>
  );
};

export default App;
