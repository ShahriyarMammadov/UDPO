import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import SiteNavigation from "../../components/navigation";
import { Image, Spin } from "antd";
import axios from "axios";

const NewsDetail = () => {
  const [detailData, setDetailData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getNewsByID();
  }, []);

  const getNewsByID = async () => {
    try {
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/news/newsById/${id}`
      );
      setDetailData(data);
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      setLoading(false);
    }
  };

  return (
    <div id="newsDetail">
      <div className="container">
        {loading ? (
          <Spin
            size="large"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "90vh",
            }}
          />
        ) : (
          <>
            <SiteNavigation
              navigationData={{
                category: "Xəbərlər",
                subcategory: detailData?.name,
              }}
            />

            <div className="newsImage">
              <Image
                src={`https://udpobackend-production.up.railway.app/images/${detailData?.coverImage}`}
                alt={detailData?.name}
              />
            </div>
            <div className="newsText">
              <p dangerouslySetInnerHTML={{ __html: detailData?.text }}></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
