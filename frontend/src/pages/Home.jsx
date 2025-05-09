import React from "react";
import Header from "../components/Header";
import Step from "../components/Step";
import BgSlider from "../components/BgSlider";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Step />
      <BgSlider />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;
