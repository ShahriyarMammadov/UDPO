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
    <div id="carousel">
      <Carousel afterChange={onChange} autoplay>
        <div>
          <Link>
            <img src={news1} alt="news" className="carouselImage" />
            <div className="carouselContent">
              Bakının Azadlıq meydanında Vətən müharibəsində Qələbəyə həsr
              olunmuş Zəfər paradı keçirilir Azərbaycan Prezidenti İlham Əliyev
              və Türkiyə Prezidenti Rəcəb Tayyib Ərdoğan paradda iştirak edirlər
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <img src={news2} alt="news" className=" carouselImage" />
            <div className="carouselContent">
              Bakının Azadlıq meydanında Vətən müharibəsində Qələbəyə həsr
              olunmuş Zəfər paradı keçirilir Azərbaycan Prezidenti İlham Əliyev
              və Türkiyə Prezidenti Rəcəb Tayyib Ərdoğan paradda iştirak edirlər
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <img src={news3} alt="news" className="carouselImage" />
            <div className="carouselContent">
              Bakının Azadlıq meydanında Vətən müharibəsində Qələbəyə həsr
              olunmuş Zəfər paradı keçirilir Azərbaycan Prezidenti İlham Əliyev
              və Türkiyə Prezidenti Rəcəb Tayyib Ərdoğan paradda iştirak edirlər
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <img src={news4} alt="news" className="carouselImage" />
            <div v className="carouselContent">
              Bakının Azadlıq meydanında Vətən müharibəsində Qələbəyə həsr
              olunmuş Zəfər paradı keçirilir Azərbaycan Prezidenti İlham Əliyev
              və Türkiyə Prezidenti Rəcəb Tayyib Ərdoğan paradda iştirak edirlər
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
