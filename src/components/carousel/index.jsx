import React from "react";
import { Carousel } from "antd";
import "./index.scss";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";
import news4 from "../../assets/images/news4.jpg";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  return (
    <div id="carousel" className="carousel">
      <Carousel afterChange={onChange} autoplay>
        <div className="cover">
          <Link>
            <img src={news1} alt="news" className="carouselImage"/>
            <div className="carouselContent">
             HAMI ÜÇÜN BƏRABƏR İMKANLAR
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <img src={news2} alt="news" className=" carouselImage" />
            <div className="carouselContent">
           HAMI ÜÇÜN LAYİQLİ İŞ 
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <img src={news3} alt="news" className="carouselImage" />
            <div className="carouselContent">
             SOSİAL CƏHƏTDƏN HƏSSAS İNSANLARA SOSİAL XİDMƏT
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <img src={news4} alt="news" className="carouselImage" />
            <div className="carouselContent">
              3 DEKABR - Beynəlxalq Əlilliyi Olan şəxslər günü 
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
