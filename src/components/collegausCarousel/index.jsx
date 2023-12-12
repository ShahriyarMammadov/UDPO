import React, { useState } from "react";
import "./index.scss";
import GİN from "../../assets/images/collegaus/GİN.png";
import ecosoc from "../../assets/images/collegaus/ecosoc.png";
import insanhuquqlari from "../../assets/images/collegaus/unhr.png";
import MN from "../../assets/images/collegaus/MN.png";
import ombudsman from "../../assets/images/collegaus/ombudsman.png";
import qhta from "../../assets/images/collegaus/qhta.png";
import sehersalma from "../../assets/images/collegaus/ardsak.png";
import smn from "../../assets/images/collegaus/smn.png";
import undesa from "../../assets/images/collegaus/undesa.png";
import undp from "../../assets/images/collegaus/undp.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image } from "antd";

const ColleaguesComponent = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <Image src={GİN} alt="gencler ve idman nazirliyi" />
    </div>,
    <div className="item" data-value="2">
      <Image src={ombudsman} alt="ombudsman" />
    </div>,
    <div className="item" data-value="3">
      <Image src={ecosoc} alt="ecosoc" />
    </div>,
    <div className="item" data-value="4">
      <Image src={insanhuquqlari} alt="insanhuquqlari" />
    </div>,
    <div className="item" data-value="5">
      <Image src={sehersalma} alt="sehersalma" />
    </div>,
    <div className="item" data-value="6">
      <Image src={MN} alt="medeniyyetveturizmnazirliyi" />
    </div>,
    <div className="item" data-value="7">
      <Image src={smn} alt="sosialmudafienazirliyi" />
    </div>,
    <div className="item" data-value="8">
      <Image src={undesa} alt="undesa" />
    </div>,
    <div className="item" data-value="9">
      <Image src={undp} alt="undp" />
    </div>,
    <div className="item" data-value="10">
      <Image src={qhta} alt="QHT" />
    </div>,
  ];

  return (
    <div id="colleaguesComponent">
      <div className="container">
        <h1>Əməkdaşlarımız</h1>
      </div>

      <div className="carousel">
        <AliceCarousel
          mouseTracking
          autoPlay
          // autoPlayControls
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          items={items}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default ColleaguesComponent;
