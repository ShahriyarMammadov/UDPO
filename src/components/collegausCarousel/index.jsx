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
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image } from "antd";

const ColleaguesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <Image src={genclerveidmannaziri} alt="gencler ve idman nazirliyi" />
    </div>,
    <div className="item" data-value="2">
      <Image src={ecosoc} alt="ecosoc" />
    </div>,
    <div className="item" data-value="3">
      <Image src={insanhuquqlari} alt="insanhuquqlari" />
    </div>,
    <div className="item" data-value="4">
      <Image
        src={medeniyyetveturizmnazirliyi}
        alt="medeniyyetveturizmnazirliyi"
      />
    </div>,
    <div className="item" data-value="5">
      <Image src={ombudsman} alt="ombudsman" />
    </div>,
    <div className="item" data-value="6">
      <Image src={sehersalma} alt="sehersalma" />
    </div>,
    <div className="item" data-value="7">
      <Image src={sosialmudafienazirliyi} alt="sosialmudafienazirliyi" />
    </div>,
    <div className="item" data-value="8">
      <Image src={undesa} alt="undesa" />
    </div>,
    <div className="item" data-value="9">
      <Image src={undp} alt="undp" />
    </div>,
  ];

  return (
    <div id="colleaguesComponent">
      <div className="container carousel">
        <h1>ƏMƏKDAŞLARIMIZ</h1>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default ColleaguesComponent;
