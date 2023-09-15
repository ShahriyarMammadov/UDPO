import React from "react";
import "./index.scss";
import CarouselComponent from "../../components/carousel";

const HomePage = () => {
  return (
    <main>
      <section id="section1" className="news carousel">
        <CarouselComponent />
      </section>
    </main>
  );
};

export default HomePage;
