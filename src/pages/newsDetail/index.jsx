import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import SiteNavigation from "../../components/navigation";
import { Image } from "antd";

const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div id="newsDetail">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xəbərlər",
            subcategory: id,
          }}
        />

        <div className="newsImage">
          <Image src="https://udpo.az/uploads/h%C9%99.jpg" alt="Name" />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
