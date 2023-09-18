import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import genclerveidmannaziri from "../../assets/images/collegaus/genclerveidmannazirliyi.jpg";
import ecosoc from "../../assets/images/collegaus/ecosoc.jpg";
import insanhuquqlari from "../../assets/images/collegaus/insanhuquqlari.jpg";
import medeniyyetveturizmnazirliyi from "../../assets/images/collegaus/medeniyyetveturizmnazirliyi.png";
import ombudsman from "../../assets/images/collegaus/ombudsman.png";
import sehersalma from "../../assets/images/collegaus/sehersalma.jpg";
import sosialmudafienazirliyi from "../../assets/images/collegaus/sosialmudafienazirliyi.png";
import undesa from "../../assets/images/collegaus/undesa.jpg";
import undp from "../../assets/images/collegaus/undp.png";

const ColleaguesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    genclerveidmannaziri,
    ecosoc,
    insanhuquqlari,
    medeniyyetveturizmnazirliyi,
    ombudsman,
    sehersalma,
    sosialmudafienazirliyi,
    undesa,
    undp,
  ];

  const containerRef = useRef(null);

  const nextSlide = () => {
    if (containerRef.current) {
      const nextIndex =
        currentIndex + 4 < images.length ? currentIndex + 4 : images.length - 4;
      setCurrentIndex(nextIndex);
      containerRef.current.style.transform = `translateX(-${
        nextIndex * (100 / 4)
      }%)`;
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      const prevIndex = currentIndex - 4 >= 0 ? currentIndex - 4 : 0;
      setCurrentIndex(prevIndex);
      containerRef.current.style.transform = `translateX(-${
        prevIndex * (100 / 4)
      }%)`;
    }
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (!isHovered) {
  //         currentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       }
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div id="colleaguesComponent">
      <div className="container carousel" ref={containerRef}>
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
        <button className="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ColleaguesComponent;
