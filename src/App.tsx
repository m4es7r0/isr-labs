import { FC } from "react";

import HomeSection from "./screens/home/HomeSection";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <HomeSection />
      <div className="min-h-screen"></div>
    </>
  );
};

export default App;
