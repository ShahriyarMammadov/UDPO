import React from "react";
import { Carousel } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";

const CarouselComponent = ({ data }) => {
  const onChange = (currentSlide) => {};

  return (
    <div id="carousel" className="carousel">
      <Carousel afterChange={onChange} autoplay>
        {data?.map((e, i) => {
          return (
            <div className="cover" key={e?._id}>
              <Link
                to={`/xeberler/${e?._id}`}
                style={{ backgroundColor: "red" }}
              >
                <img
                  src={`https://udpobackend-production.up.railway.app/images/${e?.coverImage}`}
                  alt={e?.name}
                  className="carouselImage"
                />
                <div className="carouselContent">
                  <p>
                    {e?.name?.length > 50
                      ? e?.name?.slice(0, 50) + " " + "...."
                      : e?.name}
                  </p>
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
