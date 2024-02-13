import React from "react";
import { Carousel } from "antd";
import "./index.scss";
// import news1 from "../../assets/images/news1.jpg";
// import news2 from "../../assets/images/news2.jpg";
// import news3 from "../../assets/images/news3.jpg";
// import news4 from "../../assets/images/news4.jpg";
import { Link } from "react-router-dom";

const CarouselComponent = ({ data }) => {
  const onChange = (currentSlide) => {};

  return (
    <div id="carousel" className="carousel">
      <Carousel afterChange={onChange} autoplay>
        {data?.map((e, i) => {
          return (
            <div className="cover" key={e?._id}>
              <Link>
                <img
                  src={`https://udpobackend-production.up.railway.app/images/${e?.coverImage}`}
                  alt={e?.name}
                  className="carouselImage"
                />
                <div className="carouselContent">
                  <p>{e?.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
