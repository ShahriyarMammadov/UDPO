import React, { useEffect, useState } from "react";
import "./index.scss";
import { Image, Spin, Typography } from "antd";
import axios from "axios";

const PhotoGallery = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Text } = Typography;

  useEffect(() => {
    getPhotoGalleryData();
  }, []);

  const getPhotoGalleryData = async () => {
    try {
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/gallery/getAllGallery`
      );
      setAllData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="photoGallery">
      <div className="grid-container container">
        {loading ? (
          <Spin
            size="large"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "70vh",
            }}
          />
        ) : (
          allData?.map((e, i) => {
            const imageUrls = e?.images?.map(
              (image) =>
                `https://udpobackend-production.up.railway.app/images/${image}`
            );
            return (
              <>
                <div style={{ position: "relative" }}>
                  <Image.PreviewGroup items={imageUrls} key={i}>
                    <Image
                      src={`https://udpobackend-production.up.railway.app/images/${e?.coverImage}`}
                    />
                  </Image.PreviewGroup>
                  <Text
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "6px 10px",
                    }}
                  >
                    {e?.name?.length > 86 ? e?.name?.slice(0, 87) : e?.name}
                  </Text>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
