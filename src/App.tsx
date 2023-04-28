import { FC } from "react";

import AboutSection from "./screens/about/AboutSection";
import HomeSection from "./screens/home/HomeSection";
import ProcessSection from "./screens/process/ProcessSection";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProcessSection />
      <div className="min-h-screen"></div>
    </>
  );
};

export default App;
