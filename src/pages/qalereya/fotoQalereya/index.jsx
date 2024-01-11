import React from "react";
import "./index.scss";
import { Image } from "antd";

const PhotoGallery = () => {
  const data = [
    {
      url: "https://armariumbackend-production.up.railway.app/images/coverImage-1702040286560-535097244.jpg",
      name: "teasgdyasyu a;slfm",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU",
      name: "teasgdyasyu a;slfm",
    },
    {
      url: "https://armariumbackend-production.up.railway.app/images/coverImage-1702040286560-535097244.jpg",
      name: "teasgdyasyu a;slfm",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Velb4WTMSb5h9nXcIbiwhbsWe-dQXswwFg&usqp=CAU",
      name: "teasgdyasyu a;slfm",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Velb4WTMSb5h9nXcIbiwhbsWe-dQXswwFg&usqp=CAU",
      name: "teasgdyasyu a;slfm",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgocFKL7nrTQ6SDRjVIIexUKXiye1Vc0YGA&usqp=CAU",
      name: "teasgdyasyu a;slfm",
    },
  ];

  return (
    <div id="photoGallery">
      <div className="grid-container container">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {data?.map((e, i) => {
            return <Image key={i} src={e?.url} />;
          })}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default PhotoGallery;
